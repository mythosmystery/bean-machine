<script lang="ts">
	import type { User } from '../../models/user';
	import { Collections } from '../../static/constants';
	import { state } from '../../utils';

	let username: string;
	let pass: string;

	let loading = false;

	async function login() {
		loading = true;
		await $state.pb.collection(Collections.Users).authWithPassword<User>(username, pass);
		$state.auth = $state.pb.authStore.model;
		loading = false;
		document.location.href = '/';
	}
</script>

<h1>Login</h1>

<div class="login-form">
	<input type="text" bind:value={username} placeholder="Username/email" />
	<input type="password" bind:value={pass} placeholder="Password" />
	<button on:click={login} disabled={loading}>Login</button>
</div>

<style>
	.login-form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		margin-top: 4rem;
	}

	input {
		width: 20rem;
		height: 3rem;
		border: none;
		border-radius: 0.5rem;
		margin: 0.5rem;
		padding: 0.5rem;
		font-size: 1.2rem;
		font-weight: 200;
	}

	button {
		width: 20rem;
		height: 3rem;
		border: none;
		border-radius: 0.5rem;
		margin: 0.5rem;
		padding: 0.5rem;
		background-color: #809848;
		color: #313243;
		font-size: 1.2rem;
		font-weight: 200;
	}

	h1 {
		color: #809848;
		margin-top: 3rem;
		text-align: center;
		font-size: 3rem;
		font-weight: 200;
	}
</style>
