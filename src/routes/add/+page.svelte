<script lang="ts">
	import { mapFormData } from '../../utils';
	import { Button, FormField, TextField } from 'attractions';

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
	<TextField name="name" placeholder="Drink Name" />

	<Button filled type="submit">Add Drink</Button>
</form>
