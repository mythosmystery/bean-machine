<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h2>Profile</h2>
<p>{data.hello}</p>
