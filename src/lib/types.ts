export type Data = {
	fr: {
		appbar: {
			text: string[];
			assets: {
				background: string;
				logo: string;
				darkThemeLogo: string;
			};
		};
		card: {
			personna: {
				title: string;
				subtitle: string;
				text: string;
				asset: string;
			}[];
			title: string;
			subTitle: string;
			buttonText: string;
		};
		desk: {
			title: string;
			subtitle: string;
			assets: {
				background: string;
			};
		};
		techno: {
			title: string;
			subtitle: string;
			infos: string[];
			assets: {
				logos: string[];
				urls_logo: string[];
				background: string;
			};
		};
		carrousel: {
			title: string;
			cards?: {
				title: string;
				text: string;
				asset: string;
				color: string;
				idForm: number;
			}[];
			assets?: string[];
		}[];
		contact: {
			inputs: string[];
			texts: string[];
			politique: {
				title: string;
				subtitle: string;
			}[];
		};
		footer: {
			textButton: {
				title: string;
				subtitle: string;
			}[];
			iconButton: {
				iconData: number;
				platform: string;
				url: string;
			}[];
			mentions: {
				title: string;
				revisionDate?: string;
				identification?: string;
				sections?: {
					title: string;
					details: string[];
				}[];
				photoCredits?: string;
				copyright?: string;
			}[];
		};
	};
};
