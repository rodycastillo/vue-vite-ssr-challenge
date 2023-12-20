import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext, resolveDynamicComponent, openBlock, createBlock, Suspense, defineComponent, ref, onMounted } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSuspense, ssrRenderVNode } from "vue/server-renderer";
import { createHead } from "@vueuse/head";
import "@vue/server-renderer";
import { createPinia } from "pinia";
import { ViteSSG } from "vite-ssg";
const style = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "bg-[#525659] w-full py-5" }, _attrs))}><div class="container mx-auto px-4 text-white"><section class="w-full flex flex-row justify-between items-center">`);
  _push(ssrRenderComponent(_component_router_link, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="block material-symbols-outlined text-slate-200"${_scopeId}>CHALLENGE</span>`);
      } else {
        return [
          createVNode("span", { class: "block material-symbols-outlined text-slate-200" }, "CHALLENGE")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="block material-symbols-outlined text-green-500">vue</span></section></div></nav>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterView = resolveComponent("RouterView");
      _push(`<!--[-->`);
      _push(ssrRenderComponent(Navbar, null, null, _parent));
      _push(`<div class="container mx-auto px-4">`);
      _push(ssrRenderComponent(_component_RouterView, null, {
        default: withCtx(({ Component }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSuspense(_push2, {
              default: () => {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(Component), null, null), _parent2, _scopeId);
              },
              _: 2
            });
          } else {
            return [
              (openBlock(), createBlock(Suspense, null, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(Component)))
                ]),
                _: 2
              }, 1024))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./assets/Home-f5f25078.js"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/recharges",
    name: "Recharges",
    component: () => import("./assets/Recharges-acf7887e.js"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/error",
    name: "Error",
    component: () => import("./assets/Error-4e24bb1a.js"),
    meta: {
      requiresAuth: false
    }
  }
];
defineComponent({
  name: "ClientOnly",
  setup(_, { slots }) {
    const show = ref(false);
    onMounted(() => {
      show.value = true;
    });
    return () => show.value && slots.default ? slots.default() : null;
  }
});
window.localStorage.setItem("auth_token", "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6Indpbmdlcmxpb24uY3VscWkiLCJleHAiOjE3MDY5NDIxNjR9.j7_UICJFBvPiHv_bhnoRNprVU_DaML41Vjmd51jcRDI");
const createApp = ViteSSG(
  // the root component
  _sfc_main,
  // vue-router options
  { routes },
  // function to have custom setups
  ({ app, router, routes: routes2, isClient, initialState }) => {
    const pinia = createPinia();
    const head = createHead();
    app.use(pinia).use(head);
  }
);
export {
  _export_sfc as _,
  createApp
};
