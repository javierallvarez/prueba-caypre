<template>
  <div class="fat-card elevation-6">
    <Descuento />
    <img v-bind:src="articulo.imagen_url" v-bind:alt="articulo.nombre" />
    <section>
      <h3>{{ articulo.nombre }}</h3>
      <small>Modelo: 24B1H</small>
      <hr />
      <Precios :precio="articulo.precio" />
      <p>{{ articulo.desc_corta }}</p>
      <Disponible/>
      <Button />
    </section>
  </div>
</template>


<script>
import Descuento from "../../../components/Descuento.vue";
import Button from "../../../components/Button.vue";
import Precios from "../../../components/Precios.vue";
import Disponible from "../../../components/Disponible.vue";


export default {
  head() {
    return {
      title: `Articulo ${this.id}`,
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.articulo = this.$store.getters["articulos/getArticulo"](
      Number(this.id)
    )[0];
  },
  components: { Descuento, Button, Precios, Disponible },
  props: {
    precio: {
      type: Number,
    },
  },
};
</script>


<style lang="scss">
.fat-card {
  align-items: flex-start;
  background: white;
  border-radius: 6px;
  display: flex;
  gap: 2rem;
  padding: 2rem 1rem;
  text-align: center;
  margin-top: 7rem;
  text-align: left;

  img {
    width: 60%;
  }

  h3 {
    color: #fc5012;
    font-size: 30px;

  }

  small {
    color: gray;
  }

  section{
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .precios{
    flex-direction: row-reverse;
  }

  .precios h4 {
    font-size: 50px;
  }

  .disponible h3{
  color: green;
  font-size: 20px;
  }


}
</style>
