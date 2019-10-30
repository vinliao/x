## Note to self
### On flexbox
When we set an element into a flexbox with `display: flex;`, then the child of it will become the item. Each items will be lined side by side and we can do anytihng we want with it. For example:

```
  <div class="d-flex">
    <p>hello world</p>
    <p>hello world 2</p>
  </div>
```
The item of the flex box will be 2 p tags, and they will stick to each other.
```
  <div class="d-flex">
    <div>
      <p>hello world</p>
      <p>hello world 2</p>
    </div>
  </div>
```
But in the code above, the item of the flexbox will be the div itself and not the p tags.

This is important because sometimes we want the items of the flexbox to be a single entity rather than separated. Here's an example:
```
  <table class="d-flex">
    <tr>
      <th>one</th>
      <th>two</th>
      <th>three</th>
    </tr>
    <tr>
      <td>four</td>
      <td>five</td>
      <td>six</td>
    </tr>
    <tr>
      <td>seven</td>
      <td>eight</td>
      <td>nine</td>
    </tr>
  </table>
```
This code will result in a 3 items inside the flexbox, which will be positioned side by side. We don't want the header of the items and each individual row to be positioned side by side, we want it to look like a normal table instead. To do that we need to make the table into one flexbox item and we can wrap a div around it.
```
  <div class="d-flex">
    <table>
      <tr>
        <th>one</th>
        <th>two</th>
        <th>three</th>
      </tr>
      <tr>
        <td>four</td>
        <td>five</td>
        <td>six</td>
      </tr>
      <tr>
        <td>seven</td>
        <td>eight</td>
        <td>nine</td>
      </tr>
    </table>
  </div>
```
This is the more correct way to do the flexbox. The item is just a single table instead of the rows of the table.

## On when to use id and classes
Id is used when it's unique and there's only one on the site/app. For example a site is probably gonna only have jumbotron and it makes sense to use id there. But a site might have multiple newsletter signup form spreaded around multiple pages, and it makes sense to use class.

## On bootstrap row and column system
One of the core features of bootstrap is being able to create a row and how much column it is. Since it's using flexbox, here's my guess of how the classes works:

1. The row class is basically `display: flex;`
2. The col classes (e.g., `col-md-8`) uses media query and the flex size. The middle part (xs, sm, md, lg) controls how the layout looks like when it hit certain breakpoints. The number is how much part / 12 that it's occupying, which uses `flex: [insert value here]`