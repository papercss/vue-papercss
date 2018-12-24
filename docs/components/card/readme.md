---
title: Card
sidebarDepth: 3
---

# Card (`PCard`)

The card component includes many options to customize it, headers, footers, display options, ... It's made to be a powerful container.

[Preview on getpapercss.com](https://www.getpapercss.com/docs/components/cards)

```html
<p-card
  header="Card header"
  title="My awesome card!"
  subtitle="A small blue-ish subtitle"
  text="This is a sample text that will go inside the card. You can still use the <slot> to put custom content such as buttons."
>
  <p-button small>A little button</p-button>
</p-card>
```

<prop-table :component="compRef"></prop-table>

<script>
import PCard from '../../../src/components/card/card.vue';

export default {
  data() {
    return {
      compRef: PCard,
    };
  },
}
</script>
