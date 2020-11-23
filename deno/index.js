import 'https://deno.land/x/lodash/lodash.js'
import ky from 'https://unpkg.com/ky/index.js'

console.log(_.isArray('not an array'))
console.log('this is from deno')

(async () => {
  const parsed = await ky.get('https://google.com')

  console.log(parsed);
  //=> `{data: '🦄'}`
})();