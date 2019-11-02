## Notes to self
### On justify content and flex basis.
Justify content can only work if there's width left to work on. For example if there's two items, left and right, and it's wrapped to become left top and right bottom (viewport shrinked). **The bottom part of the item won't have "space" left because it's wrapped.**

This means if an item is wrapped, the wrapped item in the new row doesn't have a 100% flex-basis, which means it's impossible to use justify-content on the newly wrapped item.

To solve this, set the wrapped item's flex-basis to 100%. Man I learned this the hard way T_T and cost me hours.