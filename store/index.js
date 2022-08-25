export const state = () => ({
  navbar: false,
  breadcrumbs: [],
  bestSellingProducts: null,

  productTabs: null,
  products: null,
  currentProduct: null,

  articles: null,
});

export const mutations = {
  TOGGLE_NAVBAR(state, payload) {
    if (payload) state.navbar = payload;
    else state.navbar = false;
  },

  SET_BREADCRUMBS(state, payload) {
    state.breadcrumbs = payload;
  },
  SET_ARTICLES(state, payload) {
    state.articles = payload;
  },
  SET_PRODS(state, payload) {
    state.products = payload;
  },
  SET_BEST_SELLING(state, payload) {
    state.bestSellingProducts = payload;
  },
  SET_PRODUCT_TABS(state, payload) {
    state.productTabs = payload;
  },
  SET_PRODUCT_ADD_MESSAGE(state, payload) {
    state.productAddMessage = payload;
  },
  SET_CURRENT_PRODUCT(state, payload) {
    state.currentProduct = payload;
  },
};
export const actions = {
  async nuxtServerInit(storeContext, context) {
    const { commit } = storeContext;
    const productsResponse = await fetch(
      "https://raw.githubusercontent.com/EmanuilGerganov/ecommerce-example/main/eccomerce-mock.json"
    ).then((response) => response.json());
    commit("SET_PRODS", productsResponse.products);
    const articlesResponse = await fetch(
      "https://raw.githubusercontent.com/EmanuilGerganov/ecommerce-example/main/blog-articles-mock.json"
    ).then((response) => response.json());
    commit("SET_ARTICLES", articlesResponse.articles);
  },
};
