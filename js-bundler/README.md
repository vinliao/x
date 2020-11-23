# Notes
The purpose of module bundlers is to combine all the javascript in a web project into one huge bundle.

Say you have `foo.js` and `bar.js`, if you want to import both in your html, you can just put them both in a `<script>` inside html. But what if `foo.js` imports `bar.js`? This is where problems arise. Another problem that pure vanilla javascript face is that it doesn't really have the ability to "use" packages (e.g., lodash).

Module bundlers solve this problem by combining those packages into one huge .js file, which contains all the file. If `foo.js` imports `bar.js` and lodash, then `foo.js`, `bar.js` and lodash will be combined in a file, and that file, which has all the js code, can be imported into html with only one `<script>` tag.

## Weird 404 on js
If you notice in this project, the index.html is inside the public folder, and src is on another folder. I've been scratching my head for an hour now why the js file isn't imported.

The reason why this isn't possible is because that's how browser works. The html can't "import" something that's above the root, and the root in this case is the `/public` folder. It makes sense now why the build file output people just put html, js, and css in one folder called public.

Hahahaha. After solving this weird 404 thing, snowpack suddenly works.

## Snowpack
Now... snowpack is kinda different. From what I have observed, it kinda took everything (all the html, css, and js) then put it into a folder called `/build`. The external modules are installed inside that build folder called `/web_modules`. So in the end, the js imports from that `/web_modules`.

But all of them are accomplishing the same goal: trying to combine all the coding files into one html, one css, and (maybe) one js.

Here's something cool about snowpack: you can use it to import external modules without using webpack. When I run `import _ from 'lodash'` in my js file, it just kinda... worked. I guess it's taken from the cached version of `web_modules` somewhere and the `import _ from 'lodash'` is turned into `import _ from './web_modules/lodash`.

Pretty cool.

## The purpose of module import
In modern(ish) browser, the script tag has a property of `type=module` where the javascript is served as a module. I don't quite understand precisely what it means under the hood, but one really cool thing it allows is import.

When I have `foo.js` that depends on `bar.js`, the old way of doing it is to use webpack to combine these two js file into one huge js file, which is imported in the html. But with this module import, I can just type `<script src="./foo.js" type="module"></script>` and it will work out of the box.

Again. A trend here. No bundlers needed.

It seems like bundler is beginning to become a remnant of the past. Better and faster alternative of bundlers in dev environment are popping out left and right.

## Some edit on rollup
Oh hey... rollup is working now. It seems like `@rollup/plugin-node-resolve` is needed to resolve the path from the js that imports module to the `node_modules`. In `index.js`, which imports lodash, this plugin is used to make it happen. If you try to write `import _ from '../node_modules/lodash'`, there will be the "no outside root import" that kicks in your face. This plugin miraculously takes the lodash in `node_module` and put it in the built js file.

But there's still one problem. This works: `import { has } from 'lodash/has'`, but this doesn't: `import _ from 'lodash'`. The first one has an export default, while the second one doesn't have, and lodash can only work when there is an export default action going on. The plugin `@rollup/plugin-commonjs` automagically solves that. I don't know how the internal works (it might has something to do with es6, because export default is the new feature of es6).

I'm not sure (yet) how these things operate under the hood, but it seems like it's a more forward looking module bundler than webpack. It might be interesting (and worthwhile) to understand how it works under the hood because understanding leads to effectiveness in using this thing. Also, I feel like I'm very shaky on the es6, import and export, and the "old" js thing. My lack of understanding about rollup is partly due to this.

This is all cool, but I found out one big hole in it: the live reload (http-server) doesn't build the rollup js code, and I have to do it manually. There must be a way to solve this. Snowpack already solved it, but I want to understand things from the ground up!

# Problems
- I can't figure out a way to import external module (lodash) in rollup. (luckily solved) ✔
- I can't even figure out how to make the `mount` thing work in snowpack. (solved) ✔
