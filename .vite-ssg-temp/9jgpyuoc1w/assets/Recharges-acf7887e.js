import { useSSRContext, mergeProps, onMounted, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { a as appStore } from "./index-4a80abbd.js";
import "pinia";
import "axios";
import "vue-router";
const __default__$1 = {
  name: "CardBalance"
};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__$1, {
  __ssrInlineRender: true,
  props: {
    img: {
      type: String,
      default: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    company: {
      type: String,
      required: true,
      default: "Company"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex justify-between items-center border-b border-solid border-[#f4f5f6] p-4 hover:transition-all hover:duration-500 opacity-[.4] hover:opacity-[1] grayscale hover:grayscale-0 cursor-pointer" }, _attrs))}><div class="flex flex-row items-center"><img${ssrRenderAttr("src", __props.img)}${ssrRenderAttr("alt", `${__props.company} | Company`)} class="w-[20px] h-auto max-h-5"><p class="ml-3 text-base">${ssrInterpolate(__props.company)}</p></div><span class="material-symbols-outlined cursor-pointer hover:text-yellow-400 hover:transition-all hover:duration-400 hover:scale-[1.2]"> kid_star </span></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/CardCompany.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __default__ = {
  name: "Recharges"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const store = appStore();
    onMounted(async () => {
      await store.getProviders();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-8" }, _attrs))}><p class="mb-2">Buscar empresas:</p><div class="w-full relative h-[50px] bg-[#f4f5f6] flex items-center rounded-lg"><input type="text" placeholder="ej: Culqi" class="p-2 px-4 bg-[transparent] h-full w-full focus:outline-none"><span class="block absolute right-5 top-3 bottom-0 m-auto material-symbols-outlined text-base text-orange-500 over:transition-all hover:duration-700 hover:scale-[1.6] cursor-pointer"> search </span></div><div class="flex flex-col"><!--[-->`);
      ssrRenderList(unref(store).providers, (item, iItem) => {
        _push(ssrRenderComponent(_sfc_main$1, {
          key: iItem,
          company: item.company,
          img: item.image
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Recharges.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
