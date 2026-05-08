import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export async function POST(req: Request) {
    try {
        const data = await req.json();
        
        let emailSent = false;
        let googleSheetsSaved = false;
        let errorMessage = '';

        // 1. SEND EMAIL NOTIFICATION
        try {
            if (process.env.EMAIL_PASS) {
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: process.env.EMAIL_USER,
                        pass: process.env.EMAIL_PASS,
                    },
                });

                const emailTemplate = `
                    <div style="font-family: Arial, sans-serif; padding: 20px; color: #1A1A1A;">
                        <h2 style="color: #FF6B35;">New Website Inquiry</h2>
                        <p><strong>Name:</strong> ${data.name}</p>
                        <p><strong>Email:</strong> ${data.email}</p>
                        <p><strong>Purpose:</strong> ${data.purpose}</p>
                        <p><strong>Organization:</strong> ${data.organization || 'N/A'}</p>
                        <p><strong>Message:</strong></p>
                        <div style="background: #F7F6F0; padding: 15px; border-radius: 10px;">${data.message || 'N/A'}</div>
                    </div>
                `;

                await transporter.sendMail({
                    from: `"Wearism" <${process.env.EMAIL_USER}>`,
                    to: process.env.EMAIL_USER,
                    subject: `[Lead] ${data.name} - ${data.purpose}`,
                    html: emailTemplate,
                });
                emailSent = true;
            }
        } catch (emailError: any) {
            console.error('Email failed:', emailError.message);
        }

        // 2. SAVE TO GOOGLE SHEETS
        try {
            if (process.env.GOOGLE_CREDENTIALS_BASE64) {
                // Decode the base64 credentials
                const jsonStr = Buffer.from(process.env.GOOGLE_CREDENTIALS_BASE64, 'base64').toString('utf8');
                const credentials = JSON.parse(jsonStr);

                const serviceAccountAuth = new JWT({
                    email: credentials.client_email,
                    key: credentials.private_key,
                    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
                });

                const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, serviceAccountAuth);
                await doc.loadInfo();
                const sheet = doc.sheetsByIndex[0];
                
                await sheet.addRow({
                    'Timestamp': new Date().toLocaleString(),
                    'Name': data.name,
                    'Email': data.email,
                    'Inquiry Purpose': data.purpose,
                    'Organization/Brand': data.organization || 'Individual',
                    'Preferred Archetype': data.archetype,
                    'Message': data.message || 'No message provided'
                });
                googleSheetsSaved = true;
            } else {
                throw new Error('Missing GOOGLE_CREDENTIALS_BASE64 in env');
            }
        } catch (gsError: any) {
            console.error('Google Sheets Error:', gsError.message);
            errorMessage = gsError.message;
        }

        // RETURN STATUS
        if (googleSheetsSaved) {
            return NextResponse.json({ 
                success: true, 
                message: 'Data saved to Google Sheets successfully!' 
            });
        }

        return NextResponse.json({ 
            success: false, 
            error: `Google Sheets Save Failed: ${errorMessage}.` 
        }, { status: 500 });

    } catch (error: any) {
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
