algo for cleaning
1. read jsonld file line by line
2. clean data per line
3. append cleaned data to a file (or find a way to output it in some way)

what I want:
- a way to search words
- randomly show tweets

## Steps to build this thing
1. clean tweets properly
2. put everything on mongo atlas
3. setup basic frontend and get data from there
4. style and make it pretty

## Design notes
- ~~This thing has 20k tweets (30mb of stuff) and I don't think jamstack fits well. I'll try rails/laravel. I think I'm going laravel + tailwind (because why not).~~
- Oh... I can use mongodb atlas instead of spawning a full-blown laravel app. Laravel feels heavy and bloated. I also can leverage atlas search for a mini searching capability
- I'm trying to build something with svelte + mongodb through a http call... but everything just seem messy. In fact, this is REALLY messy and I don't really wanna touch this shit
- What if I use handlebars/liquid instead of making a full-blown svelte app? I'm starting to feel like this is unnecessarily complex
- It seems like having to connect and re-connect to the db on every query is very expensive and unnecessary. What if I have a lambda function that fetches stuff instead? Edit: okay, I'll use netlify function to get data from mongo, and it acts like a controller
- I think I can create a netlify function folder inside this thing so I don't have to have two separate folders. I only need three: one for function, one for preprocess, one for frontend (svelte + routify). Okay okay okay.
- Oh... what about initializing db in App.svelte, pass the collection in the components that shows stuff, and query from there? Netlify function seems unnecessarily complex you know... I'll try this and see what happens.
- Okay. Everything is too complex. I'll try doing everything just with routify.
- Wow the current data structure is really fucking bad for searching. Lemme try making a huge object and using the key as the tweetId to enable searching.

## Some ideas
- kapilguptamd.vinliao.com? Maybe I can do this instead
- I can use scripts in package.json to preprocess the thing
- One thing I don't want is to run a server. I want to host the thing on netlify and let it communicate with mongo atlas. This means I can't use express for the api and I have to directly call mongodb atlas
- Another cool solution: dump every post to some pleroma/mastodon instance... then query from it. Wow wow wow!

## Q
- Is there something wrong with opening and re-opening the db connected for every query?