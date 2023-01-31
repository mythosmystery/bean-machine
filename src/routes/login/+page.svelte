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

<div class="flex flex-col max-w-md mx-auto mt-36 items-center">
	<h1 class="text-center text-4xl font-thin text-purple-600 mb-4">Login</h1>
	<input
		class="p-4 rounded-md mb-3 focus:outline-purple-500"
		type="text"
		bind:value={username}
		placeholder="Username/email"
	/>
	<input
		class="p-4 rounded-md mb-3 focus:outline-purple-500"
		type="password"
		bind:value={pass}
		placeholder="Password"
	/>
	<button
		class="mt-2 bg-purple-500 hover:bg-purple-400 hover:text-gray-300 active:bg-purple-700 active:outline-none outline-offset-2 outline-2 hover:outline-dashed outline-purple-500 py-2 px-8 rounded-md max-w-xl text-white text-xl"
		on:click={login}
		disabled={loading}>Login</button
	>
</div>
