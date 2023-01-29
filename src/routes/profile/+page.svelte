<script lang="ts">
	import { onMount } from 'svelte';
	import type { Brew } from '../../models/brew';
	import { Collections } from '../../static/constants';
	import { state } from '../../utils';

	let brews: Array<Brew> | null;
	let page: number = 1;
	let limit: number = 10;

	onMount(async () => {
		brews = (
			await $state.pb
				.collection(Collections.Brews)
				.getList<Brew>(page, limit, { expand: 'user, coffee' })
		).items;
	});
</script>

<h2>Profile</h2>

{#if brews}
	{#each brews as brew}
		<div class="brew">
			<h3>{brew.dose}</h3>
			<p>{brew.grindSetting}</p>
			<p>{brew.notes}</p>
			<p>{brew.expand?.coffee?.name}</p>
		</div>
	{/each}
{/if}
