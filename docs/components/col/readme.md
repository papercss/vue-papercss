---
title: Col
sidebarDepth: 3
---

# Col (`PCol`)

The col component is in other words the grid system. To make it work, you must put it inside a `p-row` component.

[Preview and read more on getpapercss.com](https://www.getpapercss.com/docs/layout/flexbox/)

```html
<p-row>
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
import PCol from '../../../src/components/col/col.vue';

export default {
  data() {
    return {
      compRef: PCol,
    };
  },
}
</script>
