<template>
  <div>
    <div class="card-container">
      <CardArticulo
        v-for="articulo in articulos"
        :key="articulo.id"
        :nombre="articulo.nombre"
        :precio="articulo.precio"
        :desc_corta="articulo.desc_corta"
        :imagen_url="articulo.imagen_url"
        :id="articulo.id"
      />
    </div>
    <Paginacion />
  </div>
</template>


<script>
import CardArticulo from "../components/CardArticulo.vue";
import { mapGetters } from "vuex";
import Paginacion from "../components/Paginacion.vue";

export default {
  created() {
    this.posicion = parseInt(this.$route.query.page) || 1;
    this.articulosPorPagina = 4;
    this.articulos = this.getArticulos.slice(
      this.posicion - 1,
      this.articulosPorPagina
    );
  },
  data() {
    return {
      posicion: 1,
      articulosPorPagina: 4,
      articulos: [],
    };
  },
  watch: {
    "$route.query.page"() {
      this.cambioDePagina();
    },
  },
  methods: {
    cambioDePagina() {
      this.posicion = parseInt(this.$route.query.page) || 1;
      this.articulosPorPagina = 4;
      this.articulos = this.getArticulos.slice(
        (this.posicion - 1) * this.articulosPorPagina, (this.posicion - 1) * 4 + 4
      );
    },
  },
  computed: {
    ...mapGetters("articulos", ["getArticulos"]),
  },
  components: { CardArticulo, Paginacion },
};
</script>


<style>
.v-main__wrap {
  background: #f7f7f7;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-top: 8rem;
}

.gray {
  background-color: #fff;
}
</style>
