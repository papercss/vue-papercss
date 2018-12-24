/**
 * Install the plugin if `window.Vue` is available.
 *
 * @param {object} VuePlugin Vue-plugin object.
 */
function vueUse(VuePlugin) {
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VuePlugin);
  }
}
/**
 * Register a component as a plugin being loaded, return true if the component
 * is already registered.
 *
 * @param {object} Vue Vue constructor
 * @param {string} name name of the component
 * @param {object} definition component definition
 */

function registerComponent(Vue, name, definition) {
  Vue._papercss_vue_components = Vue._papercss_vue_components || {};
  var loaded = Vue._papercss_vue_components[name];

  if (!loaded && name && definition) {
    Vue._papercss_vue_components[name] = true;
    Vue.component(name, definition);
  }

  return loaded;
}

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
var script = {
  data: function data() {
    return {
      displayed: true
    };
  },
  props: {
    color: {
      type: String,
      default: '',
      required: false
    },
    dismissible: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  methods: {
    dismiss: function dismiss() {
      this.$el.className += ' closed';
      this.displayed = false;
    },
    show: function show() {
      if (this.$el.classList.contains('closed')) {
        this.$el.classList.remove('closed');
        this.displayed = true;
      }
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
    {
      class: ((_obj = {
        alert: true,
        "alert-primary": !_vm.color
      }),
      (_obj["alert-" + _vm.color] = _vm.color),
      _obj)
    },
    [
      _vm._t("default"),
      _vm._v(" "),
      _vm.dismissible
        ? _c(
            "span",
            {
              staticClass: "btn-close",
              on: {
                click: function($event) {
                  _vm.dismiss();
                }
              }
            },
            [_vm._v("X")]
          )
        : _vm._e()
    ],
    2
  )
  var _obj;
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-0fd60e3c_0", { source: "\n.alert[data-v-0fd60e3c] {\n  transition: all .25s ease-out;\n}\n.alert.closed[data-v-0fd60e3c] {\n  opacity: 0;\n  max-height: 0;\n  margin: 0;\n  padding-bottom: 0;\n  padding-top: 0;\n  border-width: 0;\n}\n.alert .btn-close[data-v-0fd60e3c] {\n  float: right;\n}\n", map: {"version":3,"sources":["/Users/totominc/Desktop/Git/vuejs-papercss/src/components/alert/alert.vue"],"names":[],"mappings":";AAmDA;EACA,8BAAA;CACA;AAEA;EACA,WAAA;EACA,cAAA;EACA,UAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;CACA;AAEA;EACA,aAAA;CACA","file":"alert.vue","sourcesContent":["<template>\n  <div :class=\"{\n    'alert': true,\n    'alert-primary': !color,\n    ['alert-' + color]: color,\n  }\">\n    <slot />\n\n    <span v-if=\"dismissible\" class=\"btn-close\" @click=\"dismiss()\">X</span>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      displayed: true,\n    };\n  },\n\n  props: {\n    color: {\n      type: String,\n      default: '',\n      required: false,\n    },\n\n    dismissible: {\n      type: Boolean,\n      default: false,\n      required: false,\n    },\n  },\n\n  methods: {\n    dismiss() {\n      this.$el.className += ' closed';\n      this.displayed = false;\n    },\n\n    show() {\n      if (this.$el.classList.contains('closed')) {\n        this.$el.classList.remove('closed');\n        this.displayed = true;\n      }\n    },\n  },\n}\n</script>\n\n<style scoped>\n.alert {\n  transition: all .25s ease-out;\n}\n\n.alert.closed {\n  opacity: 0;\n  max-height: 0;\n  margin: 0;\n  padding-bottom: 0;\n  padding-top: 0;\n  border-width: 0;\n}\n\n.alert .btn-close {\n  float: right;\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-0fd60e3c";
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
  

  
  var alert = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  );

var AlertPlugin = {
  install: function install(Vue) {
    registerComponent(Vue, 'PAlert', alert);
  }
};
vueUse(AlertPlugin);

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
//
//
//
//
//
//
//
//
var script$1 = {
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    meta: {
      type: String,
      default: '',
      required: false
    },
    lead: {
      type: String,
      default: '',
      required: true
    },
    titleLink: {
      type: String,
      default: '',
      required: true
    },
    author: {
      type: String,
      default: '',
      required: false
    },
    authorLink: {
      type: String,
      default: '',
      required: false
    },
    date: {
      type: String,
      default: '',
      required: false
    },
    category: {
      type: String,
      default: '',
      required: false
    },
    categoryLink: {
      type: String,
      default: '',
      required: false
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
    "article",
    { staticClass: "article" },
    [
      _c("h1", { staticClass: "article-title" }, [
        _c("a", { attrs: { href: _vm.titleLink, target: "_blank" } }, [
          _vm._v(_vm._s(_vm.title))
        ])
      ]),
      _vm._v(" "),
      _vm.meta
        ? _c("p", { staticClass: "article-meta" }, [_vm._v(_vm._s(_vm.meta))])
        : _vm._e(),
      _vm._v(" "),
      _vm.author && _vm.authorLink
        ? _c("p", { staticClass: "article-meta" }, [
            _vm.author && _vm.authorLink && !_vm.date && !_vm.category
              ? _c("span", [
                  _vm._v("\n      Posted by "),
                  _c("a", { attrs: { href: _vm.authorLink } }, [
                    _vm._v(_vm._s(_vm.author))
                  ]),
                  _vm._v(".\n    ")
                ])
              : _vm.author && _vm.authorLink && _vm.date && !_vm.category
                ? _c("span", [
                    _vm._v("\n      Posted by "),
                    _c("a", { attrs: { href: _vm.authorLink } }, [
                      _vm._v(_vm._s(_vm.author))
                    ]),
                    _vm._v(" on " + _vm._s(_vm.date) + ".\n    ")
                  ])
                : _vm.author &&
                  _vm.authorLink &&
                  _vm.date &&
                  _vm.category &&
                  _vm.categoryLink
                  ? _c("span", [
                      _vm._v("\n      Posted by "),
                      _c("a", { attrs: { href: _vm.authorLink } }, [
                        _vm._v(_vm._s(_vm.author))
                      ]),
                      _vm._v(" on " + _vm._s(_vm.date) + " in category "),
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
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-f87cf2b8_0", { source: "\n.article .article-meta span[data-v-f87cf2b8] {\n  margin-right: 6px;\n}\n", map: {"version":3,"sources":["/Users/totominc/Desktop/Git/vuejs-papercss/src/components/article/article.vue"],"names":[],"mappings":";AAyFA;EACA,kBAAA;CACA","file":"article.vue","sourcesContent":["<template>\n  <article class=\"article\">\n    <h1 class=\"article-title\">\n      <a :href=\"titleLink\" target=\"_blank\">{{title}}</a>\n    </h1>\n\n    <p v-if=\"meta\" class=\"article-meta\">{{meta}}</p>\n\n    <p v-if=\"author && authorLink\" class=\"article-meta\">\n      <span v-if=\"author && authorLink && !date && !category\">\n        Posted by <a :href=\"authorLink\">{{author}}</a>.\n      </span>\n\n      <span v-else-if=\"author && authorLink && date && !category\">\n        Posted by <a :href=\"authorLink\">{{author}}</a> on {{date}}.\n      </span>\n\n      <span v-else-if=\"author && authorLink && date && category && categoryLink\">\n        Posted by <a :href=\"authorLink\">{{author}}</a> on {{date}} in category <a :href=\"categoryLink\">{{category}}</a>\n      </span>\n    </p>\n\n    <p v-if=\"lead\" class=\"text-lead\">{{lead}}</p>\n\n    <slot />\n  </article>\n</template>\n\n<script>\nexport default {\n  props: {\n    title: {\n      type: String,\n      default: '',\n      required: true,\n    },\n\n    meta: {\n      type: String,\n      default: '',\n      required: false,\n    },\n\n    lead: {\n      type: String,\n      default: '',\n      required: true,\n    },\n\n    titleLink: {\n      type: String,\n      default: '',\n      required: true,\n    },\n\n    author: {\n      type: String,\n      default: '',\n      required: false,\n    },\n\n    authorLink: {\n      type: String,\n      default: '',\n      required: false,\n    },\n\n    date: {\n      type: String,\n      default: '',\n      required: false,\n    },\n\n    category: {\n      type: String,\n      default: '',\n      required: false,\n    },\n\n    categoryLink: {\n      type: String,\n      default: '',\n      required: false,\n    },\n  },\n}\n</script>\n\n<style scoped>\n.article .article-meta span {\n  margin-right: 6px;\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = "data-v-f87cf2b8";
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
  

  
  var article = __vue_normalize__$1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    __vue_create_injector__$1,
    undefined
  );

var ArticlePlugin = {
  install: function install(Vue) {
    registerComponent(Vue, 'PArticle', article);
  }
};
vueUse(ArticlePlugin);

//
//
//
//
//
//
var script$2 = {
  name: 'PBadge',
  props: {
    color: {
      type: String,
      default: '',
      required: false
    }
  }
};

/* script */
            const __vue_script__$2 = script$2;
            
/* template */
var __vue_render__$2 = function() {
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
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
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
    component.__file = "/Users/totominc/Desktop/Git/vuejs-papercss/src/components/badge/badge.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var badge = __vue_normalize__$2(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );

var BadgePlugin = {
  install: function install(Vue) {
    registerComponent(Vue, 'PBadge', badge);
  }
};
vueUse(BadgePlugin);

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
var script$3 = {
  props: {
    block: {
      type: Boolean,
      default: false,
      required: false
    },
    small: {
      type: Boolean,
      default: false,
      required: false
    },
    large: {
      type: Boolean,
      default: false,
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    color: {
      type: String,
      default: '',
      required: false
    },
    href: {
      type: String,
      default: '',
      required: false
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
        disabled: _vm.disabled,
        "btn-primary": !_vm.color
      }),
      (_obj["btn-" + _vm.color] = _vm.color),
      _obj),
      attrs: { disabled: _vm.disabled }
    },
    [
      _vm.href
        ? _c("a", { attrs: { href: _vm.href } }, [_vm._t("default")], 2)
        : _c("div", [_vm._t("default")], 2)
    ]
  )
  var _obj;
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$3 = function (inject) {
    if (!inject) return
    inject("data-v-44fbd948_0", { source: "\n.paper-btn a[data-v-44fbd948] {\n  background-image: none;\n}\n", map: {"version":3,"sources":["/Users/totominc/Desktop/Git/vuejs-papercss/src/components/button/button.vue"],"names":[],"mappings":";AA+DA;EACA,uBAAA;CACA","file":"button.vue","sourcesContent":["<template>\n  <div :class=\"{\n    'paper-btn': true,\n    'btn-block': block,\n    'btn-small': small,\n    'btn-large': large,\n    'disabled': disabled,\n    'btn-primary': !color,\n    ['btn-' + color]: color,\n  }\" :disabled=\"disabled\">\n    <a v-if=\"href\" :href=\"href\">\n      <slot />\n    </a>\n\n    <div v-else>\n      <slot />\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n\tprops: {\n\t\tblock: {\n\t\t\ttype: Boolean,\n      default: false,\n      required: false,\n\t\t},\n\n\t\tsmall: {\n\t\t\ttype: Boolean,\n      default: false,\n      required: false,\n\t\t},\n\n    large: {\n      type: Boolean,\n      default: false,\n      required: false,\n    },\n\n\t\tdisabled: {\n\t\t\ttype: Boolean,\n      default: false,\n      required: false,\n\t\t},\n\n    color: {\n\t\t  type: String,\n      default: '',\n      required: false,\n    },\n\n\t\thref: {\n\t\t\ttype: String,\n      default: '',\n      required: false,\n\t\t}\n\t}\n}\n</script>\n\n<style scoped>\n.paper-btn a {\n  background-image: none;\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$3 = "data-v-44fbd948";
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
  

  
  var button = __vue_normalize__$3(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    __vue_create_injector__$2,
    undefined
  );

var ButtonPlugin = {
  install: function install(Vue) {
    registerComponent(Vue, 'PButton', button);
  }
};
vueUse(ButtonPlugin);

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
      default: '',
      required: false
    },
    subtitle: {
      type: String,
      default: '',
      required: false
    },
    text: {
      type: String,
      default: '',
      required: false
    },
    imgSrc: {
      type: String,
      default: '',
      required: false
    },
    imgAlt: {
      type: String,
      default: '',
      required: false
    },
    imgBottom: {
      type: Boolean,
      default: false,
      required: false
    },
    header: {
      type: String,
      default: '',
      required: false
    },
    footer: {
      type: String,
      default: '',
      required: false
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
  const __vue_inject_styles__$4 = undefined;
  /* scoped */
  const __vue_scope_id__$4 = undefined;
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

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var card = __vue_normalize__$4(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    undefined,
    undefined
  );

var CardPlugin = {
  install: function install(Vue) {
    registerComponent(Vue, 'PCard', card);
  }
};
vueUse(CardPlugin);

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
var script$5 = {
  props: {
    col: {
      type: String,
      default: null,
      required: false
    },
    lg: {
      type: String,
      default: null,
      required: false
    },
    md: {
      type: String,
      default: null,
      required: false
    },
    sm: {
      type: String,
      default: null,
      required: false
    },
    fill: {
      type: Boolean,
      default: false,
      required: false
    },
    bottom: {
      type: Boolean,
      default: false,
      required: false
    },
    middle: {
      type: Boolean,
      default: false,
      required: false
    },
    top: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  computed: {}
};

/* script */
            const __vue_script__$5 = script$5;
            
/* template */
var __vue_render__$5 = function() {
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
var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;

  /* style */
  const __vue_inject_styles__$5 = undefined;
  /* scoped */
  const __vue_scope_id__$5 = undefined;
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
    component.__file = "/Users/totominc/Desktop/Git/vuejs-papercss/src/components/col/col.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var col = __vue_normalize__$5(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    undefined,
    undefined
  );

var ColPlugin = {
  install: function install(Vue) {
    registerComponent(Vue, 'PCol', col);
  }
};
vueUse(ColPlugin);

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
var script$6 = {
  data: function data() {
    return {
      display: this.show
    };
  },
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    show: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  methods: {
    toggle: function toggle() {
      this.display = !this.display;
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
  return _c("div", { staticClass: "collapsible" }, [
    _c(
      "span",
      {
        staticClass: "collapsible-title",
        on: {
          click: function($event) {
            _vm.toggle();
          }
        }
      },
      [_vm._v(_vm._s(_vm.title))]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "collapsible-body", class: { hide: !_vm.display } },
      [_vm._t("default")],
      2
    )
  ])
};
var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;

  /* style */
  const __vue_inject_styles__$6 = function (inject) {
    if (!inject) return
    inject("data-v-61628a27_0", { source: "\n.collapsible .collapsible-title[data-v-61628a27] {\n  border-bottom: 1px solid #e6e7e9;\n  color: #41403e;\n  display: inline-block;\n  font-weight: 600;\n  margin: 0 0 -1px;\n  padding: .75rem;\n  text-align: center;\n  cursor: pointer;\n  user-select: none;\n}\n.collapsible .collapsible-body[data-v-61628a27] {\n  opacity: 1;\n  max-height: 960px;\n}\n.collapsible .collapsible-body.hide[data-v-61628a27] {\n  max-height: 0;\n  opacity: 0;\n}\n", map: {"version":3,"sources":["/Users/totominc/Desktop/Git/vuejs-papercss/src/components/collapsible/collapsible.vue"],"names":[],"mappings":";AAyCA;EACA,iCAAA;EACA,eAAA;EACA,sBAAA;EACA,iBAAA;EACA,iBAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;EACA,kBAAA;CACA;AAEA;EACA,WAAA;EACA,kBAAA;CACA;AAEA;EACA,cAAA;EACA,WAAA;CACA","file":"collapsible.vue","sourcesContent":["<template>\n  <div class=\"collapsible\">\n    <span class=\"collapsible-title\" @click=\"toggle()\">{{title}}</span>\n\n    <div class=\"collapsible-body\" :class=\"{ 'hide': !display }\">\n      <slot />\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      display: this.show,\n    };\n  },\n\n  props: {\n    title: {\n      type: String,\n      default: '',\n      required: true,\n    },\n\n    show: {\n      type: Boolean,\n      default: false,\n      required: false,\n    },\n  },\n\n  methods: {\n    toggle() {\n      this.display = !this.display;\n    },\n  },\n}\n</script>\n\n<style scoped>\n.collapsible .collapsible-title {\n  border-bottom: 1px solid #e6e7e9;\n  color: #41403e;\n  display: inline-block;\n  font-weight: 600;\n  margin: 0 0 -1px;\n  padding: .75rem;\n  text-align: center;\n  cursor: pointer;\n  user-select: none;\n}\n\n.collapsible .collapsible-body {\n  opacity: 1;\n  max-height: 960px;\n}\n\n.collapsible .collapsible-body.hide {\n  max-height: 0;\n  opacity: 0;\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$6 = "data-v-61628a27";
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
    component.__file = "/Users/totominc/Desktop/Git/vuejs-papercss/src/components/collapsible/collapsible.vue";

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
  

  
  var collapsible = __vue_normalize__$6(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    __vue_create_injector__$3,
    undefined
  );

var CollabsiblePlugin = {
  install: function install(Vue) {
    registerComponent(Vue, 'PCollapsible', collapsible);
  }
};
vueUse(CollabsiblePlugin);

//
//
//
//
//
//
var script$7 = {
  props: {
    fluid: {
      type: Boolean,
      default: false,
      required: false
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
    "div",
    { class: { container: true, fluid: _vm.fluid } },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$7 = [];
__vue_render__$7._withStripped = true;

  /* style */
  const __vue_inject_styles__$7 = undefined;
  /* scoped */
  const __vue_scope_id__$7 = undefined;
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
    component.__file = "/Users/totominc/Desktop/Git/vuejs-papercss/src/components/container/container.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var container = __vue_normalize__$7(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    undefined,
    undefined
  );

var ContainerPlugin = {
  install: function install(Vue) {
    registerComponent(Vue, 'PContainer', container);
  }
};
vueUse(ContainerPlugin);

//
//
//
//
//
//
var script$8 = {};

/* script */
            const __vue_script__$8 = script$8;
            
/* template */
var __vue_render__$8 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "form-group" }, [_vm._t("default")], 2)
};
var __vue_staticRenderFns__$8 = [];
__vue_render__$8._withStripped = true;

  /* style */
  const __vue_inject_styles__$8 = undefined;
  /* scoped */
  const __vue_scope_id__$8 = undefined;
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
    component.__file = "/Users/totominc/Desktop/Git/vuejs-papercss/src/components/form-group/form-group.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var formGroup = __vue_normalize__$8(
    { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
    __vue_inject_styles__$8,
    __vue_script__$8,
    __vue_scope_id__$8,
    __vue_is_functional_template__$8,
    __vue_module_identifier__$8,
    undefined,
    undefined
  );

var FormGroupPlugin = {
  install: function install(Vue) {
    registerComponent(Vue, 'PFormGroup', formGroup);
  }
};
vueUse(FormGroupPlugin);

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
var script$9 = {
  props: {
    width: {
      type: Number,
      value: 0,
      required: true
    },
    color: {
      type: String,
      value: '',
      required: false
    },
    label: {
      type: String | undefined,
      value: undefined,
      required: false
    },
    striped: {
      type: Boolean,
      value: false,
      required: false
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
  return _c("div", { staticClass: "progress" }, [
    _c(
      "div",
      {
        staticClass: "bar",
        class: {
          success: _vm.color === "success",
          warning: _vm.color === "warning",
          danger: _vm.color === "danger",
          muted: _vm.color === "muted",
          striped: _vm.striped
        },
        style: { width: _vm.width + "%" }
      },
      [_vm.label ? _c("span", [_vm._v(_vm._s(_vm.label))]) : _vm._e()]
    )
  ])
};
var __vue_staticRenderFns__$9 = [];
__vue_render__$9._withStripped = true;

  /* style */
  const __vue_inject_styles__$9 = undefined;
  /* scoped */
  const __vue_scope_id__$9 = undefined;
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
    component.__file = "/Users/totominc/Desktop/Git/vuejs-papercss/src/components/progress/progress.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var progress = __vue_normalize__$9(
    { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
    __vue_inject_styles__$9,
    __vue_script__$9,
    __vue_scope_id__$9,
    __vue_is_functional_template__$9,
    __vue_module_identifier__$9,
    undefined,
    undefined
  );

var ProgressPlugin = {
  install: function install(Vue) {
    registerComponent(Vue, 'PProgress', progress);
  }
};
vueUse(ProgressPlugin);

//
//
//
//
//
//
var script$a = {
  props: {
    right: {
      type: Boolean,
      default: false,
      required: false
    },
    center: {
      type: Boolean,
      default: false,
      required: false
    },
    edges: {
      type: Boolean,
      default: false,
      required: false
    },
    spaces: {
      type: Boolean,
      default: false,
      required: false
    },
    top: {
      type: Boolean,
      default: false,
      required: false
    },
    middle: {
      type: Boolean,
      default: false,
      required: false
    },
    bottom: {
      type: Boolean,
      default: false,
      required: false
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
var __vue_staticRenderFns__$a = [];
__vue_render__$a._withStripped = true;

  /* style */
  const __vue_inject_styles__$a = undefined;
  /* scoped */
  const __vue_scope_id__$a = undefined;
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
    component.__file = "/Users/totominc/Desktop/Git/vuejs-papercss/src/components/row/row.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var row = __vue_normalize__$a(
    { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
    __vue_inject_styles__$a,
    __vue_script__$a,
    __vue_scope_id__$a,
    __vue_is_functional_template__$a,
    __vue_module_identifier__$a,
    undefined,
    undefined
  );

var RowPlugin = {
  install: function install(Vue) {
    registerComponent(Vue, 'PRow', row);
  }
};
vueUse(RowPlugin);

//
//
//
//
//
//
var script$b = {
  name: 'table',
  props: {
    alternating: {
      type: Boolean,
      default: false,
      required: false
    },
    hover: {
      type: Boolean,
      default: false,
      required: false
    }
  }
};

/* script */
            const __vue_script__$b = script$b;
            
/* template */
var __vue_render__$b = function() {
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
var __vue_staticRenderFns__$b = [];
__vue_render__$b._withStripped = true;

  /* style */
  const __vue_inject_styles__$b = undefined;
  /* scoped */
  const __vue_scope_id__$b = undefined;
  /* module identifier */
  const __vue_module_identifier__$b = undefined;
  /* functional template */
  const __vue_is_functional_template__$b = false;
  /* component normalizer */
  function __vue_normalize__$b(
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

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var table = __vue_normalize__$b(
    { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
    __vue_inject_styles__$b,
    __vue_script__$b,
    __vue_scope_id__$b,
    __vue_is_functional_template__$b,
    __vue_module_identifier__$b,
    undefined,
    undefined
  );

var TablePlugin = {
  install: function install(Vue) {
    registerComponent(Vue, 'PTable', table);
  }
};
vueUse(TablePlugin);

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
var script$c = {
  beforeMount: function beforeMount() {
    var _this = this;

    // Find only `PTab` components and store the `VNode` and tab-name.
    this.$slots['default'].forEach(function (vnode) {
      if (vnode.componentOptions.tag === 'p-tab') {
        var tabName = vnode.data.attrs['title'];

        _this.tabNodes.push(vnode);

        _this.tabNames.push(tabName);
      }
    });
  },
  mounted: function mounted() {
    // Automatically show the first tab if it is present
    if (this.tabNodes.length > 0 && this.tabNodes[0]) {
      this.tabNodes[0].componentInstance.showTab();
    }
  },
  data: function data() {
    return {
      selectedTabIndex: 0,

      /** @type Vue.VNode[] */
      tabNodes: [],

      /** @type String[] */
      tabNames: []
    };
  },
  methods: {
    /**
     * Change the tab by calling the `hideTab` and `showTab` method on the
     * `PTab` component.
     *
     * @param {number} index index of the new tab to display
     */
    changeTab: function changeTab(index) {
      var currentTabVnode = this.tabNodes[this.selectedTabIndex];
      var newTabVnode = this.tabNodes[index];
      currentTabVnode.componentInstance.hideTab();
      newTabVnode.componentInstance.showTab();
      this.selectedTabIndex = index;
    }
  }
};

/* script */
            const __vue_script__$c = script$c;
            
/* template */
var __vue_render__$c = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "tabs" },
    [
      _c(
        "ul",
        _vm._l(_vm.tabNodes, function(tabNode, index) {
          return _c(
            "li",
            {
              key: "tab-" + index,
              on: {
                click: function($event) {
                  _vm.changeTab(index);
                }
              }
            },
            [
              _c(
                "a",
                {
                  class: { active: _vm.selectedTabIndex === index },
                  attrs: { href: "#" }
                },
                [_vm._v(_vm._s(_vm.tabNames[index]))]
              )
            ]
          )
        }),
        0
      ),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
};
var __vue_staticRenderFns__$c = [];
__vue_render__$c._withStripped = true;

  /* style */
  const __vue_inject_styles__$c = function (inject) {
    if (!inject) return
    inject("data-v-ecbafc9e_0", { source: "\n.tabs ul[data-v-ecbafc9e] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  list-style-type: none;\n  margin: 0 0 8px 0;\n  padding: 0;\n  overflow: hidden;\n}\n.tabs li[data-v-ecbafc9e] {\n  float: left;\n  text-indent: unset;\n}\n.tabs li[data-v-ecbafc9e]::before {\n  content: none;\n}\n.tabs li a[data-v-ecbafc9e] {\n  display: block;\n  padding: 14px 16px;\n  text-align: center;\n  color: #c1c0bd;\n  font-weight: 600;\n  text-decoration: none;\n  background-image: none;\n}\n.tabs li a.active[data-v-ecbafc9e] {\n  color: #41403e;\n  border-bottom: solid 3px #0071de;\n}\n.tabs li a[data-v-ecbafc9e]:not(.active):hover {\n  color: #868e96;\n}\n", map: {"version":3,"sources":["/Users/totominc/Desktop/Git/vuejs-papercss/src/components/tabs/tabs.vue"],"names":[],"mappings":";AAgEA;EACA,cAAA;EACA,oBAAA;EACA,8BAAA;EACA,sBAAA;EACA,kBAAA;EACA,WAAA;EACA,iBAAA;CACA;AAEA;EACA,YAAA;EACA,mBAAA;CACA;AAEA;EACA,cAAA;CACA;AAEA;EACA,eAAA;EACA,mBAAA;EACA,mBAAA;EACA,eAAA;EACA,iBAAA;EACA,sBAAA;EACA,uBAAA;CACA;AAEA;EACA,eAAA;EACA,iCAAA;CACA;AAEA;EACA,eAAA;CACA","file":"tabs.vue","sourcesContent":["<template>\n  <div class=\"tabs\">\n    <ul>\n      <li v-for=\"(tabNode, index) in tabNodes\" :key=\"'tab-' + index\" @click=\"changeTab(index)\">\n        <a href=\"#\" :class=\"{ 'active': selectedTabIndex === index }\">{{tabNames[index]}}</a>\n      </li>\n    </ul>\n\n    <slot />\n  </div>\n</template>\n\n<script>\nexport default {\n  beforeMount() {\n    // Find only `PTab` components and store the `VNode` and tab-name.\n    this.$slots['default'].forEach((vnode) => {\n      if (vnode.componentOptions.tag === 'p-tab') {\n        const tabName = vnode.data.attrs['title'];\n\n        this.tabNodes.push(vnode);\n        this.tabNames.push(tabName);\n      }\n    });\n  },\n\n  mounted() {\n    // Automatically show the first tab if it is present\n    if (this.tabNodes.length > 0 && this.tabNodes[0]) {\n      this.tabNodes[0].componentInstance.showTab();\n    }\n  },\n\n  data() {\n    return {\n      selectedTabIndex: 0,\n      /** @type Vue.VNode[] */\n      tabNodes: [],\n      /** @type String[] */\n      tabNames: [],\n    };\n  },\n\n  methods: {\n    /**\n     * Change the tab by calling the `hideTab` and `showTab` method on the\n     * `PTab` component.\n     *\n     * @param {number} index index of the new tab to display\n     */\n    changeTab(index) {\n      const currentTabVnode = this.tabNodes[this.selectedTabIndex];\n      const newTabVnode = this.tabNodes[index];\n\n      currentTabVnode.componentInstance.hideTab();\n      newTabVnode.componentInstance.showTab();\n\n      this.selectedTabIndex = index;\n    },\n  },\n}\n</script>\n\n<style scoped>\n.tabs ul {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  list-style-type: none;\n  margin: 0 0 8px 0;\n  padding: 0;\n  overflow: hidden;\n}\n\n.tabs li {\n  float: left;\n  text-indent: unset;\n}\n\n.tabs li::before {\n  content: none;\n}\n\n.tabs li a {\n  display: block;\n  padding: 14px 16px;\n  text-align: center;\n  color: #c1c0bd;\n  font-weight: 600;\n  text-decoration: none;\n  background-image: none;\n}\n\n.tabs li a.active {\n  color: #41403e;\n  border-bottom: solid 3px #0071de;\n}\n\n.tabs li a:not(.active):hover {\n  color: #868e96;\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$c = "data-v-ecbafc9e";
  /* module identifier */
  const __vue_module_identifier__$c = undefined;
  /* functional template */
  const __vue_is_functional_template__$c = false;
  /* component normalizer */
  function __vue_normalize__$c(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/totominc/Desktop/Git/vuejs-papercss/src/components/tabs/tabs.vue";

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
  

  
  var tabs = __vue_normalize__$c(
    { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
    __vue_inject_styles__$c,
    __vue_script__$c,
    __vue_scope_id__$c,
    __vue_is_functional_template__$c,
    __vue_module_identifier__$c,
    __vue_create_injector__$4,
    undefined
  );

//
//
//
//
//
//
var script$d = {
  data: function data() {
    return {
      displayed: false
    };
  },
  methods: {
    hideTab: function hideTab() {
      this.displayed = false;
    },
    showTab: function showTab() {
      this.displayed = true;
    }
  }
};

/* script */
            const __vue_script__$d = script$d;
            
/* template */
var __vue_render__$d = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "content", class: { show: _vm.displayed } },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__$d = [];
__vue_render__$d._withStripped = true;

  /* style */
  const __vue_inject_styles__$d = function (inject) {
    if (!inject) return
    inject("data-v-e137ae22_0", { source: "\n.content.show[data-v-e137ae22] {\n  display: block;\n}\n", map: {"version":3,"sources":["/Users/totominc/Desktop/Git/vuejs-papercss/src/components/tabs/tab.vue"],"names":[],"mappings":";AA2BA;EACA,eAAA;CACA","file":"tab.vue","sourcesContent":["<template>\n  <div class=\"content\" :class=\"{ 'show': displayed }\">\n    <slot />\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      displayed: false,\n    };\n  },\n\n  methods: {\n    hideTab() {\n      this.displayed = false;\n    },\n\n    showTab() {\n      this.displayed = true;\n    },\n  },\n}\n</script>\n\n<style scoped>\n.content.show {\n  display: block;\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$d = "data-v-e137ae22";
  /* module identifier */
  const __vue_module_identifier__$d = undefined;
  /* functional template */
  const __vue_is_functional_template__$d = false;
  /* component normalizer */
  function __vue_normalize__$d(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/Users/totominc/Desktop/Git/vuejs-papercss/src/components/tabs/tab.vue";

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
  

  
  var tab = __vue_normalize__$d(
    { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
    __vue_inject_styles__$d,
    __vue_script__$d,
    __vue_scope_id__$d,
    __vue_is_functional_template__$d,
    __vue_module_identifier__$d,
    __vue_create_injector__$5,
    undefined
  );

var TabsPlugin = {
  install: function install(Vue) {
    registerComponent(Vue, 'PTabs', tabs);
  }
};
var TabPlugin = {
  install: function install(Vue) {
    registerComponent(Vue, 'PTab', tab);
  }
};
vueUse(TabsPlugin);
vueUse(TabPlugin);



var components = /*#__PURE__*/Object.freeze({
  PAlert: AlertPlugin,
  PArticle: ArticlePlugin,
  PBadge: BadgePlugin,
  PButton: ButtonPlugin,
  PCard: CardPlugin,
  PCol: ColPlugin,
  PCollapsible: CollabsiblePlugin,
  PContainer: ContainerPlugin,
  PFormGroup: FormGroupPlugin,
  PProgress: ProgressPlugin,
  PRow: RowPlugin,
  PTable: TablePlugin,
  PTabs: TabsPlugin,
  PTab: TabPlugin
});

var VuePaperCSSPlugin = {
  install: function install(Vue) {
    if (Vue._papercss_vue_installed) {
      return;
    }

    Vue._papercss_vue_installed = true;
    /**
     * Register all components into the Vue instance.
     */

    for (var plugin in components) {
      Vue.use(components[plugin]);
    }
  }
};
/**
 * Automatically install the plugin if there is `window.Vue` property.
 */

vueUse(VuePaperCSSPlugin);

export default VuePaperCSSPlugin;
