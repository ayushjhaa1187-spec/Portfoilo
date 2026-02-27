import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const data = await req.json();

        // In a real application, you would integrate Nodemailer or a service like Resend here
        // For now, we simulate success so the form works visually without a whole separate backend

        console.log('Received contact submission:', data);

        return NextResponse.json({ success: true, message: 'Message received' }, { status: 200 });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}
