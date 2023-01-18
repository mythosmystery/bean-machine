<script lang="ts">
	import type { Record } from 'pocketbase';
	import { state } from '../utils';

	let loggedIn = false;

	$: loggedIn = $state.auth !== null;

	$: avatarUrl = loggedIn ? $state.pb.getFileUrl($state.auth as Record, $state.auth?.avatar) : null;

	function logout() {
		$state.auth = null;
		$state.pb.authStore.clear();
	}
</script>

<nav>
	<a class="nav-item" href="/">Home</a>
	{#if loggedIn}
		<div class="nav-items">
			<img class="avatar" src={avatarUrl} alt="Avatar" />
			<p class="nav-item">Welcome, {$state.auth?.name}</p>
			<a class="nav-item" href="/profile">Profile</a>
			<a class="nav-item" href="/" on:click={logout}>Logout</a>
		</div>
	{:else}
		<a class="nav-item" href="/login">Login</a>
	{/if}
</nav>
<div class="bg" />
<slot />

<style>
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	:global(body) {
		font-family: 'Raleway', sans-serif;
	}

	.avatar {
		height: 1.5rem;
		width: 1.5rem;
	}

	.nav-items {
		display: flex;
		gap: 2.5rem;
		justify-content: center;
		align-items: center;
	}

	.bg {
		background-color: #313243;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		z-index: -1;
		position: fixed;
	}

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		background-color: #313243;
		padding: 3rem;
	}

	.nav-item {
		color: #b5dead;
		text-decoration: none;
		font-size: 1.5rem;
		font-weight: 200;
	}

	a:hover {
		color: #809848;
	}
</style>
