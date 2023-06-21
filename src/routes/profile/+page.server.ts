import type { PageServerLoad } from './$types';

export const load = (async ({ locals: { db } }) => {
	const user = await db.query.coffees.findFirst();
	return {};
}) satisfies PageServerLoad;
