export const state = () => ({
  cartItems: {},
  totalPrice: {
    price: 0,
    discount: false,
  },
  totalQuantity: 0,
  checkout: {},
})

export const mutations = {
  SET_TOTAL_PRICE_DISCOUNT(state, payload) {
    state.totalPrice.discount = payload
  },

  PUSH_PRODUCT_TO_CART(state, product) {
    product.price = product.node.pricing.priceRangeUndiscounted.start.gross.amount
    const sku = product.node.variants[0].sku
    state.cartItems[sku] = product
    state.cartItems = { ...state.cartItems }
    localStorage.setItem('cart', JSON.stringify(state.cartItems))
  },
  REMOVE_PRODUCT_FROM_CART(state, sku) {
    // this._vm.$set(state.cartItems, sku, null)

    const newState = {}
    Object.keys(state.cartItems).forEach((k) => {
      if (k !== sku) newState[k] = state.cartItems[k]
    })
    state.cartItems = { ...newState }
    localStorage.setItem('cart', JSON.stringify(state.cartItems))
  },
  INCREMENT_PRODUCT_QUANTITY(state, { sku, quantity }) {
    state.cartItems[sku] = { ...state.cartItems[sku], quantity: state.cartItems[sku].quantity + 1 }
    state.cartItems = { ...state.cartItems }
    // $nuxt.$root.$set(, sku, {
    //   ...state.cartItems[sku],
    //   quantity: state.cartItems[sku].quantity + quantity,
    // })

    localStorage.setItem('cart', JSON.stringify(state.cartItems))
  },
  DECREMENT_PRODUCT_QUANTITY(state, item) {
    item.quantity--
    localStorage.setItem('cart', JSON.stringify(state.cartItems))
  },
  CLEAR_CART(state) {
    state.cartItems = {}
    localStorage.setItem('cart', JSON.stringify(state.cartItems))
  },
  INCREMENT_TOTAL_QUANTITY(state, quantity) {
    state.totalQuantity += quantity
  },
  DECREMENT_TOTAL_QUANTITY(state, quantity) {
    state.totalQuantity -= quantity
  },
  INCREASE_TOTAL_PRICE(state, price) {
    state.totalPrice.price += price
  },
  DECREASE_TOTAL_PRICE(state, price) {
    state.totalPrice.price -= price
  },
  CLEAR_PRICE(state) {
    // console.log("Price Cleared");
    state.totalPrice.price = 0
  },
  CLEAR_QUANTITY(state) {
    state.totalQuantity = 0
  },
  SET_CART(state, payload) {
    state.cartItems = payload
    // console.log(payload)
    let q = 0
    let totalPrice = 0
    Object.keys(state.cartItems).forEach((key) => {
      q += payload[key].quantity
      totalPrice += state.cartItems[key].price * state.cartItems[key].quantity
    })

    state.totalPrice.price = totalPrice
    if (q > 1) state.totalPrice.discount = true
    state.totalQuantity = q
  },
  SET_TOTAL_QUANTITY(state, quantity) {
    state.totalQuantity = quantity
  },
  SET_TOTAL_PRICE(state, price) {
    state.totalPrice.price = price
  },
}
export const actions = {
  addProductToCart({ commit, state }, { product, quantity }) {
    // Ако quantity не е подадено, слагаме по default 1
    quantity = quantity || 1
    const cartItem = state.cartItems[product.node.variants[0].sku]
    const price = product.node.pricing.priceRangeUndiscounted.start.gross.amount

    if (!cartItem) {
      product.quantity = quantity
      commit('PUSH_PRODUCT_TO_CART', product)
      commit('INCREMENT_TOTAL_QUANTITY', quantity)
      commit('INCREASE_TOTAL_PRICE', price * quantity)
    } else {
      commit('INCREMENT_PRODUCT_QUANTITY', {
        sku: cartItem.node.variants[0].sku,
        quantity: quantity,
      })
      commit('INCREMENT_TOTAL_QUANTITY', quantity)
      commit('INCREASE_TOTAL_PRICE', price * quantity)
    }
  },
  async actDecreaseProductQuantity({ state, commit }, sku) {
    const cartItem = state.cartItems[sku]
    if (cartItem) {
      if (cartItem.quantity > 1) {
        commit('DECREMENT_PRODUCT_QUANTITY', cartItem)
        commit('DECREMENT_TOTAL_QUANTITY', 1)
        commit('DECREASE_TOTAL_PRICE', cartItem.price)
      } else if (cartItem.quantity === 1) {
        commit('REMOVE_PRODUCT_FROM_CART', sku)
        commit('DECREMENT_TOTAL_QUANTITY', 1)
        commit('DECREASE_TOTAL_PRICE', cartItem.price)
      }
    }
  },
  actResetCart({ commit }) {
    commit('CLEAR_CART')
    commit('CLEAR_PRICE')
    commit('CLEAR_QUANTITY')
  },
}
