import sveltePreprocess from 'svelte-preprocess'

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  output: {
    sourcemap: true,
  },
  preprocess: sveltePreprocess({
    scss: {
      // We can use a path relative to the root because
      // svelte-preprocess automatically adds it to `includePaths`
      // if none is defined.
      // prependData: `@import 'src/styles/variables.scss';`
    },
  }),
}
