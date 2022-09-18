<template>
  <v-pagination v-model="page" :length="length" circle color="blue darken-4 btn-pag estasi" class="pagination"> </v-pagination>
</template>


<script>
export default {
  created() {
    this.length = Math.ceil(this.$store.getters["articulos/getTotal"] / 4);
  },
  data() {
    return {
      length: this.length,
    };
  },
  props: {
    cambioDePagina: {
      type: Function
    }
  },
  computed: {
    page: {
      get() {
        return parseInt(this.$route.query.page) || 1;
      },
      set(page) {
        if (this.page !== page) {
          this.$router.replace({ query: { ...this.$route.query, page } });
        }
      },
    },
  },
};
</script>


<style>
  .pagination {
    margin: 3rem 0 5rem 0;
  }
</style>
