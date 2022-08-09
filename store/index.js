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
  // SET_LAST_ARTICLES(state, payload) {
  //   state.lastArticles = payload;
  // },
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

    // storeContext.dispatch("actFetchLastArticles");

    // const payload = context.$cookies.get('cart') || {}
    // console.log(payload, 'COOKIE CART')
    // context.cart = payload
    // commit('cart/SET_CART_FROM_COOKIE', payload)
    // await dispatch('actSetCartFromCookie', payload)
  },
  // async actFetchProducts({ commit }) {
  //   const productsResponse = await fetch(
  //     "https://emanuilgerganov.github.io/eccomerce-mock.json"
  //   );
  //   const response = await productsResponse.json();
  //   console.log(response.products)
  //   commit("SET_PRODS", response.products);
  // },
  // async actFetchLastArticles({ commit }) {
  //   const lastArticlesResponse = await fetch(
  //     "https://jsonplaceholder.typicode.com/posts?_sort=id:desc&_limit=3"
  //   );
  //   const lastArticles = await lastArticlesResponse.json();
  //   commit("SET_LAST_ARTICLES", lastArticles);
  // },
  async actFetchCurrentArticle({ commit }, slug) {
    const response = await this.$strapi.find(
      "articles",
      {
        slug,
      },
      ["_limit", 1]
    );
    const article = response[0];
    commit("SET_CURRENT_ARTICLE", article);
    commit("SET_BREADCRUMBS", [
      { title: "BLOG", to: "/blog" },
      { title: article.title, to: `/blog/${article.slug}` },
    ]);
    return this.$strapi
      .find(
        "articles",
        {
          slug: slug,
        },
        ["_limit", 1]
      )
      .then((article) => {
        commit("SET_CURRENT_ARTICLE", article[0]);
        return article[0];
      });
  },
  async actFetchArticles({ commit }) {
    // https://fakestoreapi.com/products
    const articlesResponse = await fetch("https://dummyjson.com/posts");
    const articles = await articlesResponse.json();
    commit("SET_ARTICLES", articles.posts);
  },
  async actFetchHomeCategories({ commit }) {
    const query = gql`
      query ($channel: String!) {
        collections(first: 4, channel: $channel) {
          edges {
            cursor
            node {
              id
              name
              slug
              backgroundImage {
                url
              }
            }
          }
        }
      }
    `;
    const variables = { channel: "default-customer" };
    const categoriesResponse = await this.$graphql.default.request(
      query,
      variables
    );

    await commit("SET_HOME_CATEGORIES", categoriesResponse.collections.edges);
  },
};
