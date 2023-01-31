<script lang="ts">
	import { page } from '$app/stores';

	$: crumbs = [...new Set($page.url.pathname.split('/'))].filter((c) => !!c);
</script>

<div class="flex gap-8 items-center">
	<a class="text-md text-purple-800 hover:text-purple-400 capitalize" href="/">home</a>
	{#each crumbs as crumb}
		<p class="text-lg text-center">/</p>
		{#if crumbs.indexOf(crumb) === crumbs.length - 1}
			<p class="text-md text-black font-bold capitalize">{crumb}</p>
		{:else}
			<a class="text-md text-purple-800 hover:text-purple-400 capitalize" href={`/${crumb}`}
				>{crumb}</a
			>
		{/if}
	{/each}
</div>
