import { mergeProps, useSSRContext, resolveComponent, withCtx, createVNode, toDisplayString, ref, onServerPrefetch, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderSuspense, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "../main.mjs";
import { defineStore } from "pinia";
import { g as getCurrentBalanceService, a as getProvidersService } from "./index-3f88f4bb.js";
import { useHead } from "@vueuse/head";
import "@tanstack/vue-query";
import "vite-ssg";
import "axios";
import "vue-router";
const _sfc_main$2 = {
  name: "CardBalance",
  props: {
    balance: {
      type: String,
      required: true,
      default: "0000.00"
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-8 border-b border-gray-500 border-solid" }, _attrs))}><div class="flex"><span class="block mr-3">Saldo virtual</span><span class="block text-base cursor-pointer text-[#56b7b1] material-symbols-outlined"> info </span></div><div class="mt-3"><p class="text-xl font-bold flex items-center"> S/ ${ssrInterpolate($props.balance)} <span class="block cursor-pointer ml-2 text-[#56b7b1] font-normal text-base material-symbols-outlined"> sync </span></p><p class="mt-2 flex border w-fit py-2 px-3 border-gray-500 border-solid rounded-2xl cursor-pointer hover:translate-y-[-1px] hover:transition-all hover:opacity-[.5] items-center"><span class="block mr-2 material-symbols-outlined text-base"> favorite </span> ¿Cómo recargar mi saldo virtual? </p><p class="mt-3"> Código para cargar tu saldo: <span class="text-[#56b7b1]">{12345678901}</span></p></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/CardBalance.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CardBalance = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  name: "CardMethod",
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
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(ssrRenderComponent(_component_router_link, mergeProps({ to: $props.to }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="w-full p-3 bg-[#f4f5f6] rounded-xl flex items-center hover:transition-all hover:duration-500 opacity-[.4] hover:opacity-[1] cursor-pointer grayscale hover:grayscale-0"${_scopeId}><span class="bg-[#f18745] px-[.5px] py-1 rounded-[5px] block mr-3 text-white material-symbols-outlined"${_scopeId}>${ssrInterpolate($props.icon)}</span><p${_scopeId}>${ssrInterpolate($props.name)}</p></div>`);
      } else {
        return [
          createVNode("div", { class: "w-full p-3 bg-[#f4f5f6] rounded-xl flex items-center hover:transition-all hover:duration-500 opacity-[.4] hover:opacity-[1] cursor-pointer grayscale hover:grayscale-0" }, [
            createVNode("span", { class: "bg-[#f18745] px-[.5px] py-1 rounded-[5px] block mr-3 text-white material-symbols-outlined" }, toDisplayString($props.icon), 1),
            createVNode("p", null, toDisplayString($props.name), 1)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/CardMethod.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CardMethod = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const appStore = defineStore("appStore", {
  state: () => {
    return {
      // BALANCE
      balance: ref(null),
      errorBalance: ref(false),
      loadingBalance: ref(false),
      // PROVIDERS
      providers: ref(null),
      errorProviders: ref(false),
      loadingBalance: ref(false)
    };
  },
  actions: {
    async getCurrentBalance() {
      try {
        const data = await getCurrentBalanceService();
        console.log(data);
        this.balance = data.balanceCommerce;
        this.errorBalance = false;
      } catch (error) {
        this.errorBalance = true;
        console.error("ERR", error);
      }
    },
    async getProviders() {
      try {
        const { data } = await getProvidersService();
        console.log(data);
        this.providers = data.companies;
        this.errorProviders = false;
      } catch (error) {
        this.errorProviders = true;
        console.error("ERR", error);
      }
    }
  }
});
const _sfc_main = {
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Recargas | Vuejs",
      description: "Example of description"
    });
    const store = appStore();
    if (!store.balance)
      store.getCurrentBalance();
    onServerPrefetch(async () => {
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
          _push(`<div>Loading</div>`);
        },
        default: () => {
          _push(`<div>`);
          _push(ssrRenderComponent(CardBalance, {
            balance: unref(store).balance
          }, null, _parent));
          _push(`<div class="flex flex-col gap-5 mt-8"><!--[-->`);
          ssrRenderList(methods, (method, iMethod) => {
            _push(ssrRenderComponent(CardMethod, {
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
