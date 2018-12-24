<template>
  <div class="tabs">
    <ul>
      <li v-for="(tabNode, index) in tabNodes" :key="'tab-' + index" @click="changeTab(index)">
        <a href="#" :class="{ 'active': selectedTabIndex === index }">{{tabNames[index]}}</a>
      </li>
    </ul>

    <slot />
  </div>
</template>

<script>
export default {
  beforeMount() {
    // Find only `PTab` components and store the `VNode` and tab-name.
    this.$slots['default'].forEach((vnode) => {
      if (vnode.componentOptions.tag === 'p-tab') {
        const tabName = vnode.data.attrs['title'];

        this.tabNodes.push(vnode);
        this.tabNames.push(tabName);
      }
    });
  },

  mounted() {
    // Automatically show the first tab if it is present
    if (this.tabNodes.length > 0 && this.tabNodes[0]) {
      this.tabNodes[0].componentInstance.showTab();
    }
  },

  data() {
    return {
      selectedTabIndex: 0,
      /** @type Vue.VNode[] */
      tabNodes: [],
      /** @type String[] */
      tabNames: [],
    };
  },

  methods: {
    /**
     * Change the tab by calling the `hideTab` and `showTab` method on the
     * `PTab` component.
     *
     * @param {number} index index of the new tab to display
     */
    changeTab(index) {
      const currentTabVnode = this.tabNodes[this.selectedTabIndex];
      const newTabVnode = this.tabNodes[index];

      currentTabVnode.componentInstance.hideTab();
      newTabVnode.componentInstance.showTab();

      this.selectedTabIndex = index;
    },
  },
}
</script>

<style scoped>
.tabs ul {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  list-style-type: none;
  margin: 0 0 8px 0;
  padding: 0;
  overflow: hidden;
}

.tabs li {
  float: left;
  text-indent: unset;
}

.tabs li::before {
  content: none;
}

.tabs li a {
  display: block;
  padding: 14px 16px;
  text-align: center;
  color: #c1c0bd;
  font-weight: 600;
  text-decoration: none;
  background-image: none;
}

.tabs li a.active {
  color: #41403e;
  border-bottom: solid 3px #0071de;
}

.tabs li a:not(.active):hover {
  color: #868e96;
}
</style>
