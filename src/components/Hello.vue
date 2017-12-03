<template>
<h1 id="greetings">Hello! vuejs-paper-css</h1>
</template>


<script>
import upper from 'lodash/startCase';

export default {
  computed: {
    name() {
      return upper('John Doe');
    },
  },
};
</script>

<style lang="scss">
#greetings {
  color: chocolate;
}
</style>