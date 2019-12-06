# Notes to self

## Cascading problem on ec22e4ab7585d4fe97ddad35ef5f59c3d65f4844

### Problem
If there's two classes, let's say `col-md-12 and col-lg-6`, there will be problem because the `md-12` will be below the `lg-6` in the css. Since css cascades, the `md-12` will be applied regardless of what happens. Here's an example of code that breaks.

`<p class="col-xs-12 col-sm-11">three</p>`

### Potential solution:
1. Use `!important` (lol jk ;D)
2. This doesn't work ~~Reversing the order of column width.~~
3. **This solution works!** The end css result should be grouped by viewport size. Here's pseudocode of the css (not sass).
```
@media xs {
    xs, 1-12
}

@media sm {
    sm, 1-12
}

```
And so on until lg. The reason xs goes up until lg is because of cascading reason. The bigger the viewport width, the media query with bigger size will take over.

## Offset problem on cd781920e314502a8f335f744429f9234ee8ec34
### Problem
The offset column can't be 0. If a smaller viewport has an offset and a bigger one doesn't, the viewport that doesn't have offset wont reset the left margin to 0, but instead will follow the previous offset.

### Potential solution
CSS cascades down. Put a `margin-left: 0;` at the top so that empty margin is the default. Then the offset will be applied once there's a offset class reference from the html. Left margin is 0 until specified otherwise.

1. ~~Every child of row should have a `margin-left: 0;` unless specified otherwise (with offset class). It should look like this `row > * { margin-left: 0 }`~~ Doesn't work, the margin left isn't applied.
2. **This works!** Put `margin-left: 0;` to each viewport on every child of the row. So each viewport defaults to 0 left margin unless specified otherwise. Here's the pseudocode:
```
@media xs {
    .row > * {
        margin-left: 0;
    }

    .
    .
    .

    .offset-xs-(some number) {
        margin-left: (some calculation)
    }
}
```

CSS cascades down. When there's no offset specified, it will default to margin-left: 0. When an offset is specified, then it will prioritize the code below.

3. ~~Put `margin-left: 0;` on each .col class.~~ Doesn't work, class that is placed lower than the offset will win. This is because css cascades.
4. ~~Put `margin-left: 0;` on each .col class, then have another groups of offset classes at the bottom. They should be in the same viewport. The .col and .offset should be grouped together and separated.~~ Doesn't work, specificity problem again.

## Two difficult challenge when creating this
There are two difficult challenge that I found when creating this: properly ordering the viewport size (xs, sm, md, lg, xl) and the column width (e.g., col-sm-**3**). Cascading applies, when those things aren't ordered properly, the grid won't work properly.