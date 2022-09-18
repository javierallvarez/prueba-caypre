import Data from '../plugins/static/data'

export const state = () => ({
  articulos: Data.articulos,
  total: Data.articulos.length,
})


export const getters = {
  getArticulos(state) {
    return state.articulos;
  },
  getTotal(state) {
    return state.total;
  },
  getArticulo: (state) => (id) => {
    return state.articulos.filter(n => n.id === id);
  }
}

