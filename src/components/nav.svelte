<script lang="ts">
	import type { Record } from 'pocketbase';
	import { state } from '../utils';
	import { routes } from '../static/constants';
	import Breadcrumbs from './breadcrumbs.svelte';

	$: loggedIn = $state.auth !== null;

	$: avatarUrl = loggedIn ? $state.pb.getFileUrl($state.auth as Record, $state.auth?.avatar) : null;

	function logout() {
		$state.auth = null;
		$state.pb.authStore.clear();
	}
</script>

<nav class="sticky bg-white flex top-0 h-16 w-full px-10 py-6 justify-between">
	<Breadcrumbs />
	{#if loggedIn}
		<div class="flex flex-row gap-8 items-center justify-center">
			<img class="h-5 w-5 rounded-full" src={avatarUrl} alt="Avatar" />
			<a class="text-md text-purple-800 hover:text-purple-400" href="/profile"
				>{$state.auth?.name}</a
			>
			{#each routes as route}
				<a class="text-md text-purple-800 hover:text-purple-400" href={route.path}>{route.name}</a>
			{/each}
			<a class="text-md text-purple-800 hover:text-purple-400" href="/" on:click={logout}>Logout</a>
		</div>
	{:else}
		<a class="text-xl text-purple-800 hover:text-purple-400" href="/login">Login</a>
	{/if}
</nav>
