import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
        
        title: 'my data',
        text: 'hi mom!'
    };
}) satisfies PageServerLoad;