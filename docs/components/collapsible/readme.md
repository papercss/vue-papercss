---
title: Collapsible
sidebarDepth: 3
---

# Collapsible (`PCollapsible`)

The collapsible component allows you to toggle the visibility of a certain content after a user-interaction. This component is also known as an accordion.

[Preview on getpapercss.com](https://www.getpapercss.com/docs/components/collapsible/)

```html
<div>
  <p-collapsible title="First collapsible" show>
    <p>This text is visible only when the first collapsible is opened (show by default).</p>
  </p-collapsible>

  <p-collapsible title="Second collapsible" show>
    <p>This text is visible only when the second collapsible is opened.</p>
  </p-collapsible>

  <p-collapsible title="Third collapsible" show>
    <p>This text is visible only when the third collapsible is opened.</p>
  </p-collapsible>
</div>
```

<prop-table :component="compRef"></prop-table>

<script>
import PCollapsible from '../../../src/components/collapsible/collapsible.vue';

export default {
  data() {
    return {
      compRef: PCollapsible,
    };
  },
}
</script>
