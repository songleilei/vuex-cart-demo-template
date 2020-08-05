const state = {
  cartProducts: [],
}
const getters = {
  totalCount(state) {
    return state.cartProducts.reduce((sum, prod) => sum + prod.count, 0)
  },
  totalPrice(state) {
    return state.cartProducts.reduce((sum, prod) => sum + prod.totalPrice, 0)
  },
}
const mutations = {
  addToCart(state, product) {
    const prod = state.cartProducts.find(item => item.id === product.id)
    if (prod) {
      prod.count++
      prod.isChecked = true
      prod.totalPrice = prod.count * prod.price
    } else {
      state.cartProducts.push({
        ...product,
        count: 1,
        isChecked: true,
        totalPrice: product.price,
      })
    }
  },
  deleteFromCart(state, prodId) {
    const index = state.cartProducts.findIndex(item => item.id === prodId)
    index !== -1 && state.cartProducts.splice(index, 1)
  },
}
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
