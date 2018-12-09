//
//
//
//
//
//
var script = {
  props: {
    fluid: {
      type: Boolean,
      default: false
    }
  }
};

/* script */
            const __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { class: { container: true, fluid: _vm.fluid } },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-0829be00_0", { source: "\n@import url('../../../node_modules/papercss/dist/components/container.css');\n\n/* .container.fluid is not a core PaperCSS class */\n.container.fluid[data-v-0829be00] {\n  width: 100% !important;\n  max-width: none !important;\n}\n", map: {"version":3,"sources":["/Users/totominc/Desktop/Git/vuejs-papercss/src/components/container/container.vue"],"names":[],"mappings":";AAkBA,4EAAA;;AAEA,mDAAA;AACA;EACA,uBAAA;EACA,2BAAA;CACA","file":"container.vue","sourcesContent":["<template>\n  <div :class=\"{ 'container': true, 'fluid': fluid }\">\n    <slot />\n  </div>\n</template>\n\n<script>\nexport default {\n  props: {\n    fluid: {\n      type: Boolean,\n      default: false,\n    },\n  },\n}\n</script>\n\n<style scoped lang=\"css\">\n@import url('../../../node_modules/papercss/dist/components/container.css');\n\n/* .container.fluid is not a core PaperCSS class */\n.container.fluid {\n  width: 100% !important;\n  max-width: none !important;\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-0829be00";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/totominc/Desktop/Git/vuejs-papercss/src/components/container/container.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var container = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  );

//
//
//
//
//
//
var script$1 = {
  props: {
    right: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    edges: {
      type: Boolean,
      default: false
    },
    spaces: {
      type: Boolean,
      default: false
    },
    top: {
      type: Boolean,
      default: false
    },
    middle: {
      type: Boolean,
      default: false
    },
    bottom: {
      type: Boolean,
      default: false
    }
  }
};

/* script */
            const __vue_script__$1 = script$1;
            
/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: [
        "row",
        _vm.right ? "flex-right" : "",
        _vm.center ? "flex-center" : "",
        _vm.edges ? "flex-edges" : "",
        _vm.spaces ? "flex-spaces" : "",
        _vm.top ? "flex-top" : "",
        _vm.middle ? "flex-middle" : "",
        _vm.bottom ? "flex-bottom" : ""
      ]
    },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-c7a42372_0", { source: "\n@import url('../../../node_modules/papercss/dist/components/flexbox.css');\n", map: {"version":3,"sources":["/Users/totominc/Desktop/Git/vuejs-papercss/src/components/row/row.vue"],"names":[],"mappings":";AAgDA,0EAAA","file":"row.vue","sourcesContent":["<template>\n  <div :class=\"['row', right ? 'flex-right': '', center ? 'flex-center' : '', edges ? 'flex-edges' : '', spaces ? 'flex-spaces' : '', top ? 'flex-top' : '', middle ? 'flex-middle' : '', bottom ? 'flex-bottom' : '']\">\n    <slot />\n  </div>\n</template>\n\n<script>\nexport default {\n  props: {\n    right: {\n      type: Boolean,\n      default: false,\n    },\n\n    center: {\n      type: Boolean,\n      default: false,\n    },\n\n    edges: {\n      type: Boolean,\n      default: false,\n    },\n\n    spaces: {\n      type: Boolean,\n      default: false,\n    },\n\n    top: {\n      type: Boolean,\n      default: false,\n    },\n\n    middle: {\n      type: Boolean,\n      default: false,\n    },\n\n    bottom: {\n      type: Boolean,\n      default: false,\n    },\n  },\n}\n</script>\n\n<style scoped lang=\"css\">\n@import url('../../../node_modules/papercss/dist/components/flexbox.css');\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = "data-v-c7a42372";
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* component normalizer */
  function __vue_normalize__$1(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/totominc/Desktop/Git/vuejs-papercss/src/components/row/row.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$1() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$1.styles || (__vue_create_injector__$1.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var row = __vue_normalize__$1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    __vue_create_injector__$1,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$2 = {
  props: {
    col: {
      type: String,
      default: null
    },
    lg: {
      type: String,
      default: null
    },
    md: {
      type: String,
      default: null
    },
    sm: {
      type: String,
      default: null
    },
    fill: {
      type: Boolean,
      default: false
    },
    bottom: {
      type: Boolean,
      default: false
    },
    middle: {
      type: Boolean,
      default: false
    },
    top: {
      type: Boolean,
      default: false
    }
  },
  computed: {}
};

/* script */
            const __vue_script__$2 = script$2;
            
/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: [
        "col",
        _vm.col ? "col-" + _vm.col : "",
        _vm.lg ? "lg-" + _vm.lg : "",
        _vm.md ? "md-" + _vm.md : "",
        _vm.sm ? "sm-" + _vm.sm : "",
        _vm.fill ? "col-fill" : "",
        _vm.bottom ? "align-bottom" : "",
        _vm.middle ? "align-middle" : "",
        _vm.top ? "align-top" : ""
      ]
    },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = function (inject) {
    if (!inject) return
    inject("data-v-20152e23_0", { source: "\n@import url('../../../node_modules/papercss/dist/components/flexbox.css');\n", map: {"version":3,"sources":["/Users/totominc/Desktop/Git/vuejs-papercss/src/components/col/col.vue"],"names":[],"mappings":";AAiEA,0EAAA","file":"col.vue","sourcesContent":["<template>\n  <div :class=\"[\n    'col',\n    col ? 'col-' + col : '',\n    lg ? 'lg-' + lg : '',\n    md ? 'md-' + md : '',\n    sm ? 'sm-' + sm : '',\n    fill ? 'col-fill' : '',\n    bottom ? 'align-bottom' : '',\n    middle ? 'align-middle' : '',\n    top ? 'align-top' : '',\n  ]\">\n    <slot />\n  </div>\n</template>\n\n<script>\nexport default {\n  props: {\n    col: {\n      type: String,\n      default: null,\n    },\n\n    lg: {\n      type: String,\n      default: null,\n    },\n\n    md: {\n      type: String,\n      default: null,\n    },\n\n    sm: {\n      type: String,\n      default: null,\n    },\n\n    fill: {\n      type: Boolean,\n      default: false,\n    },\n\n    bottom: {\n      type: Boolean,\n      default: false,\n    },\n\n    middle: {\n      type: Boolean,\n      default: false,\n    },\n\n    top: {\n      type: Boolean,\n      default: false,\n    },\n  },\n\n  computed: {},\n}\n</script>\n\n<style scoped lang=\"css\">\n@import url('../../../node_modules/papercss/dist/components/flexbox.css');\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$2 = "data-v-20152e23";
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* component normalizer */
  function __vue_normalize__$2(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/totominc/Desktop/Git/vuejs-papercss/src/components/col/col.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$2() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$2.styles || (__vue_create_injector__$2.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var col = __vue_normalize__$2(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    __vue_create_injector__$2,
    undefined
  );

//
//
//
//
//
//
var script$3 = {
  props: {
    block: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    }
  }
};

/* script */
            const __vue_script__$3 = script$3;
            
/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: ((_obj = {
        "paper-btn": true,
        "btn-block": _vm.block,
        "btn-small": _vm.small,
        "btn-large": _vm.large,
        disabled: _vm.disabled
      }),
      (_obj["btn-" + _vm.color] = _vm.color),
      _obj),
      attrs: { disabled: _vm.disabled }
    },
    [_c("a", { attrs: { href: _vm.href } }, [_vm._t("default")], 2)]
  )
  var _obj;
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$3 = function (inject) {
    if (!inject) return
    inject("data-v-82c09fd0_0", { source: "\n@import url('../../../node_modules/papercss/dist/components/buttons.css');\n", map: {"version":3,"sources":["/Users/totominc/Desktop/Git/vuejs-papercss/src/components/button/button.vue"],"names":[],"mappings":";AA2CA,0EAAA","file":"button.vue","sourcesContent":["<template>\n  <div :class=\"{ 'paper-btn': true, 'btn-block': block, 'btn-small': small, 'btn-large': large, 'disabled': disabled, ['btn-' + color]: color }\" :disabled=\"disabled\">\n\t\t<a :href=\"href\"><slot /></a>\n  </div>\n</template>\n\n<script>\nexport default {\n\tprops: {\n\t\tblock: {\n\t\t\ttype: Boolean,\n\t\t\tdefault: false,\n\t\t},\n\n\t\tsmall: {\n\t\t\ttype: Boolean,\n\t\t\tdefault: false,\n\t\t},\n\n    large: {\n      type: Boolean,\n      default: false,\n    },\n\n\t\tdisabled: {\n\t\t\ttype: Boolean,\n\t\t\tdefault: false,\n\t\t},\n\n    color: {\n\t\t  type: String,\n      default: ''\n    },\n\n\t\thref:{\n\t\t\ttype:String,\n\t\t\tdefault:''\n\t\t}\n\t}\n}\n</script>\n\n<style scoped lang=\"css\">\n@import url('../../../node_modules/papercss/dist/components/buttons.css');\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$3 = "data-v-82c09fd0";
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* component normalizer */
  function __vue_normalize__$3(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/totominc/Desktop/Git/vuejs-papercss/src/components/button/button.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$3() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$3.styles || (__vue_create_injector__$3.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var button = __vue_normalize__$3(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    __vue_create_injector__$3,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$4 = {
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    imgSrc: {
      type: String,
      default: ''
    },
    imgAlt: {
      type: String,
      default: ''
    },
    imgBottom: {
      type: Boolean,
      default: false
    },
    header: {
      type: String,
      default: ''
    },
    footer: {
      type: String,
      default: ''
    }
  }
};

/* script */
            const __vue_script__$4 = script$4;
            
/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "card" }, [
    _vm.header
      ? _c("div", { staticClass: "card-header" }, [_vm._v(_vm._s(_vm.header))])
      : _vm._e(),
    _vm._v(" "),
    _vm.imgSrc && !_vm.imgBottom
      ? _c("img", { attrs: { src: _vm.imgSrc, alt: _vm.imgAlt } })
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _vm.title
          ? _c("h4", { staticClass: "card-title" }, [_vm._v(_vm._s(_vm.title))])
          : _vm._e(),
        _vm._v(" "),
        _vm.subtitle
          ? _c("h5", { staticClass: "card-subtitle" }, [
              _vm._v(_vm._s(_vm.subtitle))
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.text
          ? _c("p", { staticClass: "card-text" }, [_vm._v(_vm._s(_vm.text))])
          : _vm._e(),
        _vm._v(" "),
        _vm._t("default")
      ],
      2
    ),
    _vm._v(" "),
    _vm.imgSrc && _vm.imgBottom
      ? _c("img", { attrs: { src: _vm.imgSrc, alt: _vm.imgAlt } })
      : _vm._e(),
    _vm._v(" "),
    _vm.footer
      ? _c("div", { staticClass: "card-footer" }, [_vm._v(_vm._s(_vm.footer))])
      : _vm._e()
  ])
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  const __vue_inject_styles__$4 = function (inject) {
    if (!inject) return
    inject("data-v-1a6107cd_0", { source: "\n@import url('../../../node_modules/papercss/dist/components/cards.css');\n", map: {"version":3,"sources":["/Users/totominc/Desktop/Git/vuejs-papercss/src/components/card/card.vue"],"names":[],"mappings":";AAkEA,wEAAA","file":"card.vue","sourcesContent":["<template>\n  <div class=\"card\">\n    <div v-if=\"header\" class=\"card-header\">{{header}}</div>\n\n    <img v-if=\"imgSrc && !imgBottom\" :src=\"imgSrc\" :alt=\"imgAlt\">\n\n    <div class=\"card-body\">\n      <h4 v-if=\"title\" class=\"card-title\">{{title}}</h4>\n      <h5 v-if=\"subtitle\" class=\"card-subtitle\">{{subtitle}}</h5>\n      <p v-if=\"text\" class=\"card-text\">{{text}}</p>\n      <slot />\n    </div>\n\n    <img v-if=\"imgSrc && imgBottom\" :src=\"imgSrc\" :alt=\"imgAlt\">\n\n    <div v-if=\"footer\" class=\"card-footer\">{{footer}}</div>\n  </div>\n</template>\n\n<script>\nexport default {\n  props: {\n    title: {\n      type: String,\n      default: '',\n    },\n\n    subtitle: {\n      type: String,\n      default: '',\n    },\n\n    text: {\n      type: String,\n      default: '',\n    },\n\n    imgSrc: {\n      type: String,\n      default: '',\n    },\n\n    imgAlt: {\n      type: String,\n      default: '',\n    },\n\n    imgBottom: {\n      type: Boolean,\n      default: false,\n    },\n\n    header: {\n      type: String,\n      default: '',\n    },\n\n    footer: {\n      type: String,\n      default: '',\n    },\n  },\n}\n</script>\n\n<style scoped lang=\"css\">\n@import url('../../../node_modules/papercss/dist/components/cards.css');\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$4 = "data-v-1a6107cd";
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* component normalizer */
  function __vue_normalize__$4(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/totominc/Desktop/Git/vuejs-papercss/src/components/card/card.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$4() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$4.styles || (__vue_create_injector__$4.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var card = __vue_normalize__$4(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    __vue_create_injector__$4,
    undefined
  );

//
//
//
//
//
//
var script$5 = {
  props: {
    color: {
      type: String,
      default: ''
    }
  }
};

/* script */
            const __vue_script__$5 = script$5;
            
/* template */
var __vue_render__$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "span",
    { class: ((_obj = { badge: true }), (_obj[_vm.color] = _vm.color), _obj) },
    [_vm._t("default")],
    2
  )
  var _obj;
};
var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;

  /* style */
  const __vue_inject_styles__$5 = function (inject) {
    if (!inject) return
    inject("data-v-4b019d0b_0", { source: "\n@import url('../../../node_modules/papercss/dist/components/badges.css');\n", map: {"version":3,"sources":["/Users/totominc/Desktop/Git/vuejs-papercss/src/components/badge/badge.vue"],"names":[],"mappings":";AAkBA,yEAAA","file":"badge.vue","sourcesContent":["<template>\n  <span :class=\"{ 'badge': true, [color]: color }\">\n    <slot />\n  </span>\n</template>\n\n<script>\nexport default {\n\tprops: {\n    color: {\n      type: String,\n      default: ''\n    }\n\t}\n}\n</script>\n\n<style scoped lang=\"css\">\n@import url('../../../node_modules/papercss/dist/components/badges.css');\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$5 = "data-v-4b019d0b";
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* component normalizer */
  function __vue_normalize__$5(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/totominc/Desktop/Git/vuejs-papercss/src/components/badge/badge.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$5() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$5.styles || (__vue_create_injector__$5.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var badge = __vue_normalize__$5(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    __vue_create_injector__$5,
    undefined
  );

//
//
//
//
//
//
var script$6 = {
  props: {
    color: {
      type: String,
      default: ''
    }
  }
};

/* script */
            const __vue_script__$6 = script$6;
            
/* template */
var __vue_render__$6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: ((_obj = { alert: true }),
      (_obj["alert-" + _vm.color] = _vm.color),
      _obj)
    },
    [_vm._t("default")],
    2
  )
  var _obj;
};
var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;

  /* style */
  const __vue_inject_styles__$6 = function (inject) {
    if (!inject) return
    inject("data-v-9fefc2ea_0", { source: "\n@import url('../../../node_modules/papercss/dist/components/alerts.css');\n", map: {"version":3,"sources":["/Users/totominc/Desktop/Git/vuejs-papercss/src/components/alert/alert.vue"],"names":[],"mappings":";AAkBA,yEAAA","file":"alert.vue","sourcesContent":["<template>\n  <div :class=\"{'alert': true, ['alert-' + color]: color }\">\n    <slot />\n  </div>\n</template>\n\n<script>\nexport default {\n  props: {\n    color: {\n      type: String,\n      default: '',\n    }\n  }\n}\n</script>\n\n<style scoped lang=\"css\">\n@import url('../../../node_modules/papercss/dist/components/alerts.css');\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$6 = "data-v-9fefc2ea";
  /* module identifier */
  const __vue_module_identifier__$6 = undefined;
  /* functional template */
  const __vue_is_functional_template__$6 = false;
  /* component normalizer */
  function __vue_normalize__$6(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/totominc/Desktop/Git/vuejs-papercss/src/components/alert/alert.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$6() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$6.styles || (__vue_create_injector__$6.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var alert = __vue_normalize__$6(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    __vue_create_injector__$6,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$7 = {
  props: {
    title: {
      type: String,
      default: ''
    },
    meta: {
      type: String,
      default: ''
    },
    lead: {
      type: String,
      default: ''
    },
    titleLink: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    authorLink: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      default: ''
    },
    categoryLink: {
      type: String,
      default: ''
    }
  }
};

/* script */
            const __vue_script__$7 = script$7;
            
/* template */
var __vue_render__$7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "article",
    { staticClass: "article" },
    [
      _c("h1", { staticClass: "article-title" }, [
        _c("a", { attrs: { href: "#" + _vm.titleLink } }, [
          _vm._v(_vm._s(_vm.title))
        ])
      ]),
      _vm._v(" "),
      _vm.meta
        ? _c("p", { staticClass: "article-meta" }, [_vm._v(_vm._s(_vm.meta))])
        : _vm._e(),
      _vm._v(" "),
      _vm.author || _vm.date || _vm.category
        ? _c("p", { staticClass: "article-meta" }, [
            _vm.author && _vm.authorLink
              ? _c("span", [
                  _vm._v("Posted by "),
                  _c("a", { attrs: { href: _vm.authorLink } }, [
                    _vm._v(_vm._s(_vm.author))
                  ])
                ])
              : _vm._e(),
            _vm._v(".\n      "),
            _vm.date
              ? _c("span", [_vm._v("Published " + _vm._s(_vm.date))])
              : _vm._e(),
            _vm._v(".\n      "),
            _vm.category && _vm.categoryLink
              ? _c("span", [
                  _vm._v("In category "),
                  _c("a", { attrs: { href: _vm.categoryLink } }, [
                    _vm._v(_vm._s(_vm.category))
                  ])
                ])
              : _vm._e()
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.lead
        ? _c("p", { staticClass: "text-lead" }, [_vm._v(_vm._s(_vm.lead))])
        : _vm._e(),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
};
var __vue_staticRenderFns__$7 = [];
__vue_render__$7._withStripped = true;

  /* style */
  const __vue_inject_styles__$7 = function (inject) {
    if (!inject) return
    inject("data-v-15340129_0", { source: "\n@import url('../../../node_modules/papercss/dist/components/article.css');\n", map: {"version":3,"sources":["/Users/totominc/Desktop/Git/vuejs-papercss/src/components/article/article.vue"],"names":[],"mappings":";AAsEA,0EAAA","file":"article.vue","sourcesContent":["<template>\n  <article class=\"article\">\n    <h1 class=\"article-title\">\n      <a :href=\"'#' + titleLink\">{{title}}</a>\n    </h1>\n\n    <p v-if=\"meta\" class=\"article-meta\">{{meta}}</p>\n    <p v-if=\"author || date || category\" class=\"article-meta\">\n      <span v-if=\"author && authorLink\">Posted by <a :href=\"authorLink\">{{author}}</a></span>.\n      <span v-if=\"date\">Published {{date}}</span>.\n      <span v-if=\"category && categoryLink\">In category <a :href=\"categoryLink\">{{category}}</a></span>\n    </p>\n    <p v-if=\"lead\" class=\"text-lead\">{{lead}}</p>\n\n    <slot />\n  </article>\n</template>\n\n<script>\nexport default {\n  props: {\n    title: {\n      type: String,\n      default: '',\n    },\n\n    meta: {\n      type: String,\n      default: '',\n    },\n\n    lead: {\n      type: String,\n      default: '',\n    },\n\n    titleLink: {\n      type: String,\n      default: '',\n    },\n\n    author: {\n      type: String,\n      default: '',\n    },\n\n    authorLink: {\n      type: String,\n      default: '',\n    },\n\n    date: {\n      type: String,\n      default: '',\n    },\n\n    category: {\n      type: String,\n      default: '',\n    },\n\n    categoryLink: {\n      type: String,\n      default: '',\n    },\n  },\n}\n</script>\n\n<style scoped lang=\"css\">\n@import url('../../../node_modules/papercss/dist/components/article.css');\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$7 = "data-v-15340129";
  /* module identifier */
  const __vue_module_identifier__$7 = undefined;
  /* functional template */
  const __vue_is_functional_template__$7 = false;
  /* component normalizer */
  function __vue_normalize__$7(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/totominc/Desktop/Git/vuejs-papercss/src/components/article/article.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$7() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$7.styles || (__vue_create_injector__$7.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var article = __vue_normalize__$7(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    __vue_create_injector__$7,
    undefined
  );

//
//
//
//
//
//
var script$8 = {
  name: "pre"
};

/* script */
            const __vue_script__$8 = script$8;
            
/* template */
var __vue_render__$8 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("pre", [_vm._v("    "), _vm._t("default"), _vm._v("\n  ")], 2)
};
var __vue_staticRenderFns__$8 = [];
__vue_render__$8._withStripped = true;

  /* style */
  const __vue_inject_styles__$8 = function (inject) {
    if (!inject) return
    inject("data-v-02b2c7aa_0", { source: "\n@import url('../../../node_modules/papercss/dist/components/code.css');\n", map: {"version":3,"sources":["/Users/totominc/Desktop/Git/vuejs-papercss/src/components/pre/pre.vue"],"names":[],"mappings":";AAaA,uEAAA","file":"pre.vue","sourcesContent":["<template>\n  <pre>\n    <slot></slot>\n  </pre>\n</template>\n\n<script>\n  export default {\n    name: \"pre\"\n  }\n</script>\n\n<style scoped lang=\"css\">\n  @import url('../../../node_modules/papercss/dist/components/code.css');\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$8 = "data-v-02b2c7aa";
  /* module identifier */
  const __vue_module_identifier__$8 = undefined;
  /* functional template */
  const __vue_is_functional_template__$8 = false;
  /* component normalizer */
  function __vue_normalize__$8(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/totominc/Desktop/Git/vuejs-papercss/src/components/pre/pre.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$8() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$8.styles || (__vue_create_injector__$8.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var pre = __vue_normalize__$8(
    { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
    __vue_inject_styles__$8,
    __vue_script__$8,
    __vue_scope_id__$8,
    __vue_is_functional_template__$8,
    __vue_module_identifier__$8,
    __vue_create_injector__$8,
    undefined
  );

//
//
//
//
//
//
var script$9 = {
  name: "table",
  props: {
    alternating: {
      type: Boolean,
      default: false
    },
    hover: {
      type: Boolean,
      default: false
    }
  }
};

/* script */
            const __vue_script__$9 = script$9;
            
/* template */
var __vue_render__$9 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "table",
    {
      class: { "table-alternating": _vm.alternating, "table-hover": _vm.hover }
    },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$9 = [];
__vue_render__$9._withStripped = true;

  /* style */
  const __vue_inject_styles__$9 = function (inject) {
    if (!inject) return
    inject("data-v-3a3941d4_0", { source: "\n@import url('../../../node_modules/papercss/dist/components/tables.css');\n", map: {"version":3,"sources":["/Users/totominc/Desktop/Git/vuejs-papercss/src/components/table/table.vue"],"names":[],"mappings":";AAuBA,yEAAA","file":"table.vue","sourcesContent":["<template>\n  <table :class=\"{ 'table-alternating': alternating, 'table-hover': hover }\">\n    <slot></slot>\n  </table>\n</template>\n\n<script>\n  export default {\n    name: \"table\",\n    props: {\n      alternating: {\n        type: Boolean,\n        default: false\n      },\n      hover: {\n        type: Boolean,\n        default: false\n      }\n    }\n  }\n</script>\n\n<style lang=\"css\" scoped>\n  @import url('../../../node_modules/papercss/dist/components/tables.css');\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$9 = "data-v-3a3941d4";
  /* module identifier */
  const __vue_module_identifier__$9 = undefined;
  /* functional template */
  const __vue_is_functional_template__$9 = false;
  /* component normalizer */
  function __vue_normalize__$9(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/totominc/Desktop/Git/vuejs-papercss/src/components/table/table.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$9() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$9.styles || (__vue_create_injector__$9.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var table = __vue_normalize__$9(
    { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
    __vue_inject_styles__$9,
    __vue_script__$9,
    __vue_scope_id__$9,
    __vue_is_functional_template__$9,
    __vue_module_identifier__$9,
    __vue_create_injector__$9,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script$a = {
  name: "popover",
  props: {
    position: {
      type: String,
      default: 'top'
    },
    text: {
      type: String,
      default: ''
    }
  }
};

/* script */
            const __vue_script__$a = script$a;
            
/* template */
var __vue_render__$a = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticStyle: { display: "inline-block" } }, [
    _vm.position == "top"
      ? _c(
          "div",
          {
            staticStyle: { margin: "0", padding: "0" },
            attrs: { "popover-top": _vm.text }
          },
          [_vm._t("default")],
          2
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.position == "left"
      ? _c(
          "div",
          {
            staticStyle: { margin: "0", padding: "0" },
            attrs: { "popover-left": _vm.text }
          },
          [_vm._t("default")],
          2
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.position == "right"
      ? _c(
          "div",
          {
            staticStyle: { margin: "0", padding: "0" },
            attrs: { "popover-right": _vm.text }
          },
          [_vm._t("default")],
          2
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.position == "bottom"
      ? _c(
          "div",
          {
            staticStyle: { margin: "0", padding: "0" },
            attrs: { "popover-bottom": _vm.text }
          },
          [_vm._t("default")],
          2
        )
      : _vm._e()
  ])
};
var __vue_staticRenderFns__$a = [];
__vue_render__$a._withStripped = true;

  /* style */
  const __vue_inject_styles__$a = function (inject) {
    if (!inject) return
    inject("data-v-e4e5c58e_0", { source: "\n@import url('../../../node_modules/papercss/dist/components/popovers.css');\n", map: {"version":3,"sources":["/Users/totominc/Desktop/Git/vuejs-papercss/src/components/popover/popover.vue"],"names":[],"mappings":";AAqCA,2EAAA","file":"popover.vue","sourcesContent":["<template>\n  <div style=\"display: inline-block\">\n    <div v-if=\"position == 'top'\" :popover-top=\"text\" style=\"margin: 0; padding: 0\">\n      <slot></slot>\n    </div>\n\n    <div v-if=\"position == 'left'\" :popover-left=\"text\" style=\"margin: 0; padding: 0\">\n      <slot></slot>\n    </div>\n\n    <div v-if=\"position == 'right'\" :popover-right=\"text\" style=\"margin: 0; padding: 0\">\n      <slot></slot>\n    </div>\n\n    <div v-if=\"position == 'bottom'\" :popover-bottom=\"text\" style=\"margin: 0; padding: 0\">\n      <slot></slot>\n    </div>\n  </div>\n</template>\n\n<script>\n  export default {\n    name: \"popover\",\n    props: {\n      position: {\n        type: String,\n        default: 'top'\n      },\n      text: {\n        type: String,\n        default: ''\n      }\n    }\n  }\n</script>\n\n<style lang=\"css\" scoped>\n  @import url('../../../node_modules/papercss/dist/components/popovers.css');\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$a = "data-v-e4e5c58e";
  /* module identifier */
  const __vue_module_identifier__$a = undefined;
  /* functional template */
  const __vue_is_functional_template__$a = false;
  /* component normalizer */
  function __vue_normalize__$a(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/totominc/Desktop/Git/vuejs-papercss/src/components/popover/popover.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__$a() {
    const head = document.head || document.getElementsByTagName('head')[0];
    const styles = __vue_create_injector__$a.styles || (__vue_create_injector__$a.styles = {});
    const isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return // SSR styles are present.

      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        let code = css.source;
        let index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          const el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) el.setAttribute('media', css.media);
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          const textNode = document.createTextNode(code);
          const nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);
          else style.element.appendChild(textNode);
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var popover = __vue_normalize__$a(
    { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
    __vue_inject_styles__$a,
    __vue_script__$a,
    __vue_scope_id__$a,
    __vue_is_functional_template__$a,
    __vue_module_identifier__$a,
    __vue_create_injector__$a,
    undefined
  );

export { container, row, col, button, card, badge, alert, article, pre, table, popover };
