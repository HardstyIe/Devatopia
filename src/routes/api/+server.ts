import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

export async function POST({ request }) {
	const data = await request.json();
	console.log(data);

	const name = data.name;
	const surname = data.surname;
	const society = data.society;
	const telephone = data.telephone;
	const email = data.email;
	const sujet = data.subjet;
	const message = data.message;

	// Création d'un objet de transport SMTP
	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: Number(process.env.SMTP_PORT),
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS
		}
	});

	// Options de messagerie
	const mailOptions = {
		from: email,
		to: 'duchemindylan59@gmail.com',
		subject: sujet,
		html: `
            <h1>${sujet}</h1>
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Prénom :</strong> ${surname}</p>
            <p><strong>Société :</strong> ${society}</p>
            <p><strong>Téléphone :</strong> ${telephone}</p>
            <p><strong>Message :</strong>${message}</p>
        `
	};

	try {
		await transporter.sendMail(mailOptions);
		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (error) {
		return new Response(JSON.stringify({ error: error.message }), { status: 500 });
	}
}
