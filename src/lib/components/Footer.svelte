<script lang="ts">
	import { myData } from '$lib/store';
</script>

<main
	class="flex flex-col items-center w-full p-6 lg:justify-between lg:flex-row bg-devatopia-footer"
>
	<div class="flex flex-col items-center justify-center w-full lg:w-1/3 lg:items-start">
		<img
			src={$myData.fr.footer.textButton[0].subtitle}
			alt="$myData.fr.footer.textButton.title"
			width="290"
			height="85"
		/>
		<ul>
			{#each $myData.fr.footer.textButton.slice(1) as textButton}
				<li class="flex gap-1 my-4 font-extrabold line">
					<strong>{textButton.title}:</strong>
					<p class="underline">{textButton.subtitle}</p>
				</li>
			{/each}
		</ul>
	</div>

	<div class="flex flex-col items-center justify-center w-full mt-8 lg:w-1/3 lg:mt-0">
		<div class="w-auto">
			Lien Importants :
			<ul class="pl-5">
				{#each $myData.fr.appbar.text as text}
					<li class="my-4 text-lg list-none">
						<a href={`#${text.toLowerCase()}`}>{text}</a>
					</li>
				{/each}
			</ul>
		</div>
		<div class="my-4 text-sm text-center underline">
			&copy; 2022-2023 DEVATOPIA Tous droits réservés.
		</div>
		<div class="flex justify-center gap-1">
			<a href="placeholder" class="underline"> Mentions Légales </a>
			<p>-</p>
			<a href="placeholder" class="underline"> Politique de confidentialité </a>
		</div>
	</div>

	<div class="flex flex-col items-center justify-center w-full gap-5 mt-8 lg:w-1/3 lg:mt-0">
		<div class="text-2xl">Où nous suivre ?</div>
		<div class="flex mt-4 space-x-12">
			{#each $myData.fr.footer.iconButton as iconButton}
				<a
					href={iconButton.url}
					target="_blank"
					aria-label={iconButton.platform}
					class="p-4 border-2 rounded-full hover:bg-gray-100"
				>
					{#if iconButton.platform === 'linkedin'}
						<img
							src="/assets/images/icons8-linkedin.svg"
							alt="logo linkedin"
							width="50"
							height="50"
						/>
					{:else if iconButton.platform === 'twitter'}
						<img
							src="/assets/images/icons8-twitter.svg"
							alt="logo twitter"
							width="50"
							height="50"
						/>
					{:else if iconButton.platform === 'instagram'}
						<img
							src="/assets/images/icons8-instagram.svg"
							alt="logo instagram"
							width="50"
							height="50"
						/>
					{/if}
				</a>
			{/each}
		</div>
	</div>
</main>
