const wasmCode = await Deno.readFile("./target/wasm32-unknown-unknown/debug/deno_wasm.wasm");
const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule);

const square = wasmInstance.exports.square as CallableFunction
const triple = wasmInstance.exports.triple as CallableFunction

// this is rust function!
console.log(square(2));
console.log(triple(5));