---
title: Progress
sidebarDepth: 3
---

# Progress (`PProgress`)

Display a (dynamic) progression to the user with the `p-progress` flexible component, many contextual states, text labels, animated backgrounds, ...

[Preview on getpapercss.com](https://www.getpapercss.com/docs/components/progress/)

```html
<p-progress width="50" stripped></p-progress>
<p-progress width="100" color="secondary" stripped>100%</p-progress>
```

<prop-table :component="compRef"></prop-table>

<script>
import PProgress from '../../../src/components/progress/progress.vue';

export default {
  data() {
    return {
      compRef: PProgress,
    };
  },
}
</script>
