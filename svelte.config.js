import preprocess from 'svelte-preprocess';
import nodeAdapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: nodeAdapter({

		}),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		// for the underlying transpiler (vite), in ssr mode (server-side rendering),
		// don't do d3, which only makes sens as a client render anyway. Discussed in
		// https://github.com/vitejs/vite/issues/2393#issuecomment-901697217
		// In the future, this bug may be resolved.
		vite: {
			ssr: {
				noExternal: ["d3"]
			}
		}

	}
};

export default config;
