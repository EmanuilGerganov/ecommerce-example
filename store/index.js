export const state = () => ({
  navbar: false,
  modal: false,
  // for whole page
  categoriesNames: null,
  breadcrumbs: [],
  productAddMessage: {},
  // for index
  homeCategories: null,
  lastArticles: null,
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
  TOGGLE_MODAL(state, payload = false) {
    state.modal = payload;
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
  SET_LAST_ARTICLES(state, payload) {
    state.lastArticles = payload;
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

    storeContext.dispatch("actFetchLastArticles");

    // const payload = context.$cookies.get('cart') || {}
    // console.log(payload, 'COOKIE CART')
    // context.cart = payload
    // commit('cart/SET_CART_FROM_COOKIE', payload)
    // await dispatch('actSetCartFromCookie', payload)
  },
  async actFetchProducts({ commit }) {
    const productsResponse = await fetch(
      "https://api.storerestapi.com/products"
    );
    const products = await productsResponse.json();
    commit("SET_PRODS", products.data);
  },
  async actFetchBestSelling({ commit }) {
    const bestSellingResponse = await fetch(
      "https://api.storerestapi.com/products?limit=3"
    );
    const products = await bestSellingResponse.json();
    commit("SET_BEST_SELLING", products.data);
  },
  async actFetchLastArticles({ commit }) {
    const lastArticlesResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_sort=id:desc&_limit=3"
    );
    const lastArticles = await lastArticlesResponse.json();
    commit("SET_LAST_ARTICLES", lastArticles);
  },
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
  async actFetchCurrentProduct({ commit }, payload) {
    const query = gql`
      query product($slug: String) {
        product(slug: $slug, channel: "default-customer") {
          id
          name
          slug
          media {
            url
          }
          collections {
            name
            id
          }
          variants {
            sku
            id
            name
          }
          attributes {
            attribute {
              name
            }
            values {
              name
            }
          }
          seoTitle
          seoDescription
          pricing {
            priceRangeUndiscounted {
              start {
                gross {
                  amount
                }
              }
            }
          }
        }
      }
    `;
    const variables = { slug: payload };
    const product = await this.$graphql.default.request(query, variables);
    // if (product.product === null) console.log('here')

    commit("SET_CURRENT_PRODUCT", product.product);
    commit("SET_BREADCRUMBS", [
      { title: "PRODUCTS", to: "/products" },
      { title: product.product.name, to: `/products/${payload}` },
    ]);
    return await this.$strapi
      .find("products", { slug: payload })
      .then((tabResponse) => {
        commit("SET_PRODUCT_TABS", tabResponse);
      });
  },
};
