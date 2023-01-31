export const PB_URL = 'https://pb.mythosmystery.gq';
export const Collections = {
	Users: 'users',
	Brews: 'brews',
	Coffees: 'coffees',
	Recipes: 'recipes'
} as const;

export const routes = [
	{ path: '/brews', name: 'Brews' },
	{ path: '/drinks', name: 'Drinks' },
	{ path: '/coffees', name: 'Coffees' }
] as const;
