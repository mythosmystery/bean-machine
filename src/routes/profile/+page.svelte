<script lang="ts">
	import type { ListResult } from 'pocketbase';
	import { onMount } from 'svelte';
	import type { Brew } from '../../models/brew';
	import type { Coffee } from '../../models/coffee';
	import type { User } from '../../models/user';
	import { state } from '../../utils';

	let brews: (Brew & { expand: { user: User; coffee: Coffee } }[]) | null;
	let page: number = 1;
	let limit: number = 10;

	onMount(async () => {
		brews = await $state.pb.collection('brews').getList(page, limit, { expand: 'user, coffee' })
			.items;
	});
</script>

<h2>Profile</h2>

{#if brews}
	{#each brews as brew}
		<div class="brew">
			<h3>{brew.dose}</h3>
			<p>{brew.grindSetting}</p>
			<p>{brew.notes}</p>
			<p>{brew.expand.coffee.name}</p>
		</div>
	{/each}
{/if}

<style>
	h2 {
		color: #809848;
		margin-top: 3rem;
		text-align: center;
		font-size: 3rem;
		font-weight: 200;
	}
</style>
