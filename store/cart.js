export const state = () => ({
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
  modal: false,
  modalData: {},
});

export const mutations = {
  TOGGLE_MODAL(state, payload) {
    state.modal = payload;
  },
  SET_MODAL_DATA(state, payload) {
    state.modalData = payload;
  },
  DECREASE_QUANTITY(state, product) {
    const item = state.items.find((item) => item.title == product.title);

    console.log(item, "ITEM");
    if (item.quantity == 1) this.commit("cart/REMOVE_PRODUCT", product);
    else {
      item.quantity--;
      state.totalQuantity--;
      state.totalPrice -= product.price;
      this.commit("cart/SAVE_TO_LOCAL_STORAGE");
    }
  },
  ADD_PRODUCT(state, product) {
    const cartItem = state.items.find((item) => item.title == product.title);
    console.log(cartItem, "product being added to cart");
    cartItem
      ? (cartItem.quantity += product.quantity)
      : state.items.push(product);
    console.log(state.items, "items in cart");
    this.commit("cart/SAVE_TO_LOCAL_STORAGE");
    state.totalQuantity += product.quantity;
    state.totalPrice += product.price * product.quantity;
    // find if same product
  },
  REMOVE_PRODUCT(state, product) {
    state.items = state.items.filter((item) => item.id != product.id);
    // remove qunatity
    state.totalQuantity -= product.quantity;
    state.totalPrice -= product.price * product.quantity;
    this.commit("cart/SAVE_TO_LOCAL_STORAGE");
  },
  SET_CART(state, localCartItems) {
    let quantity = 0;
    let price = 0;
    localCartItems.forEach((item) => {
      quantity += item.quantity;
      price += item.quantity * item.price;
    });
    state.totalQuantity = quantity;
    state.totalPrice = price;
    state.items = localCartItems;
  },
  SAVE_TO_LOCAL_STORAGE(state) {
    localStorage.setItem("cart", JSON.stringify(state.items));
  },
};
