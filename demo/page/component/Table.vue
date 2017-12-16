<template>
  <div>
    <h2>Tables</h2>

    <Demo title="Simple Table">
      <p-table>
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>John</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jane</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Bob</td>
        </tr>
        </tbody>
      </p-table>
    </Demo>

    <Demo title="Alternating Rows">
      <p-table alternating>
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>John</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jane</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Bob</td>
        </tr>
        </tbody>
      </p-table>
    </Demo>

    <Demo title="Highlight Row On Hover">
      <p-table hover>
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>John</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jane</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Bob</td>
        </tr>
        </tbody>
      </p-table>
    </Demo>
  </div>
</template>

<script>
  import { table } from '../../../src'
  import Demo from '../../component/Demo'

  export default {
    name: "table",
    components: {
      pTable: table,
      Demo
    }
  }
</script>

<style scoped>

</style>
