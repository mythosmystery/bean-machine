<script lang="ts">
	import type { Record } from 'pocketbase';
	import { state } from '../utils';

	$: loggedIn = $state.auth !== null;

	$: avatarUrl = loggedIn ? $state.pb.getFileUrl($state.auth as Record, $state.auth?.avatar) : null;

	function logout() {
		$state.auth = null;
		$state.pb.authStore.clear();
	}
</script>

<nav class="flex top-0 h-16 w-full p-6 justify-between">
	<a href="/home">Home</a>
	{#if loggedIn}
		<div class="">
			<img class="h-12 w-12 rounded-full" src={avatarUrl} alt="Avatar" />
			<h4 class="nav-item">Welcome, {$state.auth?.name}</h4>
			<a href="/profile">Profile</a>
			<a href="/" on:click={logout}>Logout</a>
		</div>
	{:else}
		<a href="/login">Login</a>
	{/if}
</nav>
