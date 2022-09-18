<template>
  <div class="my-card letter-changer">
    <nuxt-link :to="'/articulo/' + id">
      <Descuento/>

      <img :src="imagen_url" :alt="nombre" />
      <h2 class="nombre">{{ nombre }}</h2>
      <Precios :precio="precio"/>
      <Disponible/>
    </nuxt-link>
    <Button :articulo="id" />
    <small>Articulo id #{{id}}</small>
  </div>
</template>


<script>
import Button from "./Button.vue";
import Descuento from "./Descuento.vue";
import Disponible from "./Disponible.vue";
import Precios from "./Precios.vue";


export default {
  name: "CardArticulo",
  props: {
    id: {
      type: Number
    },
    nombre: {
      type: String
    },
    desc_corta: {
      type: String
    },
    precio: {
      type: Number
    },
    imagen_url: {
      type: String
    }
  },
  components: { Button, Descuento, Disponible, Precios },
};
</script>



<style lang="scss">
* {
  font-family: Barlow, sans-serif;
  text-decoration: none;
}

.my-card {
  align-items: center;
  background: white;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 250px;
  padding: 2rem 1rem;
  text-align: center;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
               0px 6px 10px 0px rgb(0 0 0 / 14%),
               0px 1px 18px 0px rgb(0 0 0 / 12%);
}

.my-card img {
  width: 90%;
  margin-bottom: 2rem;
}

.nombre {
  font-size: 16px;
  margin-bottom: 2rem;
}

.my-card:hover {
  transition: all 0.5s ease-in-out;
  box-shadow: 0px 5px 9px -1px #f2931f47,
               0px 6px 10px 0px #f2931f47,
               0px 1px 18px 0px #f2931f47;
  img{
    object-fit: contain;
    transition: all 0.5s ease-in-out;
    margin-bottom: 1.5rem;
	}

  button:hover{
    background: #002376;
    transition: .6s;
  }

  button {
    background: linear-gradient(270deg, #fa5f31, #ab5d21);
    background-size: 400% 400%;
    -webkit-animation: AnimationName 1s ease infinite;
    -moz-animation: AnimationName 1s ease infinite;
    animation: AnimationName 1s ease infinite;
  }

@-webkit-keyframes AnimationName {
    0%{background-position:0% 51%}
    50%{background-position:100% 50%}
    100%{background-position:0% 51%}
  }
@-moz-keyframes AnimationName {
    0%{background-position:0% 51%}
    50%{background-position:100% 50%}
    100%{background-position:0% 51%}
  }
@keyframes AnimationName {
    0%{background-position:0% 51%}
    50%{background-position:100% 50%}
    100%{background-position:0% 51%}
  }
}


</style>
