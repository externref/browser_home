<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';

	let input = ``;
	function go() {
		if (browser) {
			window.location.href = `https://google.com/search?q=${encodeURI(input)}`;
		}
	}
</script>

<div class="flex-grow font-exo2">
	<div class="flex justify-center">
		<div class="w-[400px] rounded-2xl">
			<div class="text-center text-3xl mb-2">Google Search</div>
			<div class="flex">
				<input
					class="w-full rounded-2xl px-5 outline-none focus:outline-cyan-200 py-1 text-gray-950 bg-white"
					type="text"
					placeholder="Search here"
					bind:value={input}
				/>&nbsp;<button on:click={go} class="rounded-3xl bg-purple-600 px-2"
					><i class="bi bi-search"></i></button
				>
			</div>
		</div>
	</div>
</div>
