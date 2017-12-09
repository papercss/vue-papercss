<template lang="html">
	<p-container id="demo" class="paper">
		<h1 class="text-center">PaperCSS for VueJS</h1>

    <router-view></router-view>
	</p-container>
</template>

<script>
import { container } from '../src'

export default {
  name: "app",
  components: {
    pContainer: container
  }
}

</script>

<style scoped lang="css"></style>
