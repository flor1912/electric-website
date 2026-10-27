import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, address, message, preferred_contact } = body;

    // Basic validation
    if (!name || !phone) {
      return Response.json({ error: "Name and phone are required." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Agon Electric Website <onboarding@resend.dev>",
      to: "florianauka@hotmail.com",
      subject: `⚡ New Quote Request from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#f9f9f9;padding:24px;border-radius:8px;">
          <div style="background:#0D0D0D;padding:16px 24px;border-radius:6px 6px 0 0;border-bottom:3px solid #F5A623;">
            <h1 style="color:#F5A623;margin:0;font-size:20px;">⚡ Agon Electric</h1>
            <p style="color:#aaa;margin:4px 0 0;font-size:13px;">New quote request from your website</p>
          </div>
          <div style="background:#fff;padding:24px;border-radius:0 0 6px 6px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr style="border-bottom:1px solid #eee;">
                <td style="padding:10px 8px;color:#888;font-size:13px;width:140px;">Name</td>
                <td style="padding:10px 8px;font-weight:600;font-size:14px;">${name}</td>
              </tr>
              <tr style="border-bottom:1px solid #eee;">
                <td style="padding:10px 8px;color:#888;font-size:13px;">Phone</td>
                <td style="padding:10px 8px;font-weight:600;font-size:14px;">${phone}</td>
              </tr>
              <tr style="border-bottom:1px solid #eee;">
                <td style="padding:10px 8px;color:#888;font-size:13px;">Email</td>
                <td style="padding:10px 8px;font-size:14px;">${email || "Not provided"}</td>
              </tr>
              <tr style="border-bottom:1px solid #eee;">
                <td style="padding:10px 8px;color:#888;font-size:13px;">Service</td>
                <td style="padding:10px 8px;font-size:14px;">${service}</td>
              </tr>
              <tr style="border-bottom:1px solid #eee;">
                <td style="padding:10px 8px;color:#888;font-size:13px;">Address</td>
                <td style="padding:10px 8px;font-size:14px;">${address || "Not provided"}</td>
              </tr>
              <tr style="border-bottom:1px solid #eee;">
                <td style="padding:10px 8px;color:#888;font-size:13px;">Preferred Contact</td>
                <td style="padding:10px 8px;font-size:14px;">${preferred_contact || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding:10px 8px;color:#888;font-size:13px;vertical-align:top;">Message</td>
                <td style="padding:10px 8px;font-size:14px;">${message || "No message provided"}</td>
              </tr>
            </table>
            <div style="margin-top:20px;padding:14px;background:#fff8ec;border-left:3px solid #F5A623;border-radius:4px;font-size:13px;color:#555;">
              💡 Reply directly to this email or call <strong>${phone}</strong> to follow up.
            </div>
          </div>
          <p style="text-align:center;color:#bbb;font-size:11px;margin-top:16px;">Sent from agonelectric.ca contact form</p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return Response.json({ error: "Failed to send email." }, { status: 500 });
  }
}
