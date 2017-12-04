<template lang="html">

	<div id="demo">
		<h1>PaperCSS for VueJS</h1>

		<div id="demo-content">
			<p-button>Basic button</p-button>
			<p-button :small="true">Small button</p-button>
			<p-button :large="true">Large button</p-button>
			<p-button :disabled="true">Disabled button</p-button>
		</div>
	</div>
</template>

<script>
import button from '../src';

export default {
	components: {
		pButton: button,
	}
}
</script>

<style scoped lang="css"></style>
