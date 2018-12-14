---
title: Row
sidebarDepth: 3
---

# Row (`PRow`)

`p-row` is the most important element when you need to do a grid. It is needed by the grid-system as a parent element of your `p-col`s components.

[Preview and learn more on getpapercss.com](https://www.getpapercss.com/docs/layout/flexbox/)

```html
<p-row center>
  <p-col col="4" lg="2" md="6" sm="12">
    <p-button block>First col btn.</p-button>
  </p-col>

  <p-col col="4" lg="2" md="6" sm="12">
    <p-button block>Second col btn.</p-button>
  </p-col>

  <p-col col="4" lg="2" md="6" sm="12">
    <p-button block>Third col btn.</p-button>
  </p-col>
</p-row>
```

<prop-table :component="compRef"></prop-table>

<script>
import PRow from '../../../src/components/row/row.vue';

export default {
  data() {
    return {
      compRef: PRow,
    };
  },
}
</script>
