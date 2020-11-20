algo for cleaning
1. read jsonld file line by line
2. clean data per line
3. append cleaned data to a file (or find a way to output it in some way)

what I want:
- a way to search words
- randomly show tweets

steps:
- have clean tweets
- use svelte/vue/11ty
- add some css

## Design notes
- ~~This thing has 20k tweets (30mb of stuff) and I don't think jamstack fits well. I'll try rails/laravel. I think I'm going laravel + tailwind (because why not).~~
- Oh... I can use mongodb atlas instead of spawning a full-blown laravel app. Laravel feels heavy and bloated. I also can leverage atlas search for a mini searching capability.
