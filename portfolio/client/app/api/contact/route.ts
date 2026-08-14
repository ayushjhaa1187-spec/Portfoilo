import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message, honeypot } = await req.json();

    // Anti-spam honeypot check
    if (honeypot) {
      console.warn('Honeypot triggered by spam bot');
      return NextResponse.json({ message: 'Success' }, { status: 200 });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Security: Escape user inputs to prevent HTML injection in emails
    const escapeHTML = (str: string) => {
      const htmlEntities: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      };
      return String(str).replace(/[&<>"']/g, (match) => htmlEntities[match]);
    };

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'ayushjhaa1187@gmail.com',
      subject: `[Portfolio Contact] ${subject || 'New Message'}`,
      reply_to: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Message from Portfolio</h2>
        <p><strong>Name:</strong> ${escapeHTML(name)}</p>
        <p><strong>Email:</strong> ${escapeHTML(email)}</p>
        <p><strong>Subject:</strong> ${escapeHTML(subject || '')}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHTML(message).replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
