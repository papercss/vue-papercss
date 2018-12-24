---
title: Badge
sidebarDepth: 3
---

# Badge (`PBadge`)

Badges are perfect to add a context for any content. They are made to be adaptative based on the parent font-size, it scales automatically.

[Preview on getpapercss.com](https://www.getpapercss.com/docs/components/badges)

```html
<div>
  <h3>Example H3 heading <p-badge>New</p-badge></h3>
  <h4>Example H4 heading <p-badge color="warning">Warning</p-badge></h4>
  <h5>Example H5 heading <p-badge color="danger">Danger</p-badge></h5>
  <h6>Example H6 heading <p-badge color="success">Success</p-badge></h6>
</div>
```

<prop-table :component="compRef"></prop-table>

<script>
import PBadge from '../../../src/components/badge/badge.vue';

export default {
  data() {
    return {
      compRef: PBadge,
    };
  },
}
</script>
