<template>
  <slot></slot>
</template>

<script>
    export default {
        name: "pre"
    }
</script>

<style scoped>
  pre {
    font-family: monospace, monospace;
    font-size: 1em
  }

  pre {
    display: block;
    padding: 1em;
    font-size: 80%;
    line-height: 1.5;
    color: #41403e;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #fafafa;
    border: 1px solid #c1c0bd;
    border-radius: 3px;
    overflow-x: auto;
    white-space: pre-wrap
  }
</style>
