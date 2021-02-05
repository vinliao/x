// Apparently storing API key on client's javascript is
// a dumb thing to do

// Here's a somewhat secure way to have the api key
// without hard coding the value to the js. (When
// using node, use the `dotenv` module.)

import { config } from "https://deno.land/x/dotenv/mod.ts";

const ENV = config();
const AIRTABLE_API_KEY = ENV.AIRTABLE_API_KEY;

console.log(AIRTABLE_API_KEY);
