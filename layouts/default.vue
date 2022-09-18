<template>
  <v-app>
    <v-main>
      <v-container>
        <Header/>
        <nuxt />
      </v-container>
    </v-main>
    <Footer/>
  </v-app>
</template>


<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue';

  export default {
    components: { Header, Footer }
}

</script>
