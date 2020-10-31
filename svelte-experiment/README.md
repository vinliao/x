# Setup steps

Svelte is a compiler. There is no `npx svelte abc.svelte -o bundle.js` or anything like that. The way it compile things is by using rollup.

So here's how the very basic setup works: create a js file where it imports and instantiate a new svelte file/component. The file then gets rolled-up by rollup, which spits out a `bundle.js` and that's what gets imported in html. There's a special plugin needed before the rollup can compile the svelte file, which is `rollup-plugin-svelte`. Magic happens below it. There's also a plugin that's needed to use external packages in node_modules, which is `@rollup/plugin-node-resolve`.