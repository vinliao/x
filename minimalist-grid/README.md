# Notes to self

## Cascading problem on ec22e4ab7585d4fe97ddad35ef5f59c3d65f4844

If there's a smaller viewport with larger flex basis, the larger viewport breaks this is a problem of cascading, here's a piece of code that breaks.

`<p class="col-xs-12 col-sm-11">three</p>`

Because xs (the smaller viewport compared to sm) has a larger flex-basis, which is 12 column, the col-sm-11 doesn't apply. This is a cascading problem and I have yet to point out the exact problem. But my guess is that since xs-12 is below sm-11 in the css file, the xs-12 is the one that will be applied.

## Two difficult challenge when creating this
There are two difficult challenge that I found when creating this: properly ordering the viewport size (xs, sm, md, lg, xl) and the column width (e.g., col-sm-**3**). Cascading applies, when those things aren't ordered properly, the grid won't work properly.