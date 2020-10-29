# Notes
The purpose of module bundlers is to combine all the javascript in a web project into one huge bundle.

Say you have `foo.js` and `bar.js`, if you want to import both in your html, you can just put them both in a `<script>` inside html. But what if `foo.js` imports `bar.js`? This is where problems arise. Another problem that pure vanilla javascript face is that it doesn't really have the ability to "use" packages (e.g., lodash).

Module bundlers solve this problem by combining those packages into one huge .js file, which contains all the file. If `foo.js` imports `bar.js` and lodash, then `foo.js`, `bar.js` and lodash will be combined in a file, and that file, which has all the js code, can be imported into html with only one `<script>` tag.

# Problems
- I can't figure out a way to import external module (lodash) in rollup. Lack of understanding... maybe.