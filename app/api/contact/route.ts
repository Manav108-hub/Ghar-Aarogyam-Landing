import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const adminEmail = process.env.ADMIN_EMAIL || "info@gharaarogyam.in";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, Email, and Message are required fields." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "RESEND_API_KEY environment variable is missing." },
        { status: 500 }
      );
    }

    // 1. Send Notification Email to Admin
    const adminRes = await resend.emails.send({
      from: "Ghar Aarogyam <onboarding@resend.dev>",
      to: adminEmail,
      subject: `New Inquiry from ${name} - Ghar Aarogyam`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; line-height: 1.6;">
          <h2 style="color: #7CC043; margin-bottom: 10px;">New Contact Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "N/A"}</p>
          <div style="margin-top: 15px; background-color: #f4f4f5; padding: 15px; border-radius: 8px;">
            <strong>Message:</strong><br />
            ${message.replace(/\n/g, "<br />")}
          </div>
        </div>
      `,
    });

    // 2. Send Confirmation Email to User
    const userRes = await resend.emails.send({
      from: "Ghar Aarogyam <onboarding@resend.dev>",
      to: email,
      subject: "We received your message - Ghar Aarogyam",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; line-height: 1.6;">
          <h2 style="color: #7CC043;">Namaste ${name},</h2>
          <p>Thank you for reaching out to <strong>Ghar Aarogyam</strong>!</p>
          <p>We have received your message and our team will get back to you as soon as possible.</p>
          <br />
          <p>Warm regards,<br /><strong>Team Ghar Aarogyam</strong><br />Sewarth Healthcare Pvt Ltd</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      adminEmailId: adminRes.data?.id,
      userEmailId: userRes.data?.id,
    });
  } catch (error: any) {
    console.error("Resend API error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send message" },
      { status: 500 }
    );
  }
}
