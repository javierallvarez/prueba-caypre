<template>
  <header
    class="topNavBar v-app-bar v-app-bar--clipped v-app-bar--fixed v-app-bar--is-scrolled"
  >
    <nuxt-link :to="'/'">
      <img
        class="logo"
        src="https://megahogar.es/img/logo/logo_megahogar.png"
        alt="logo"
      />
    </nuxt-link>
    <Carrito />
  </header>
</template>


<script>
import Carrito from "./Carrito.vue";
export default {
  name: "Header",
  components: { Carrito },
};
</script>


<style lang="scss">
header {
  align-items: center;
  background-color: #fff;
  border-color: #fff;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
              0px 4px 5px 0px rgb(0 0 0 / 14%),
              0px 1px 10px 0px rgb(0 0 0 / 12%);
  display: flex;
  height: 100px;
  justify-content: space-between;
  left: 0;
  margin-top: 0;
  padding: 0px 4rem;
  right: 0;
  transform: translateY(0);

  img {
    width: 200px;
  }
}
</style>
