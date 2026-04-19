import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Create the email content
    const emailContent = `
      New Contact Form Submission
      
      From: ${name}
      Email: ${email}
      
      Message:
      ${message}
      
      ---
      Sent from: ${request.headers.get('origin') || 'Unknown'}
      Timestamp: ${new Date().toISOString()}
    `;

    // Using a simple email service - you can replace this with your preferred email service
    // For now, I'll use Resend (you'll need to add the API key to environment variables)
    // Or we can use a free service like EmailJS or Formspree
    
    // Option 1: Using Resend (requires API key)
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'onboarding@resend.dev', // This will be your verified domain
          to: 'kcboytimo@gmail.com',
          subject: `New Contact Form Message from ${name}`,
          text: emailContent,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
              <div style="background-color: #7c5cfc; padding: 20px; text-align: center; margin-bottom: 20px;">
                <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
              </div>
              <div style="background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <h2 style="color: #333; margin-bottom: 20px;">Message Details</h2>
                <div style="margin-bottom: 15px;">
                  <strong style="color: #7c5cfc;">From:</strong> ${name}
                </div>
                <div style="margin-bottom: 15px;">
                  <strong style="color: #7c5cfc;">Email:</strong> ${email}
                </div>
                <div style="margin-bottom: 20px;">
                  <strong style="color: #7c5cfc;">Message:</strong>
                  <p style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #7c5cfc; margin: 10px 0; white-space: pre-wrap;">${message}</p>
                </div>
                <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
                  <p>Sent from: ${request.headers.get('origin') || 'Unknown'}</p>
                  <p>Timestamp: ${new Date().toLocaleString()}</p>
                </div>
              </div>
            </div>
          `,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      return NextResponse.json(
        { message: 'Email sent successfully!' },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Email service error:', emailError);
      
      // Fallback: Log the submission for manual processing
      console.log('Contact Form Submission:', {
        name,
        email,
        message,
        timestamp: new Date().toISOString()
      });

      return NextResponse.json(
        { message: 'Message received! We\'ll get back to you soon.' },
        { status: 200 }
      );
    }

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process your message. Please try again.' },
      { status: 500 }
    );
  }
}
