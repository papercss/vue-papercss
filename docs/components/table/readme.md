---
title: Table
sidebarDepth: 3
---

# Table (`PTable`)

A simple wrapper around the basic `<table>` HTML tag.

[Preview on getpapercss.com](https://www.getpapercss.com/docs/content/tables/)

```html
<p-table alternative hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Position</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Bob Dylan</td>
      <td>Musician</td>
      <td>California, USA</td>
    </tr>
  </tbody>
</p-table>
```

<prop-table :component="compRef"></prop-table>

<script>
import PTable from '../../../src/components/table/table.vue';

export default {
  data() {
    return {
      compRef: PTable,
    };
  },
}
</script>
