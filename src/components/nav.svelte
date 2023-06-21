<script lang="ts">
	import { routes } from '../static/constants';
	import Breadcrumbs from './breadcrumbs.svelte';

	export let loggedIn = false;
</script>

<nav class="sticky bg-white flex top-0 h-16 w-full px-10 py-6 justify-between">
	<Breadcrumbs />
	{#if loggedIn}
		<div class="flex flex-row gap-8 items-center justify-center">
			<img class="h-5 w-5 rounded-full" src='https://placeholder.com/200' alt="Avatar" />
			<a class="text-md text-purple-800 hover:text-purple-400" href="/profile"
				>YOUR NAME</a
			>
			{#each routes as route}
				<a class="text-md text-purple-800 hover:text-purple-400" href={route.path}>{route.name}</a>
			{/each}
			<a class="text-md text-purple-800 hover:text-purple-400" href="/">Logout</a>
		</div>
	{:else}
		<a class="text-xl text-purple-800 hover:text-purple-400" href="/login">Login</a>
	{/if}
</nav>
