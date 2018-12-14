---
title: Form-group
sidebarDepth: 3
---

# Form-group (`PFormGroup`)

A componenent that automatically supports the content of a form.

```html
<p-form-group>
  <input placeholder="Firstname">
</p-form-group>
```

<prop-table :component="compRef"></prop-table>

<script>
import PFormGroup from '../../../src/components/form-group/form-group.vue';

export default {
  data() {
    return {
      compRef: PFormGroup,
    };
  },
}
</script>
