export const state = () => ({
  navbar: false,
  // for whole page
  categoriesNames: null,
  breadcrumbs: [],
  // for index
  homeCategories: null,
  // lastArticles: null,
  bestSellingProducts: null,

  // for products
  productTabs: null,
  products: null,
  currentProduct: null,
  sameCategoryProducts: [],

  // for categories
  currentCategory: null,
  categoriesInfo: null,

  // for blog
  articles: null,
  currentArticle: null,
});

export const mutations = {
  TOGGLE_NAVBAR(state, payload) {
    if (payload) state.navbar = payload;
    else state.navbar = false;
  },

  SET_BREADCRUMBS(state, payload) {
    state.breadcrumbs = payload;
  },
  SET_CATEGORIES_INFO(state, payload) {
    state.categoriesInfo = payload;
  },
  SET_CATEGORIES_NAMES(state, payload) {
    state.categoriesNames = payload;
  },
  SET_CURRENT_CATEGORY(state, payload) {
    state.currentCategory = payload;
  },
  SET_ARTICLES(state, payload) {
    state.articles = payload;
  },
  SET_CURRENT_ARTICLE(state, payload) {
    state.currentArticle = payload;
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
  SET_HOME_CATEGORIES(state, payload) {
    state.homeCategories = payload;
  },
  SET_CURRENT_PRODUCT(state, payload) {
    state.currentProduct = payload;
  },
  SET_SAME_CATEGORY_PRODUCTS(state, payload) {
    state.sameCategoryProducts = payload;
  },
};
export const actions = {
  // const channel = "default-customer";
  async nuxtServerInit(storeContext, context) {
    const { commit } = storeContext;
    const productsResponse = await fetch(
      "https://raw.githubusercontent.com/EmanuilGerganov/ecommerce-example/main/eccomerce-mock.json"
    );
    const response = await productsResponse.json();
    console.log(response.products);
    commit("SET_PRODS", response.products);
  },
  async actFetchArticles({ commit }) {
    // https://fakestoreapi.com/products
    const articlesResponse = await fetch("https://dummyjson.com/posts");
    const articles = await articlesResponse.json();
    commit("SET_ARTICLES", articles.posts);
  },
};
