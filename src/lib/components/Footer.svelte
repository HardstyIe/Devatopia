<script lang="ts">
	import { myData } from '$lib/store';
</script>

<div class="flex justify-between w-full p-6 bg-devatopia-footer">
	<div class="flex flex-col items-start justify-center w-1/3">
		<img
			src={$myData.fr.footer.textButton[0].subtitle}
			alt="$myData.fr.footer.textButton.title"
			class="h-20 w-30"
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
	<div class="flex flex-col items-center justify-center w-1/3">
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
			<a href="" class="underline"> Mentions Légales </a>
			<p>-</p>
			<a href="" class="underline"> Politique de confidentialité </a>
		</div>
	</div>

	<div class="flex flex-col items-center justify-center w-1/3 gap-5">
		<div class="text-2xl">Où nous suivre ?</div>
		<div class="flex mt-4 space-x-12">
			{#each $myData.fr.footer.iconButton as iconButton}
				<a
					href={iconButton.url}
					target="_blank"
					class="p-4 border-2 rounded-full hover:bg-gray-100"
				>
					{#if iconButton.platform === 'linkedin'}
						<i class="text-5xl fab fa-linkedin" />
					{:else if iconButton.platform === 'twitter'}
						<i class="text-5xl fab fa-twitter" />
					{:else if iconButton.platform === 'instagram'}
						<i class="text-5xl fab fa-instagram" />
					{/if}
				</a>
			{/each}
		</div>
	</div>
</div>
