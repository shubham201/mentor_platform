import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        // Ensure req.json() is awaited
        const body = await req.json();
        console.log("Received body:", body);

        const { name, email, contact, address, education } = body;
        const transporter = nodemailer.createTransport({
            port: 465,
            host: "smtp.gmail.com",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            secure: true,
        });

        const mailData = {
            from: process.env.EMAIL_USER,
            to: "atoinfinityhub@gmail.com",
            subject: `New Form Submission from ${name}`,
            text: `
                Name: ${name}
                Email: ${email}
                Contact: ${contact}
                Address: ${address}
                Education: ${education}
            `,
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Contact:</strong> ${contact}</p>
                <p><strong>Address:</strong> ${address}</p>
                <p><strong>Selected Courses:</strong> ${education}</p>
            `,
        };

        await transporter.sendMail(mailData);

        return NextResponse.json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ success: false, message: "Failed to send email", error }, { status: 500 });
    }
}