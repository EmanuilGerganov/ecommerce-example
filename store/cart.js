export const state = () => ({
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
});

export const mutations = {
  ADD_PRODUCT(state, product) {
    const cartItem = state.items.find((item) => item.title == item.title);
    console.log(cartItem);
    cartItem
      ? (cartItem.quantity += product.quantity)
      : state.items.push(product);
    // find if same product
  },
  REMOVE_PRODUCT(state, product) {
    // state.items.push(prod);
    // state.items.find().remove
  },
  ADD_QUANTITY(state, count) {
    state.totalQuantity += count;
  },
  REMOVE_QUANTITY(state, count) {
    state.totalQuantity -= count;
  },
};

// export const actio

// how to save items = item count,

// const items = ["one", "two", "three"];
