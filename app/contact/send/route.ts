import sendgrid from "@sendgrid/mail";
import { NextResponse } from 'next/server';
import { send } from "process";


sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(request: Request, response: Response) {

    const body = await request.json();

    const data = {
        to: "contact@anavargas.design",
        from: "contact@anavargas.design",
        subject: `[From Portfolio] ${body.subject}`,
        html: `
                    <body>
                      <p> From: ${body.name} </p><br />
                      <p> Email: ${body.email}</p><br />
                      <p>${body.message}</p>
                    </body>
                `,
      };

      try {
        const response = await sendgrid.send(data);
        return NextResponse.json(response);
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.error();
    }


}