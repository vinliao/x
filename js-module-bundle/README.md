# Notes
The purpose of module bundlers is to combine all the javascript in a web project into one huge bundle.

Say you have `foo.js` and `bar.js`, if you want to import both in your html, you can just put them both in a `<script>` inside html. But what if `foo.js` imports `bar.js`? This is where problems arise. Another problem that pure vanilla javascript face is that it doesn't really have the ability to "use" packages (e.g., lodash).

Module bundlers solve this problem by combining those packages into one huge .js file, which contains all the file. If `foo.js` imports `bar.js` and lodash, then `foo.js`, `bar.js` and lodash will be combined in a file, and that file, which has all the js code, can be imported into html with only one `<script>` tag.

## Snowpack
Now... snowpack is kinda different. From what I have observed, it kinda took everything (all the html, css, and js) then put it into a folder called `/build`. The external modules are installed inside that build folder called `/web_modules`. So in the end, the js imports from that `/web_modules`.

But all of them are accomplishing the same goal: trying to combine all the coding files into one html, one css, and (maybe) one js.

# Problems
- I can't figure out a way to import external module (lodash) in rollup. Lack of understanding... maybe.
- I can't even figure out how to make the `mount` thing work in snowpack