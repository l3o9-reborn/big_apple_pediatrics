"use server";
import { sendMail } from "@/lib/mailer";

type ContactForm = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export async function sendMessage({ name, email, phone, message }: ContactForm) {
  try {
    console.log("Received:", { name, email, phone, message });

    if (!name || !email || !message) {
      throw new Error("Missing required fields");
    }

    const html = `
      <h2>New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    await sendMail(
      process.env.EMAIL_RECEIVER || "mhleon1999@gmail.com",
      "New Contact Form Message",
      html
    );

    return { success: true, message: "Message sent successfully " };
  } catch (err) {
    console.error("SendMessage error:", err);
    return {
      success: false,
      error: `Failed to send message : ${err instanceof Error ? err.message : err}`,
    };
  }
}
