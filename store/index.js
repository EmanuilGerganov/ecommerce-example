export const state = () => ({
  discountIsSeen: true,
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
})

export const mutations = {
  SET_DISCOUNT_MODAL(state, payload) {
    state.discountIsSeen = payload
  },

  TOGGLE_NAVBAR(state, payload) {
    if (payload) state.navbar = payload
    else state.navbar = false
  },
  TOGGLE_MODAL(state, payload = false) {
    state.modal = payload
  },
  SET_BREADCRUMBS(state, payload) {
    state.breadcrumbs = payload
  },
  SET_CATEGORIES_INFO(state, payload) {
    state.categoriesInfo = payload
  },
  SET_CATEGORIES_NAMES(state, payload) {
    state.categoriesNames = payload
  },
  SET_CURRENT_CATEGORY(state, payload) {
    state.currentCategory = payload
  },
  SET_ARTICLES(state, payload) {
    state.articles = payload
  },
  SET_CURRENT_ARTICLE(state, payload) {
    state.currentArticle = payload
  },
  SET_PRODS(state, payload) {
    state.products = payload
  },
  SET_BEST_SELLING(state, payload) {
    state.bestSellingProducts = payload
  },
  SET_PRODUCT_TABS(state, payload) {
    state.productTabs = payload
  },
  SET_PRODUCT_ADD_MESSAGE(state, payload) {
    state.productAddMessage = payload
  },
  SET_LAST_ARTICLES(state, payload) {
    state.lastArticles = payload
  },
  SET_HOME_CATEGORIES(state, payload) {
    state.homeCategories = payload
  },
  SET_CURRENT_PRODUCT(state, payload) {
    state.currentProduct = payload
  },
  SET_SAME_CATEGORY_PRODUCTS(state, payload) {
    state.sameCategoryProducts = payload
  },
}

const BREADCRUMBS_BY_SLUG = {
  profil: [{ title: 'ПРОФИЛ', to: '/profil/' }],
  produkti: [{ title: 'ПРОДУКТИ', to: '/produkti/' }],
  blog: [{ title: 'БЛОГ', to: '/blog/' }],
  cart: [{ title: 'КОЛИЧКА', to: '/cart/' }],
  gdpr: [{ title: 'ПРАВА НА GDPR ЗА ЗАЩИТА НА ДАННИТЕ', to: '/gdpr/' }],
  faq: [{ title: 'ЧЕСТО ЗАДАВАНИ ВЪПРОСИ', to: '/faq/' }],
  kategorii: [{ title: 'КАТЕГОРИИ', to: '/kategorii/' }],
  kontakti: [{ title: 'КОНТАКТИ', to: '/kontakti/' }],
  'za-nas': [{ title: 'ЗА НАС', to: '/za-nas/' }],
  partniori: [{ title: 'ПАРТНЬОРИ', to: '/partniori/' }],
  vpisvane: [{ title: 'ВПИСВАНЕ', to: '/vpisvane/' }],
  'reset-password': [{ title: 'ВЪЗТАЗНОВЯВАНЕ', to: '/reset-password/' }],
  'reset-password-new-password': [
    { title: 'ВЪЗТАЗНОВЯВАНЕ', to: '/reset-password/' },
    { title: 'НОВА ПАРОЛА', to: '/reset-password/new-password/' },
  ],
  'cart-checkout': [
    { title: 'КОЛИЧКА', to: '/cart/' },
    { title: 'ПОРЪЧКА', to: '/cart/checkout/' },
  ],
}

const handlers = {
  'produkti-slug': async ({ dispatch, state }, context) => {
    await dispatch('actFetchCurrentProduct', context.params.slug)
    await dispatch('actFetchSameCategoryProducts', state.currentProduct.collections[0].id)
  },
  'blog-slug': async ({ dispatch }, context) => {
    await dispatch('actFetchCurrentArticle', context.params.slug)

    // await dispatch('actFetchArticles')
    // const current = state.articles.find((article) => article.slug == context.params.slug)
    // await commit('SET_BREADCRUMBS', [
    //   { title: 'БЛОГ', to: '/blog' },
    //   { title: current.title, to: '/blog/' + current.slug },
    // ])
  },
  'kategorii-slug': async ({ dispatch, commit, state }, context) => {
    await dispatch('actFetchCategoriesNames')
    const currentCategory = state.categoriesNames.find(
      (cat) => cat.node.slug === context.params.slug
    )
    commit('SET_CURRENT_CATEGORY', currentCategory)
    commit('SET_BREADCRUMBS', [
      { title: 'КАТЕГОРИИ', to: '/kategorii/' },
      { title: currentCategory.node.name, to: `/kategorii/${currentCategory.node.slug}/` },
    ])
    await dispatch('actFetchSameCategoryProducts', state.currentCategory.node.id)
  },
  index: async ({ dispatch }) => {
    dispatch('actFetchBestSelling')
    dispatch('actFetchHomeCategories')
  },
  produkti: async ({ dispatch }) => {
    await dispatch('actFetchProducts')
  },
  kategorii: async ({ dispatch }) => {
    // await dispatch("actFetchCategories");
    await dispatch('actFetchCategoriesInfo')
  },
  blog: async ({ dispatch }) => {
    await dispatch('actFetchArticles')
  },
  profil: async ({ commit }, context) => {
    commit('SET_BREADCRUMBS', BREADCRUMBS_BY_SLUG[context.route.name])
  },
}

export const actions = {
  // const channel = "default-customer";
  async nuxtServerInit(storeContext, context) {
    const { commit } = storeContext

    storeContext.dispatch('actFetchLastArticles')

    // const payload = context.$cookies.get('cart') || {}
    // console.log(payload, 'COOKIE CART')
    // context.cart = payload
    // commit('cart/SET_CART_FROM_COOKIE', payload)
    // await dispatch('actSetCartFromCookie', payload)

    if (BREADCRUMBS_BY_SLUG[context.route.name])
      commit('SET_BREADCRUMBS', BREADCRUMBS_BY_SLUG[context.route.name])

    if (handlers[context.route.name] !== undefined)
      await handlers[context.route.name](storeContext, context)
  },
  async actFetchProducts({ commit }) {
    const query = gql`
      query products($channel: String!) {
        products(
          first: 100
          channel: $channel
          sortBy: { field: PUBLICATION_DATE, direction: ASC }
        ) {
          edges {
            node {
              id
              name
              slug
              media {
                url
              }
              variants {
                sku
                id
                name
              }
              pricing {
                priceRangeUndiscounted {
                  start {
                    gross {
                      amount
                      currency
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
    const variables = { channel: 'default-customer' }
    const productsResponse = await this.$graphql.default.request(query, variables)
    commit('SET_PRODS', productsResponse.products.edges)
  },
  async actFetchBestSelling({ commit }) {
    const query = gql`
      query products($channel: String!) {
        products(first: 4, channel: $channel, sortBy: { field: PUBLICATION_DATE, direction: ASC }) {
          edges {
            node {
              updatedAt
              id
              name
              slug
              seoDescription
              media {
                id
                url
              }
              variants {
                sku
                id
                name
              }
              pricing {
                priceRange {
                  start {
                    gross {
                      amount
                      currency
                    }
                  }
                }
                discount {
                  gross {
                    amount
                    currency
                  }
                }
                priceRangeUndiscounted {
                  start {
                    gross {
                      amount
                      currency
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
    const variables = { channel: 'default-customer' }
    const bestSellingResponse = await this.$graphql.default.request(query, variables)
    await commit('SET_BEST_SELLING', bestSellingResponse.products.edges)
  },
  actFetchLastArticles({ commit }) {
    return this.$strapi
      .find('articles', [
        ['_sort', 'published_at:desc'],
        ['_limit', 3],
      ])
      .then((articles) => {
        const mappedArticles = articles.map((article) => {
          return {
            image: article.image.url,
            title: article.title,
            description: article.description,
            published_at: article.published_at,
            slug: article.slug,
          }
        })
        commit('SET_LAST_ARTICLES', mappedArticles)
        return mappedArticles
      })
  },
  async actFetchCurrentArticle({ commit }, slug) {
    const response = await this.$strapi.find(
      'articles',
      {
        slug,
      },
      ['_limit', 1]
    )
    const article = response[0]
    commit('SET_CURRENT_ARTICLE', article)
    commit('SET_BREADCRUMBS', [
      { title: 'БЛОГ', to: '/blog' },
      { title: article.title, to: `/blog/${article.slug}` },
    ])
    return this.$strapi
      .find(
        'articles',
        {
          slug: slug,
        },
        ['_limit', 1]
      )
      .then((article) => {
        commit('SET_CURRENT_ARTICLE', article[0])
        return article[0]
      })
  },
  async actFetchArticles({ commit }) {
    return this.$strapi
      .find('articles', [['_sort', 'publish_at:desc']])
      .then((articles) => commit('SET_ARTICLES', articles))
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
    `
    const variables = { channel: 'default-customer' }
    const categoriesResponse = await this.$graphql.default.request(query, variables)

    await commit('SET_HOME_CATEGORIES', categoriesResponse.collections.edges)
  },
  async actFetchCategoriesInfo({ commit }) {
    const query = gql`
      query ($channel: String!) {
        collections(first: 100, channel: $channel) {
          edges {
            node {
              id
              name
              slug
              backgroundImage {
                url
              }
              metadata {
                key
                value
              }
            }
          }
        }
      }
    `
    const variables = { channel: 'default-customer' }
    const categoriesResponse = await this.$graphql.default.request(query, variables)

    await commit('SET_CATEGORIES_INFO', categoriesResponse.collections.edges)
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
    `
    const variables = { slug: payload }
    const product = await this.$graphql.default.request(query, variables)
    // if (product.product === null) console.log('here')

    commit('SET_CURRENT_PRODUCT', product.product)
    commit('SET_BREADCRUMBS', [
      { title: 'ПРОДУКТИ', to: '/produkti' },
      { title: product.product.name, to: `/produkti/${payload}` },
    ])
    return await this.$strapi.find('products', { slug: payload }).then((tabResponse) => {
      commit('SET_PRODUCT_TABS', tabResponse)
    })
  },
  async actFetchSameCategoryProducts({ commit }, payload) {
    const query = gql`
      query products($channel: String!, $collection: [ID]) {
        products(first: 50, channel: $channel, filter: { collections: $collection }) {
          edges {
            node {
              updatedAt
              id
              name
              slug
              media {
                id
                url
              }
              pricing {
                priceRangeUndiscounted {
                  start {
                    gross {
                      amount
                      currency
                    }
                  }
                }
              }
              variants {
                sku
                id
                name
              }
            }
          }
        }
      }
    `
    const variables = {
      channel: 'default-customer',
      collection: payload,
    }

    const categoryProducts = await this.$graphql.default.request(query, variables)

    commit('SET_SAME_CATEGORY_PRODUCTS', categoryProducts.products.edges)
  },
  async actFetchCategoriesNames({ commit }) {
    const query = gql`
      query ($channel: String!) {
        collections(first: 100, channel: $channel) {
          edges {
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
    `
    const variables = { channel: 'default-customer' }
    const response = await this.$graphql.default.request(query, variables)
    await commit('SET_CATEGORIES_NAMES', response.collections.edges)
    return response.collections.edges
  },
}
