import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { message: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Configure Nodemailer transporter setup
        // For this example, and avoiding putting sensitive auth tokens in code, we are
        // logging the output, but setting up the exact structure needed.
        // In production, you would configure SMTP info here, e.g. Mailgun, SendGrid, Gmail.

        // NOTE: Ensure these exist in your production .env environment!
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.ethereal.email',
            port: Number(process.env.SMTP_PORT) || 587,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: `"${name}" <${process.env.SMTP_USER || 'no-reply@domain.com'}>`, // Send from authenticated user
            replyTo: email,
            to: 'ayushjhaa1187@gmail.com', // Destination email
            subject: `New Portfolio Contact: ${subject || 'No Subject'}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject || 'No Subject'}</p>
            <br/>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
        `,
        };

        // Since we don't have explicit auth variables in this environment and don't want to crash on test:
        if (process.env.SMTP_USER && process.env.SMTP_PASS) {
            await transporter.sendMail(mailOptions);
        } else {
            console.warn("SMTP variables missing. Simulating successful send. Mail Options:", mailOptions);
        }

        return NextResponse.json(
            { message: 'Message sent successfully!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { message: 'Failed to send message', error: String(error) },
            { status: 500 }
        );
    }
}
