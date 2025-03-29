import nodemailer from 'nodemailer'

const transpoter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.GMAIL_USER,
        pass:process.env.GMAIL_PASS
    }
})

export default async function GenerateMaile(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ success: false, error: "Missing fields" });
        }

        const mailOptions = {
            from: email,
            to: process.env.GMAIL_USER,
            subject: `Message from ${name}`,
            text: `${message}  ${email}`,
        };

        try {
            await transpoter.sendMail(mailOptions);
            res.status(200).json({ success: true });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ success: false, error: 'Failed to send email' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
}
