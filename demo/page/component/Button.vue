<template>
  <div>
    <h2>Buttons</h2>

    <Demo title="Default Button">
      <p-button>Default</p-button>
    </Demo>

    <Demo title="Colored Buttons">
      <p-button color="primary">Primary</p-button>
      <p-button color="secondary">Secondary</p-button>
      <p-button color="success">Success</p-button>
      <p-button color="warning">Warning</p-button>
      <p-button color="danger">Danger</p-button>
    </Demo>

    <Demo title="Large Button">
      <p-button large>Large</p-button>
    </Demo>

    <Demo title="Small Button">
      <p-button small>Small</p-button>
    </Demo>

    <Demo title="Disabled Button">
      <p-button disabled>Disabled</p-button>
    </Demo>

    <Demo title="Block Button">
      <p-button block>Block</p-button>
    </Demo>
  </div>
</template>

<script>
  import Demo from '../../component/Demo'
  import { button } from "../../../src"

  export default {
    name: "button",
    components: {
      pButton: button,
      Demo
    }
  }
</script>

<style scoped>

</style>
