<script lang="ts">
	import '../static/style.css';
	import type { Record } from 'pocketbase';
	import Icon from '@iconify/svelte';
	import { state } from '../utils';
	import Nav from '../components/nav.svelte';

	$: loggedIn = $state.auth !== null;
</script>

<Nav />

<slot />

{#if loggedIn}
	<div class="fab">
		<a href="/add">
			<Icon icon="material-symbols:add" height="1.5rem" width="1.5rem" />
		</a>
	</div>
{/if}
