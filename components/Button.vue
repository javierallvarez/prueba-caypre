<template>
  <button
    @click="addArticulo(articulo)"
    type="button"
    class="my-button v-btn v-btn--is-elevated v-btn--has-bg v-btn--right v-size--default"
  >
    AÑADIR AL CARRITO
  </button>
</template>


<script>
import { mapMutations } from 'vuex'

export default {
  name: "Button",
  props: {
    articulo: {
      type: Number
    }
  },
  methods: {
    addArticulo (e) {
      this.$store.commit('carrito/addArticulo', e.target.value)
    },
    ...mapMutations({
      addArticulo: 'carrito/addArticulo'
    })
  }
}
</script>


<style>
  .my-button{
    background-color: #fc5012;
    border-color: #fc5012;
    color: white;
    font-weight: 700;
  }
  button:hover{
    background: #002376;
    transition: .6s;
  }
</style>
