<template>
  <div id="prop-table">
    <table v-if="mappedComponentProps.length">
      <thead>
        <tr>
          <th>Prop name</th>
          <th>Default value</th>
          <th>Required</th>
          <th>Type</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(prop, index) in mappedComponentProps" :key="'prop-tr-' + index">
          <td>{{prop.name}}</td>
          <td>{{prop.value}}</td>
          <td>{{prop.required}}</td>
          <td>{{prop.type}}</td>
        </tr>
      </tbody>
    </table>

    <h3 v-else>This component doesn't have any prop. 👏</h3>
  </div>
</template>

<script>
export default {
  props: ['component'],

  methods: {
    /**
     * Automatically map the component reference props into a readable array.
     */
    mapProps() {
      if (this.component.props) {
        for (const [key, value] of Object.entries(this.component.props)) {
          const prop = {
            name: key,
            default: value.default,
            required: value.required,
            type: value.type.name,
          };

          this.mappedComponentProps.push(prop);
        }
      }
    },
  },

  data() {
    return {
      rawComponentProps: {},
      mappedComponentProps: [],
    };
  },

  beforeMount() {
    this.mapProps();
  },
}
</script>
