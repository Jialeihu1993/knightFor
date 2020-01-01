'use strict';

var vueRuntimeHelpers = require('vue-runtime-helpers');

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

var script = {
    name: 'tom-button',
  props: {
    type: {
      type: String,
      default: 'default',
      validator(type) {
        return ['default', 'primary', 'info', 'warning', 'danger'].includes(
          type
        )
      }
    },
    size: {
      type: String,
      default: 'medium',
      validator(size) {
        return ['medium', 'small', 'mini'].includes(size)
      }
    },
    round: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      defalut: false
    }
  },
  methods: {
    onClick(event) {
      this.$emit('click', event);
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
    "button",
    {
      class:
        "tom-button tom-button-" +
        _vm.type +
        " tom-button-" +
        _vm.size +
        " \n    " +
        (_vm.round ? "tom-button-round" : "") +
        " " +
        (_vm.disabled ? "is-disabled" : ""),
      attrs: { disabled: _vm.disabled },
      on: { click: _vm.onClick }
    },
    [_vm._t("default")],
    2
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-91924b80_0", { source: "\n.tom-button[data-v-91924b80] {\n      display: inline-block;\n      outline: 0;\n      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n      user-select: none;\n      cursor: pointer;\n      line-height: 1;\n      white-space: nowrap;\n      background-color: #fff;\n      border: 1px solid #dcdfe6;\n      color: #606266;\n      -webkit-appearance: none;\n      text-align: center;\n      box-sizing: border-box;\n      outline: none;\n      margin: 0;\n      transition: 0.1s;\n      font-weight: 500;\n      padding: 12px 20px;\n      font-size: 14px;\n      border-radius: 4px;\n}\n.tom-button.is-disabled[data-v-91924b80] {\n      color: #c0c4cc;\n      cursor: not-allowed;\n      background-image: none;\n      background-color: #fff;\n      border-color: #ebeef5;\n}\n\n    /*背景颜色*/\n.tom-button-primary[data-v-91924b80] {\n      color: #fff;\n      background-color: #409eff;\n      border-color: #409eff;\n}\n.tom-button-primary.is-disabled[data-v-91924b80] {\n      color: #fff;\n      background-color: #a0cfff;\n      border-color: #a0cfff;\n}\n.tom-button-success[data-v-91924b80] {\n      color: #fff;\n      background-color: #67c23a;\n      border-color: #67c23a;\n}\n.tom-button-success.is-disabled[data-v-91924b80] {\n      color: #fff;\n      background-color: #b3e19d;\n      border-color: #b3e19d;\n}\n.tom-button-info[data-v-91924b80] {\n      color: #fff;\n      background-color: #c8c9cc;\n      border-color: #c8c9cc;\n}\n.tom-button-info.is-disabled[data-v-91924b80] {\n      color: #fff;\n      background-color: #c8c9cc;\n      border-color: #c8c9cc;\n}\n.tom-button-warning[data-v-91924b80] {\n      color: #fff;\n      background-color: #e6a23c;\n      border-color: #e6a23c;\n}\n.tom-button-warning.is-disabled[data-v-91924b80] {\n      color: #fff;\n      background-color: #f3d19e;\n      border-color: #f3d19e;\n}\n.tom-button-danger[data-v-91924b80] {\n      color: #fff;\n      background-color: #f56c6c;\n      border-color: #f56c6c;\n}\n.tom-button-danger.is-disabled[data-v-91924b80] {\n      color: #fff;\n      background-color: #fab6b6;\n      border-color: #fab6b6;\n}\n\n    /*Button大小*/\n.tom-button-medium[data-v-91924b80] {\n      padding: 10px 20px;\n      font-size: 14px;\n      border-radius: 4px;\n}\n.tom-button-small[data-v-91924b80] {\n      padding: 9px 15px;\n      font-size: 12px;\n      border-radius: 3px;\n}\n.tom-button-mini[data-v-91924b80] {\n      padding: 7px 15px;\n      font-size: 12px;\n      border-radius: 3px;\n}\n\n    /*是否圆角*/\n.tom-button-round[data-v-91924b80] {\n      border-radius: 20px;\n}\n", map: {"version":3,"sources":["/Users/jialei/VueProject/baseproject/knightFor/my-ui/src/Button/Button.vue"],"names":[],"mappings":";AACA;MACA,qBAAA;MACA,UAAA;MACA,2DAAA;MACA,iBAAA;MACA,eAAA;MACA,cAAA;MACA,mBAAA;MACA,sBAAA;MACA,yBAAA;MACA,cAAA;MACA,wBAAA;MACA,kBAAA;MACA,sBAAA;MACA,aAAA;MACA,SAAA;MACA,gBAAA;MACA,gBAAA;MACA,kBAAA;MACA,eAAA;MACA,kBAAA;AACA;AAEA;MACA,cAAA;MACA,mBAAA;MACA,sBAAA;MACA,sBAAA;MACA,qBAAA;AACA;;IAEA,OAAA;AAEA;MACA,WAAA;MACA,yBAAA;MACA,qBAAA;AACA;AAEA;MACA,WAAA;MACA,yBAAA;MACA,qBAAA;AACA;AAEA;MACA,WAAA;MACA,yBAAA;MACA,qBAAA;AACA;AAEA;MACA,WAAA;MACA,yBAAA;MACA,qBAAA;AACA;AAEA;MACA,WAAA;MACA,yBAAA;MACA,qBAAA;AACA;AAEA;MACA,WAAA;MACA,yBAAA;MACA,qBAAA;AACA;AAEA;MACA,WAAA;MACA,yBAAA;MACA,qBAAA;AACA;AAEA;MACA,WAAA;MACA,yBAAA;MACA,qBAAA;AACA;AAEA;MACA,WAAA;MACA,yBAAA;MACA,qBAAA;AACA;AACA;MACA,WAAA;MACA,yBAAA;MACA,qBAAA;AACA;;IAEA,WAAA;AACA;MACA,kBAAA;MACA,eAAA;MACA,kBAAA;AACA;AAEA;MACA,iBAAA;MACA,eAAA;MACA,kBAAA;AACA;AAEA;MACA,iBAAA;MACA,eAAA;MACA,kBAAA;AACA;;IAEA,OAAA;AACA;MACA,mBAAA;AACA","file":"Button.vue","sourcesContent":["<style scoped>\n.tom-button {\n      display: inline-block;\n      outline: 0;\n      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n      user-select: none;\n      cursor: pointer;\n      line-height: 1;\n      white-space: nowrap;\n      background-color: #fff;\n      border: 1px solid #dcdfe6;\n      color: #606266;\n      -webkit-appearance: none;\n      text-align: center;\n      box-sizing: border-box;\n      outline: none;\n      margin: 0;\n      transition: 0.1s;\n      font-weight: 500;\n      padding: 12px 20px;\n      font-size: 14px;\n      border-radius: 4px;\n    }\n\n    .tom-button.is-disabled {\n      color: #c0c4cc;\n      cursor: not-allowed;\n      background-image: none;\n      background-color: #fff;\n      border-color: #ebeef5;\n    }\n\n    /*背景颜色*/\n\n    .tom-button-primary {\n      color: #fff;\n      background-color: #409eff;\n      border-color: #409eff;\n    }\n\n    .tom-button-primary.is-disabled {\n      color: #fff;\n      background-color: #a0cfff;\n      border-color: #a0cfff;\n    }\n\n    .tom-button-success {\n      color: #fff;\n      background-color: #67c23a;\n      border-color: #67c23a;\n    }\n\n    .tom-button-success.is-disabled {\n      color: #fff;\n      background-color: #b3e19d;\n      border-color: #b3e19d;\n    }\n\n    .tom-button-info {\n      color: #fff;\n      background-color: #c8c9cc;\n      border-color: #c8c9cc;\n    }\n\n    .tom-button-info.is-disabled {\n      color: #fff;\n      background-color: #c8c9cc;\n      border-color: #c8c9cc;\n    }\n\n    .tom-button-warning {\n      color: #fff;\n      background-color: #e6a23c;\n      border-color: #e6a23c;\n    }\n\n    .tom-button-warning.is-disabled {\n      color: #fff;\n      background-color: #f3d19e;\n      border-color: #f3d19e;\n    }\n\n    .tom-button-danger {\n      color: #fff;\n      background-color: #f56c6c;\n      border-color: #f56c6c;\n    }\n    .tom-button-danger.is-disabled {\n      color: #fff;\n      background-color: #fab6b6;\n      border-color: #fab6b6;\n    }\n\n    /*Button大小*/\n    .tom-button-medium {\n      padding: 10px 20px;\n      font-size: 14px;\n      border-radius: 4px;\n    }\n\n    .tom-button-small {\n      padding: 9px 15px;\n      font-size: 12px;\n      border-radius: 3px;\n    }\n\n    .tom-button-mini {\n      padding: 7px 15px;\n      font-size: 12px;\n      border-radius: 3px;\n    }\n\n    /*是否圆角*/\n    .tom-button-round {\n      border-radius: 20px;\n    }\n</style>\n<template>\n    <button\n        :class=\"`tom-button tom-button-${type} tom-button-${size} \n        ${round ? 'tom-button-round': ''} ${disabled ? 'is-disabled' : ''}`\"\n        @click=\"onClick\"\n        :disabled=\"disabled\"\n    >\n        <slot></slot>\n    </button>\n</template>\n<script>\nexport default {\n    name: 'tom-button',\n  props: {\n    type: {\n      type: String,\n      default: 'default',\n      validator(type) {\n        return ['default', 'primary', 'info', 'warning', 'danger'].includes(\n          type\n        )\n      }\n    },\n    size: {\n      type: String,\n      default: 'medium',\n      validator(size) {\n        return ['medium', 'small', 'mini'].includes(size)\n      }\n    },\n    round: {\n      type: Boolean,\n      default: false\n    },\n    disabled: {\n      type: Boolean,\n      defalut: false\n    }\n  },\n  methods: {\n    onClick(event) {\n      this.$emit('click', event)\n    }\n  }\n}\n</script>"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-91924b80";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = vueRuntimeHelpers.normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    vueRuntimeHelpers.createInjector,
    undefined,
    undefined
  );

__vue_component__.install = function(Vue) {
  Vue.component(__vue_component__.name, __vue_component__);
};

module.exports = __vue_component__;
