import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const {
            name,
            email,
            organization,
            inquiryType,
            message,
        } = await req.json();

        await resend.emails.send({
            from: "Emmanuel Portfolio <onboarding@resend.dev>",
            to: "emmanuelahimana01@gmail.com",
            subject: `New Inquiry: ${inquiryType}`,
            html: `
        <h2>New Portfolio Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Organization:</strong> ${organization || "Not provided"}</p>

        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
        });

        return Response.json({
            success: true,
            message: "Email sent successfully.",
        });
    } catch (error) {
        console.error("Email sending failed:", error);

        return Response.json(
            {
                success: false,
                message: "Failed to send email. Please try again later.",
            },
            {
                status: 500,
            }
        );
    }
}