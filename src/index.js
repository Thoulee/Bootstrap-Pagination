import ThouleeBootstrapPagination from "./thoulee-bootstrap-pagination.vue";

const ThouleeBootstrapPaginationMain = {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("thoulee-bootstrap-pagination", ThouleeBootstrapPagination);
  },
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(ThouleeBootstrapPaginationMain);
}

export default ThouleeBootstrapPaginationMain;
