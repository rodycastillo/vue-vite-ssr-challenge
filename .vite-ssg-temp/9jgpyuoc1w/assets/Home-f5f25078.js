import { useSSRContext, mergeProps, resolveComponent, withCtx, createVNode, toDisplayString, onMounted, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderSuspense, ssrRenderList } from "vue/server-renderer";
import { a as appStore } from "./index-4a80abbd.js";
import "@vue/server-renderer";
import { useHead } from "@vueuse/head";
import "../main.mjs";
import "pinia";
import "axios";
import "vue-router";
import "vite-ssg";
const __default__$1 = {
  name: "CardBalance"
};
const _sfc_main$2 = /* @__PURE__ */ Object.assign(__default__$1, {
  __ssrInlineRender: true,
  props: {
    balance: {
      type: String,
      required: true,
      default: "0000.00"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8 border-b border-gray-500 border-solid" }, _attrs))}><div class="flex"><span class="block mr-3">Saldo virtual</span><span class="block text-base cursor-pointer text-[#56b7b1] material-symbols-outlined"> info </span></div><div class="mt-3"><p class="text-xl font-bold flex items-center"> S/ ${ssrInterpolate(__props.balance)} <span class="block cursor-pointer ml-2 text-[#56b7b1] font-normal text-base material-symbols-outlined"> sync </span></p><p class="mt-2 flex border w-fit py-2 px-3 border-gray-500 border-solid rounded-2xl cursor-pointer hover:translate-y-[-1px] hover:transition-all hover:opacity-[.5] items-center"><span class="block mr-2 material-symbols-outlined text-base"> favorite </span> ¿Cómo recargar mi saldo virtual? </p><p class="mt-3">Código para cargar tu saldo: <span class="text-[#56b7b1]">{12345678901}</span></p></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/CardBalance.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __default__ = {
  name: "CardMethod"
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: false,
      default: "/"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(ssrRenderComponent(_component_router_link, mergeProps({ to: __props.to }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full p-3 bg-[#f4f5f6] rounded-xl flex items-center hover:transition-all hover:duration-500 opacity-[.4] hover:opacity-[1] cursor-pointer grayscale hover:grayscale-0"${_scopeId}><span class="bg-[#f18745] px-[.5px] py-1 rounded-[5px] block mr-3 text-white material-symbols-outlined"${_scopeId}>${ssrInterpolate(__props.icon)}</span><p${_scopeId}>${ssrInterpolate(__props.name)}</p></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full p-3 bg-[#f4f5f6] rounded-xl flex items-center hover:transition-all hover:duration-500 opacity-[.4] hover:opacity-[1] cursor-pointer grayscale hover:grayscale-0" }, [
                createVNode("span", { class: "bg-[#f18745] px-[.5px] py-1 rounded-[5px] block mr-3 text-white material-symbols-outlined" }, toDisplayString(__props.icon), 1),
                createVNode("p", null, toDisplayString(__props.name), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/CardMethod.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Recargas | Vuejs",
      description: "Example of description"
    });
    const store = appStore();
    onMounted(async () => {
      console.log("set");
      await store.getCurrentBalance();
    });
    const methods = [
      {
        name: "Recargas",
        icon: "tap_and_play",
        to: "/recharges/"
      },
      {
        name: "Pago de servicios",
        icon: "emoji_objects",
        to: "/"
      },
      {
        name: "Historial de ganancias y operaciones",
        icon: "event_available",
        to: "/"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        fallback: () => {
          _push(`<div>loading</div>`);
        },
        default: () => {
          _push(`<div>`);
          _push(ssrRenderComponent(_sfc_main$2, {
            balance: unref(store).balance
          }, null, _parent));
          _push(`<div class="flex flex-col gap-5 mt-8"><!--[-->`);
          ssrRenderList(methods, (method, iMethod) => {
            _push(ssrRenderComponent(_sfc_main$1, {
              key: iMethod,
              name: method.name,
              icon: method.icon,
              to: method.to
            }, null, _parent));
          });
          _push(`<!--]--></div></div>`);
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
