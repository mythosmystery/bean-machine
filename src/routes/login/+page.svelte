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

<div class="login-card">
	<div>
		<h1>Login</h1>
		<input type="text" class="text" bind:value={username} placeholder="Username/email" />
		<input type="password" bind:value={pass} placeholder="Password" />
		<button on:click={login} disabled={loading}>Login</button>
	</div>
</div>
