import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

export async function post(request) {
	const formData = request.body;

	// Création d'un objet de transport SMTP
	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: Number(process.env.SMTP_PORT), // Convertir en nombre
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS
		}
	});

	// Options de messagerie
	const mailOptions = {
		from: formData.email,
		to: 'hardstyle.dd@gmail.com',
		subject: formData.sujet,
		html: `
        <h1>${formData.sujet}</h1>
        <p><strong>Nom :</strong> ${formData.nom}</p>
        <p><strong>Prénom :</strong> ${formData.prenom}</p>
        <p><strong>Société :</strong> ${formData.societe}</p>
        <p><strong>Téléphone :</strong> ${formData.telephone}</p>
        <p><strong>Message :</strong> ${formData.message}</p>
    `
	};

	try {
		await transporter.sendMail(mailOptions);
		return { status: 200, body: { success: true } };
	} catch (error) {
		return { status: 500, body: { error: error.message } };
	}
}
