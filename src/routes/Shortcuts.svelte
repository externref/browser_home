<script lang="ts">
	// export let data: {[input: string]: {
	//     [input: string]: any
	// }};
	let entries = [
		{
			name: 'Github',
			url: 'https://github.com',
			bootstrapIcon: 'github',
			color: undefined
		},
		{
			name: 'Youtube',
			url: 'https://youtube.com',
			bootstrapIcon: `youtube`,
			color: `red-500`
		}
	];
</script>

<div class="font-exo2 max-w-max text-sm">
	<p class="text-3xl pl-2 my-4">Shortcuts</p>
	{#each entries as entry}
		<div
			class="bg-{entry.color ||
				`purple-600`} px-5 py-1 rounded-r-md mb-2 hover:bg-purple-300 hover:text-black"
		>
			<a href={entry.url}>
				{#if entry.bootstrapIcon}
					<i class="bi bi-{entry.bootstrapIcon}"></i>
				{/if}
				&nbsp;{entry.name}
			</a>
		</div>
	{/each}
	<div class="px-5 py-1 rounded-r-md mb-2 bg-green-900">
		<button>
			<i class="bi bi-plus"></i>
			&nbsp;New Item
		</button>
	</div>
</div>
