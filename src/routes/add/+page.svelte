<script lang="ts">
	import { mapFormData } from '../../utils';

	interface IData {
		name: string;
	}

	const addDrink = (e: Event) => {
		const data = mapFormData<IData>(e.target as HTMLFormElement);
		console.log(data);
	};
</script>

<h1>Add A New Drink!</h1>

<form on:submit|preventDefault={addDrink}>
	<input name="name" placeholder="Drink Name" />

	<button type="submit">Add Drink</button>
</form>
