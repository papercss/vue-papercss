---
title: Alert
sidebarDepth: 3
---

# Alert (`PAlert`)

Alerts can contain any type of text inside, even buttons, labels and other custom-elements with the ability to add a dismiss button.

[Preview on getpapercss.com](https://www.getpapercss.com/docs/components/alerts)

```html
<p-alert>
  <p>This is the default alert</p>
</p-alert>

<p-alert color="danger" dismissible>
  <p>This is a danger alert dismissible</p>
</p-alert>
```

<prop-table :component="compRef"></prop-table>

<script>
import PAlert from '../../../src/components/alert/alert.vue';

export default {
  data() {
    return {
      compRef: PAlert,
    };
  },
}
</script>
