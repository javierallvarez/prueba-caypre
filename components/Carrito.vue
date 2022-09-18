<template>
  <div class="text-center ma-4">

    <v-badge color="blue darken-4">
      <span slot="badge"> {{ getCantidad }} </span>
      <v-icon large color="orange darken-4"> mdi-cart </v-icon>
    </v-badge>
  </div>
</template>

<script>
import CardArticulo from "../components/CardArticulo.vue";
import Header from "../components/Header.vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("carrito", ["getCantidad", "getArticulos" ], "articulos", ["getArticulo"]),
  },
  components: { CardArticulo, Header },
  created () {
    this.carrito = this.$store.getters["carrito/getArticulos"]
  },
  data: () => ({
    showMenu: false
  })
};

</script>
