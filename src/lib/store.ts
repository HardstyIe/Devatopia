import { writable } from 'svelte/store';
import type { Data } from './types';

const initialData: Data = {
	fr: {
		appbar: {
			text: ['Équipe', 'Technologies', 'Services', 'Contact'],
			assets: {
				background: '/assets/images/Forme_NavBar.svg',
				logo: '/assets/logo_devatopia/devatopia_logo_black.svg',
				darkThemeLogo: '/assets/logo_devatopia/devatopia_logo_white.webp'
			}
		},
		card: {
			personna: [
				{
					title: 'Maxime Dehay',
					subtitle: 'Associé gérant',
					text: 'Maxime est notre expert dans le développement Mobile, Web et API.',
					asset: '/assets/persona/Maxime.webp'
				},
				{
					title: 'Alexandre Louis',
					subtitle: 'Associé gérant',
					text: 'Alexandre est notre concepteur UI/UX mais également développeur Mobile, Web et API.',
					asset: '/assets/persona/Alexandre.webp'
				}
			],
			title: "Développement d'un projet sur mesure",
			subTitle:
				'Nous vous accompagnons dans la création, refonte ou amélioration de votre application mobile ou Web. Nous vous aidons à donner vie à vos idées !\nRéalisons ensemble votre projet correspondant au mieux à vos besoins. Un projet sur mesure !',
			buttonText: "Parlons de votre projet autour d'un café"
		},
		desk: {
			title: 'Une équipe dédiée à votre projet',
			subtitle:
				"Nous sommes basés dans le valenciennois et avons pour objectif de répondre à vos besoins. Notre agence est spécialisée dans la conception et le développement de vos applications web et mobile, mais aussi de votre base de données. Pour finir, nous pouvons vous proposer des formations sur nos domaines d'expertise.",
			assets: {
				background: '/assets/persona/desktop.webp'
			}
		},
		techno: {
			title: "Un projet d'application mobile et/ou web ?",
			subtitle: 'Nous vous accompagnons dans toutes les étapes de votre projet.',
			infos: [
				"Conception d'un design moderne de votre application mobile et web",
				'Développement de votre application mobile pour Android, iOS et web',
				"Application adaptée pour tout type d'appareil (ordinateur, tablette, téléphone, ...)",
				"Développement d'une base de données si besoin",
				"Déploiement de l'application sur l'Apple Store et le Play Store"
			],
			assets: {
				logos: [
					'/assets/logo/FlutterLogo.svg',
					'/assets/logo/FirebaseLogo.svg',
					'/assets/logo/NodeLogo.svg'
				],
				urls_logo: [
					'https://flutter.dev/',
					'https://firebase.google.com/',
					'https://nodejs.org/en/'
				],
				background: '/assets/icon_card/DMobile_Icon.svg'
			}
		},
		carrousel: [
			{
				title: 'Avez vous besoin d’un *accompagnement complet sur-mesure ? Voici nos compétences :',
				cards: [
					{
						title: 'Développement Mobile',
						text: 'Nous pouvons effectuer le développement de votre application mobile',
						asset: '/assets/icon_card/DMobile_Icon.svg',
						color: '0xFF5BD7EB',
						idForm: 2
					},
					{
						title: 'Audit Mobile',
						text: 'Nous pouvons effectuer un audit de votre application mobile.',
						asset: '/assets/icon_card/AAudit_Icon.svg',
						color: '0xFF12B09B',
						idForm: 2
					},
					{
						title: 'UI/UX Design',
						text: 'Nous pouvons effectuer les maquettes de vos sites web ou de vos applications mobiles',
						asset: '/assets/icon_card/UIUX_Icon.svg',
						color: '0xFFF695AC',
						idForm: 2
					},
					{
						title: 'Développement Back-end',
						text: 'Nous pouvons effectuer le développement de votre Back-end',
						asset: '/assets/icon_card/DBack_Icon.svg',
						color: '0xFF5BD7EB',
						idForm: 2
					},
					{
						title: 'Méthodes de développement',
						text: 'Nous pouvons vous initier aux méthodes de base dans le domaine de la programmation',
						asset: '/assets/icon_card/MDev_Icon.svg',
						color: '0xFF12B09B',
						idForm: 2
					},
					{
						title: 'Méthodes de gestion de projets',
						text: 'Nous pouvons vous initier aux méthodes de gestion de projet (Agile, Cycle en V, ...)',
						asset: '/assets/icon_card/GProjet_Icon.svg',
						color: '0xFFF695AC',
						idForm: 2
					}
				]
			},
			{
				title: 'Exemple de nos *projets réalisés.',
				assets: [
					'/assets/techno_icon/tablette.webp',
					'/assets/techno_icon/Mobile_One.webp',
					'/assets/techno_icon/Mobile_Two.svg',
					'/assets/techno_icon/Mobile_Three.webp'
				]
			}
		],
		contact: {
			inputs: [
				'Votre nom',
				'Votre prénom',
				'Votre Email',
				'Votre téléphone (Facultatif)',
				'Votre société (Facultatif)',
				'Sujet',
				'Votre message'
			],
			texts: [
				"Besoin d'aide pour votre projet, *d'un *devis ?\nContactez-nous !",
				'Pour nous appeler : du lundi au vendredi de 9h à 18h : *+33 *6 *87 *37 *22 *16',
				'Pour nous contacter par mail, vous pouvez utiliser le formulaire disponible sur notre site'
			],
			politique: [
				{
					title: 'Date de dernière révision : Premier décembre deux mille vingt-deux (01/12/2022).',
					subtitle:
						"Nous nous réservons le droit de modifier la politique de confidentialité à tout moment. Il est vous est donc recommandé de la consulter régulièrement. En cas de modification, nous publierons ces changements sur cette page et aux endroits que nous jugerons appropriés en fonction de l’objet et de l’importance des changements apportés.\n\nVotre utilisation du Site, après toute modification signifie que vous acceptez ces modifications. Si vous n'acceptez pas certaines modifications substantielles apportées à la présente politique, vous devez arrêter d'utiliser le Site.\n\nLa présente politique de confidentialité a pour objectif de formaliser notre engagement quant au respect de la vie privée des utilisateurs du site internet %www.devatopia.fr exploité par la société %Devatopia. \n\nDans le cadre de la mise à disposition de notre Site, nous traitons vos données à caractère personnel dans le respect du Règlement Général sur la Protection des Données 2016/679 du 27 avril 2016\n (« RGPD ») et dans les conditions exposées ci-après.\n\nUne donnée à caractère personnel désigne toute information se rapportant à une personne physique identifiée ou identifiable. Nous collectons et traitons des données à caractère personnel dans le cadre de la fourniture de nos Services ou de la communication à propos de ces Services exclusivement, en stricte conformité avec le RGPD.\n\nNous collectons uniquement des données à caractère personnel adéquates, pertinentes et limitées à ce qui est nécessaire au regard des finalités pour lesquelles elles sont traitées. Ainsi, il ne vous sera jamais demandé de renseigner des données à caractère personnel considérées comme « sensibles », telles que vos origines raciales ou ethniques, vos opinions politiques, philosophiques ou religieuses.\n\nEn vous enregistrant sur le Site, vous nous autorisez à traiter vos données à caractère personnel conformément à la politique de confidentialité. Si vous refusez les termes de cette politique de confidentialité, veuillez-vous abstenir d’utiliser le Site ainsi que les Services.\n"
				},
				{
					title: 'Collecte de données à caractère personnel\n\n 1. Responsable du traitement\n',
					subtitle:
						'%Devatopia dont le siège est situé 15 avenue Alan Turing 59410 Anzin, RCS de Valenciennes N°920 467 438, est la personne morale responsable du traitement des données recueillies sur le Site.'
				},
				{
					title: '2. Données collectées.',
					subtitle:
						'Les données à caractère personnel collectées sur le formulaire de contact sont :\n\nLe nom\nLe prénom\nL’adresse mail\nLe téléphone\nLe nom de votre société.\n'
				},
				{
					title: '3. Les finalités et consentement de cette collecte de données sont :',
					subtitle:
						'La finalité de cette collecte est de pouvoir recontacter les personnes intéressées par les services proposés.\nLe consentement du traitement de données est donné lorsque vous cochez la case sur le formulaire de contact « J’ai lu la politique de confidentialité, j’y adhère sans réserve et je consens au traitement des données récoltées »\n'
				},
				{
					title: '4. Où sont stockées les données que nous collectons ?',
					subtitle:
						'Les données sont stockées dans une base de données chez l’hébergeur\n\n %Autre %Hostinger\n 61 Lordou Vironos Street\n 6023 Larnaca \n Chypre.\n'
				},
				{
					title: '5. Durée de stockage de vos données personnelles.',
					subtitle:
						'Les données collectées sont gardées en mémoire le temps de notre relation, et pendant un (1) an après notre dernier échange.\nAu bout de cette année, vos données seront effacées.\n'
				},
				{
					title: '6. Protection des données personnelles collectées.',
					subtitle:
						"Nous avons mis en place des mesures de sécurité techniques et organisationnelles en vue de garantir la sécurité, l’intégrité et la confidentialité de toutes vos données à caractère personnel, afin d’empêcher que celles-ci soient déformées, endommagées ou que des tiers non autorisés y aient accès.\n\nNous assurons un niveau de sécurité approprié, compte tenu de l'état des connaissances, des coûts de mise en œuvre et de la nature, de la portée, du contexte et des finalités du traitement ainsi que des risques et de leur probabilité.\n\nToutefois, il est précisé qu’aucune mesure de sécurité n’étant infaillible, %Devatopia n’est pas en mesure de garantir une sécurité absolue à vos données à caractère personnel.\n"
				},
				{
					title:
						'7. Partage des données à caractère personnel \n\n7.1 Partage de vos données à caractère personnel avec des sociétés tierces \n',
					subtitle:
						'Nous ne transmettons pas vos données à caractère personnel, à aucune autre entreprise ou partenaire, sauf en cas d’indication contraire de votre part.'
				},
				{
					title: '7.2 Partage avec les autorités',
					subtitle:
						"Nous pouvons être amenés à divulguer vos données à caractère personnel aux autorités administrative ou judiciaire lorsque leur divulgation est nécessaire à l'identification, l'interpellation ou la poursuite en justice de tout individu susceptible de porter préjudice à nos droits, de tout autre utilisateur ou d’un tiers. Nous pouvons enfin être légalement tenu de divulguer vos données à caractère personnel et ne pouvons dans ce cas nous y opposer."
				},
				{
					title: '8. Droits d’utilisateurs.',
					subtitle:
						"Vous êtes seul à nous avoir communiqué les données en notre possession, par l’intermédiaire du Site.\n\nConformément à la réglementation en matière de protection des données à caractère personnel, notamment les articles 15 à 21 du RGPD, Vous disposez de droits concernant la collecte et le traitement de vos données personnelles, qui pourront être exercés dans les conditions fixées par la réglementation en vigueur, à savoir :\n\n- Le droit d'être informé de façon compréhensible, aisément accessible sur les traitements de vos données qui sont mis en œuvre.\n- Le droit d'accès à vos données.\n- Le droit de rectification et d'obtenir la modification de vos données qui seraient inexactes ou incomplètes.\n- Le droit à l'effacement de vos données, à moins que nous ayons des raisons légales ou légitimes de les conserver.\n- Le droit de vous opposer au traitement lorsque celui-ci est fondé sur l'intérêt légitime du responsable du traitement.\n- Le droit de vous opposer, à tout traitement et sans frais, sans avoir à motiver sa demande, à ce que vos données soient utilisées à des fins de prospection commerciale,\n- Le droit à la limitation du traitement de vos données personnelles,\n- Le droit à la portabilité de vos données quand le traitement est fondé sur le consentement ou l'exécution des contrats et que le traitement est effectué à l'aide de procédés automatisés.\n- Le droit de retirer votre consentement à tout moment lorsque le traitement de vos données personnelles est fondé sur votre consentement.\n- Le droit de donner des instructions spécifiques ou générales concernant la conservation, l'effacement et la communication de vos données personnelles, applicables après votre décès.\n- Le droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) 3 Place de Fontenoy TSA 80715 75334 PARIS CEDEX 07 ou sur le site @https://www.cnil.fr/plaintes"
				},
				{
					title: '9. Propriété intellectuelle ',
					subtitle:
						'Tous les éléments composant le site %www.devatopia.fr (textes, nom de domaine, images, charte graphique, logo, base de données, etc…) sont strictement protégés par les droits de la propriété intellectuelle et de la concurrence déloyale, et sont la propriété exclusive de %Devatopia. \n\nToute reproduction ou représentation totale ou partielle du site %www.devatopia.fr et/ou de l’un ou plusieurs de ses éléments est strictement interdite, sauf autorisation écrite préalable de %Devatopia.\n'
				},
				{
					title: '10. Contact.',
					subtitle:
						'Vous pouvez contacter notre délégué à la protection des données :\n\nPour toute question relative à vos données à caractère personnel.\nAfin d’exercer vos droits, en joignant à votre demande une copie d’un titre d’identité.\n\n %CARTIER - %RGPD\n %M. %Cartier %Michaël \n 69 Rue Pierre et Marie Curie 59300 Aulnoy-Lez-Valenciennes\n dpo.devatopia@cartier-rgpd.com\n Téléphone : 07 57 82 61 81.\n N° agrément CNIL : DPO-124797.\n'
				}
			]
		},
		footer: {
			textButton: [
				{
					title: 'LOGO',
					subtitle: '/assets/logo_devatopia/devatopia_logo_white.webp'
				},
				{
					title: 'Adresse',
					subtitle: 'Av. Alan Turing,59410 Anzin'
				},
				{
					title: 'Téléphone',
					subtitle: '+33 6 87 36 22 16'
				},
				{
					title: 'Email',
					subtitle: 'contact@devatopia.fr'
				}
			],
			iconButton: [
				{
					iconData: 3,
					platform: 'linkedin',
					url: 'https://www.linkedin.com/company/devatopia'
				},
				{
					iconData: 2,
					platform: 'twitter',
					url: 'https://twitter.com/devatopia'
				},
				{
					iconData: 1,
					platform: 'instagram',
					url: 'https://instagram.com'
				}
			],
			mentions: [
				{
					title: 'Mentions légales de : www.devatopia.fr',
					revisionDate: 'Date de révision : 01 décembre 2022 (01/12/2022).',
					identification: '1. Mentions d’identification :',
					sections: [
						{
							title: 'Editeur :',
							details: [
								'SARL Devatopia',
								'15 avenue Alan Turing',
								'59410 Anzin',
								'RCS de Valenciennes N°920 467 438.'
							]
						},
						{
							title: 'Directeurs de la publication :',
							details: ['M. Alexandre Louis et M. Maxime Dehay']
						},
						{
							title: 'Créateur du site :',
							details: [
								'SARL Devatopia',
								'15 avenue Alan Turing',
								'59410 Anzin',
								'RCS de Valenciennes N°920 467 438.'
							]
						},
						{
							title: 'Hébergeur :',
							details: ['Autre Hostinger', '61 Lordou Vironos Street', '6023 Larnaca', 'Chypre']
						}
					]
				},
				{
					title: '2. Les mentions relatives à la propriété intellectuelle.',
					photoCredits:
						'Crédits photos : Les images ou vidéos présentes sur le site www.devatopia.fr sont la propriété de Devatopia.',
					copyright:
						'Droits d’auteurs : Tous les textes présents sur le site www.devatopia.fr sont la propriété de Devatopia.'
				}
			]
		}
	}
};

export const myData = writable<Data>(initialData);
