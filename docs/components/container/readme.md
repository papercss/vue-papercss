---
title: Container
sidebarDepth: 3
---

# Container (`PContainer`)

A container is the most basic element which handle responsive design and add padding on the x-axis (depending on the `fluid` prop).

```html
<p-container>
  <p-alert color="warning">Something went wrong.</p-alert>
  <p-alert color="danger">It just doesn't work.</p-alert>
</p-container>

<p-container fluid>
  <p-alert color="warning">Something went wrong.</p-alert>
  <p-alert color="danger">It just doesn't work.</p-alert>
</p-container>
```

<prop-table :component="compRef"></prop-table>

<script>
import PContainer from '../../../src/components/container/container.vue';

export default {
  data() {
    return {
      compRef: PContainer,
    };
  },
}
</script>
