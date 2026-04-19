# Email Contact Form Setup

Your contact form is now configured to send emails directly to `kcboytimo@gmail.com`. Here's how to set it up:

## Option 1: Using Resend (Recommended)

1. **Sign up for Resend**
   - Go to [https://resend.com](https://resend.com)
   - Create a free account

2. **Get your API Key**
   - Go to [https://resend.com/api-keys](https://resend.com/api-keys)
   - Create a new API key
   - Copy the key

3. **Configure Environment Variable**
   - Open `.env.local` file in your project root
   - Replace `your_resend_api_key_here` with your actual API key:
     ```
     RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
     ```

4. **Verify Your Domain (Required)**
   - In Resend dashboard, go to "Domains"
   - Add and verify your domain (e.g., yourdomain.com)
   - Update the `from` field in `/src/app/api/contact/route.js` to use your verified domain

## Option 2: Using Formspree (Free Alternative)

1. **Sign up for Formspree**
   - Go to [https://formspree.io](https://formspree.io)
   - Create a free account

2. **Create a Form**
   - Create a new form
   - Set the recipient email to `kcboytimo@gmail.com`
   - Get your form endpoint URL

3. **Update the API Route**
   - Replace the content in `/src/app/api/contact/route.js` with:
   ```javascript
   import { NextResponse } from 'next/server';

   export async function POST(request) {
     try {
       const { name, email, message } = await request.json();
       
       const response = await fetch('https://formspree.io/f/your-form-id', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({ name, email, message }),
       });

       if (response.ok) {
         return NextResponse.json({ message: 'Email sent successfully!' });
       } else {
         throw new Error('Failed to send email');
       }
     } catch (error) {
       return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
     }
   }
   ```

## Option 3: Using EmailJS (Free Alternative)

1. **Sign up for EmailJS**
   - Go to [https://www.emailjs.com](https://www.emailjs.com)
   - Create a free account

2. **Create Email Template**
   - Create an email template
   - Set recipient to `kcboytimo@gmail.com`
   - Get your Service ID, Template ID, and Public Key

3. **Update Frontend JavaScript**
   - Add EmailJS SDK to your HTML:
   ```html
   <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   ```

4. **Update handleSubmit Function**
   - Replace the fetch call with EmailJS send function

## Testing the Form

1. **Start your development server**
   ```bash
   npm run dev
   ```

2. **Test the contact form**
   - Fill out all fields in the contact form
   - Click "Send Message"
   - Check your email inbox for the message

## Troubleshooting

- **Email not sending**: Check your API key and domain verification
- **CORS errors**: Ensure your domain is properly configured in the email service
- **Form validation**: Make sure all fields are filled before submitting

## Security Notes

- Never expose your API keys in client-side code
- Always validate form data on the server side
- Consider adding rate limiting to prevent spam
- Use HTTPS in production

## Current Configuration

The form is currently set up to:
- Send emails to: `kcboytimo@gmail.com`
- Include sender's name, email, and message
- Provide both plain text and HTML email formats
- Show success/error feedback to users
