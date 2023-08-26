import { SMTP_HOST, SMTP_PASS, SMTP_PORT, SMTP_USER } from '$env/static/private';
import { fail } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import type Mail from 'nodemailer/lib/mailer/index.js';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';

const schema = z.object({
	email: z.string().email(),
	subject: z.string(),
	message: z.string(),
	name: z.string().min(2).max(50),
	surname: z.string().min(2).max(50),
	society: z.string().optional(),
	telephone: z
		.string()
		.regex(/^((\+)33|0)[1-9](\d{2}){4}$/)
		.optional(),
	acceptPolicy: z.boolean().default(false)
});

export const actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, schema);
		if (!form.valid) {
			return fail(400, { error: form.errors._errors?.[0] ?? 'Une erreur est survenue' });
		}
		const policy = form.data.acceptPolicy;

		if (!policy) {
			return fail(400, {
				error:
					'Vous devez accepter la politique de confidentialité pour pouvoir envoyer ce formulaire'
			});
		}

		const email = form.data.email;
		const subject = form.data.subject;
		const message = form.data.message;
		const name = form.data.name;
		const surname = form.data.surname;
		const society = form.data.society;
		const telephone = form.data.telephone;

		// Création d'un objet de transport SMTP
		const transporter = nodemailer.createTransport({
			host: SMTP_HOST,
			port: Number(SMTP_PORT),
			auth: {
				user: SMTP_USER,
				pass: SMTP_PASS
			}
		});

		// Options de messagerie
		const mailOptions: Mail.Options = {
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
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			return fail(500, { error: error.message });
		}
	}
};
