"use server";

import { Resend } from "resend";

export async function submitContactForm(prevState: any, formData: FormData) {
  // Initialize Resend inside the action so it grabs the latest env var
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const query = formData.get("query") as string;

  if (!name || !email || !query) {
    return { error: "All fields are required." };
  }

  try {
    // 1. Email to the Receiver (Admin / Ghar Aarogyam)
    const adminResponse = await resend.emails.send({
      from: "Contact Form <info@gharaarogyam.in>", 
      to: ["info@gharaarogyam.in"], // The admin receiver email
      subject: `New Contact Query from ${name}`,
      text: `You have received a new query from the contact form.\n\nName: ${name}\nEmail: ${email}\n\nQuery:\n${query}`,
    });

    if (adminResponse.error) {
      console.error("Admin Email Error:", adminResponse.error);
      return { error: `Failed to send admin email: ${adminResponse.error.message}` };
    }

    // 2. Email to the Sender (User)
    const userResponse = await resend.emails.send({
      from: "Ghar Aarogyam <info@gharaarogyam.in>",
      to: [email],
      subject: "Thank You for Contacting Us",
      text: `Hi ${name},\n\nThank you for sending your queries. It will be addressed shortly by our support team.\n\nBest Regards,\nGhar Aarogyam Team`,
    });

    if (userResponse.error) {
      console.error("User Email Error:", userResponse.error);
      return { error: `Failed to send user email: ${userResponse.error.message}` };
    }

    return { success: true };
  } catch (error: any) {
    console.error("Resend Error:", error);
    return { error: "An unexpected error occurred. Please try again later." };
  }
}
