<script lang="ts">
	import { onMount } from 'svelte';
	import Shortcuts from './Shortcuts.svelte';
	import Utils from './Utils.svelte';

	let time: { main: string; sec: string } = {
		main: '',
		sec: ''
	};
	function clock() {
		let date = new Date();
		time = {
			main: `${date.getHours().toString().padStart(2, `0`)}:${date.getMinutes().toString().padStart(2, `0`)}`,
			sec: date.getSeconds().toString().padStart(2, `0`)
		};
		setTimeout(clock, 100);
	}
	onMount(clock);
</script>

<div class="m-5 flex flex-col h-[92vh]">
	<div class="flex w-full font-exo2 justify-between items-center">
		<div class="">/home</div>
		<div class="text-xl flex items-end">
			<b>{time.main}</b>
			<div class="text-sm bottom font-thin pb-[0.085rem]">:{time.sec}</div>
		</div>
	</div>
	<div class="flex justify-between">
		<Shortcuts></Shortcuts>
		<Utils></Utils>
	</div>
	<div class="mt-auto text-center text-sm font-kode">
		Made with 💖 by <a class="text-green-400" href="https://github.com/externref">externref</a>
	</div>
</div>
