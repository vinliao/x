# Notes to self

## Cascading problem on ec22e4ab7585d4fe97ddad35ef5f59c3d65f4844

### Problem
If there's two classes, let's say `col-md-12 and col-lg-6`, there will be problem because the `md-12` will be below the `lg-6` in the css. Since css cascades, the `md-12` will be applied regardless of what happens. Here's an example of code that breaks.

`<p class="col-xs-12 col-sm-11">three</p>`

### Some potential solution:
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


## Two difficult challenge when creating this
There are two difficult challenge that I found when creating this: properly ordering the viewport size (xs, sm, md, lg, xl) and the column width (e.g., col-sm-**3**). Cascading applies, when those things aren't ordered properly, the grid won't work properly.