
export const state = () => ({
  articulos: [],
  cantidad: 0
})

export const getters = {
  getArticulos(state) {
    return state.articulos
  },
  getCantidad(state) {
    return state.cantidad
  }
}

export const mutations = {
  addArticulo(state, articulo) {
    state.articulos.push(articulo)
    state.cantidad++
  }
}

