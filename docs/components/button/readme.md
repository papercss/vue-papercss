---
title: Button
sidebarDepth: 3
---

# Button (`PButton`)

Use PaperCSS's custom buttons components to add actions in forms, dialogs, and many other elements. The button component includes a support for many contextual variations, sizes, disabled, ...

[Preview on getpapercss.com](https://www.getpapercss.com/docs/components/buttons)

```html
<div>
  <p-button>Very basic button</p-button>
  <p-button color="success" small>Success small button</p-button>
  <p-button color="warning" href="https://getpapercss.com" large disabled>Go to getpapercss.com</p-button>
</div>
```

<prop-table :component="compRef"></prop-table>

<script>
import PButton from '../../../src/components/button/button.vue';

export default {
  data() {
    return {
      compRef: PButton,
    };
  },
}
</script>
