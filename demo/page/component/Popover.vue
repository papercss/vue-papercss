<template>
  <div>
    <h2>Popovers</h2>

    <Demo title="Simple Popovers">
      <p-popover text="I am a popover!">
        <p-button>I have a popover</p-button>
      </p-popover>
    </Demo>

    <Demo title="Positional Popovers">
      <p-popover position="left" text="I am a popover!">
        <p-button>I have a popover</p-button>
      </p-popover>

      <p-popover position="right" text="I am a popover!">
        <p-button>I have a popover</p-button>
      </p-popover>

      <p-popover position="bottom" text="I am a popover!">
        <p-button>I have a popover</p-button>
      </p-popover>
    </Demo>
  </div>
</template>

<script>
  import { popover, button } from '../../../src'
  import Demo from '../../component/Demo'

  export default {
    name: "popover",
    components: {
      pPopover: popover,
      pButton: button,
      Demo
    }
  }
</script>

<style scoped>

</style>
