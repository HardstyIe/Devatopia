import { fail } from '@sveltejs/kit';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import type { Actions } from './$types';

dotenv.config();

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const policy = formData.get('acceptPolicy');

		if (!policy) {
			return fail(400, {
				error:
					'Vous devez accepter la politique de confidentialité pour pouvoir envoyer ce formulaire'
			});
		}

		const email = formData.get('email');
		const subject = formData.get('subjet');
		const message = formData.get('message');
		const name = formData.get('name');
		const surname = formData.get('surname');
		const society = formData.get('society');
		const telephone = formData.get('telephone');

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
			to: 'hardstyle.dd@gmail.com',
			subject: subject,
			html: `
      <h1>${subject}</h1>
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Prénom :</strong> ${surname}</p>
      <p><strong>Société :</strong> ${society}</p>
      <p><strong>Téléphone :</strong> ${telephone}</p>
      <p><strong>Message :</strong>${message}</p>
      `
		};

		try {
			await transporter.sendMail(mailOptions);
			return { success: true };
		} catch (error) {
			return fail(500, { error: error.message });
		}
	}
};
