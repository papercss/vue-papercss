---
title: Tabs
sidebarDepth: 3
---

# Tab and tabs (`PTab` & `PTabs`)

Create tabbable panes with multiple panes where each pane have a unique content. The parent elements of your `p-tab` must be a `p-tabs`.

[Preview on getpapercss.com](https://www.getpapercss.com/docs/components/tabs/)

```html
<p-tabs>
  <p-tab title="First tab">
    <p>Content that is displayed only when the first tab is selected.</p>
  </p-tab>

  <p-tab title="Second tab">
    <p>Content that is displayed only when the second tab is selected.</p>
  </p-tab>

  <p-tab title="Third tab">
    <p>Content that is displayed only when the third tab is selected.</p>
  </p-tab>
</p-tabs>
```

## Props for `PTabs`

<prop-table :component="compRef"></prop-table>

## Props for `PTab`

<prop-table :component="compRefAlt"></prop-table>

<script>
import PTabs from '../../../src/components/tabs/tabs.vue';
import PTab from '../../../src/components/tabs/tab.vue';

export default {
  data() {
    return {
      compRef: PTabs,
      compRefAlt: PTab,
    };
  },
}
</script>
