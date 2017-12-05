<template lang="html">
	<p-container id="demo" class="paper">
		<h1>PaperCSS for VueJS</h1>

		<div id="demo-content" class="demo">
			<h3>Grid system</h3>

      <p-container id="grid-demo" fluid>
        <p-row>
          <p-col col="4">col-4 col</p-col>
          <p-col col="4">col-4 col</p-col>
          <p-col col="4">col-4 col</p-col>
        </p-row>

        <p-row>
          <p-col col="3">col-3 col</p-col>
          <p-col col="9">col-9 col</p-col>
        </p-row>

        <p-row>
          <p-col sm="6" md="8" lg="10">sm-6 md-8 lg-10 col</p-col>
          <p-col sm="6" md="4" lg="2">sm-6 md-4 lg-2 col</p-col>
        </p-row>

        <p-row>
          <p-col sm="5">sm-5 col</p-col>
          <p-col fill>col-fill col</p-col>
          <p-col fill>col-fill col</p-col>
        </p-row>

        <p-row>
          <p-col sm="4">Aligned</p-col>
          <p-col sm="4">Left (default)</p-col>
        </p-row>

        <p-row right>
          <p-col sm="4">Aligned</p-col>
          <p-col sm="4">Right (flex-right)</p-col>
        </p-row>

        <p-row center>
          <p-col sm="4">Aligned</p-col>
          <p-col sm="4">Center (flex-center)</p-col>
        </p-row>

        <p-row edges>
          <p-col sm="4">Aligned</p-col>
          <p-col sm="4">To edges (flex-edges)</p-col>
        </p-row>

        <p-row top>
          <p-col sm="4">Aligned top</p-col>
          <p-col sm="4">Aligned top</p-col>
          <p-col sm="4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.</p-col>
        </p-row>

        <p-row middle>
          <p-col sm="4">Aligned middle</p-col>
          <p-col sm="4">Aligned middle</p-col>
          <p-col sm="4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.</p-col>
        </p-row>

        <p-row bottom>
          <p-col sm="4">Aligned bottom</p-col>
          <p-col sm="4">Aligned bottom</p-col>
          <p-col sm="4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.</p-col>
        </p-row>

        <p-row>
          <p-col sm="3" bottom>Align bottom</p-col>
          <p-col sm="3" middle>Align middle</p-col>
          <p-col sm="3" top>Align top</p-col>
          <p-col sm="3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lorem lectus, lobortis a nibh non, luctus luctus erat posuere. Curabitur ac turpis aliquam, malesuada elit suscipit, blandit dolor.</p-col>
        </p-row>
      </p-container>

			<h3>Buttons</h3>

			<p-container id="buttons-demo" fluid>
				<p-button>Basic button</p-button>
				<p-button :small="true">Small button</p-button>
				<p-button :large="true">Large button</p-button>
				<p-button :disabled="true">Disabled button</p-button>
			</p-container>
		</div>
	</p-container>
</template>

<script>
import { button, container, row, col } from '../src';

export default {
	components: {
		pButton: button,
		pContainer: container,
		pRow: row,
		pCol: col,
	}
}
</script>

<style scoped lang="css"></style>
