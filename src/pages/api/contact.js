import sendgrid from "@sendgrid/mail";
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

const contact = async (req, res) => {
  console.log(req.body);
  try {
    const results = await sendgrid.send({
      to: "contact@anavargas.design",
      from: "contact@anavargas.design",
      subject: `[From Portfolio] ${req.body.subject}`,
      html: `
                  <body>
                    <p> From: ${req.body.name} </p><br />
                    <p>${req.body.message}</p>
                  </body>
              `,
    });
    res.status(200).send(results);
  } catch (error) {
    res.status(400).send(error);
  }
};

export default contact;
