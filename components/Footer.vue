<template>
  <v-footer v-bind="localAttrs" :padless="padless">
    <v-card
      flat
      tile
      width="100%"
      class="red lighten-1 text-center"
      color="blue darken-4"
    >
      <v-divider></v-divider>
      <v-card-text class="white--text">
        &copy; {{ new Date().getFullYear() }} —
        <strong> Prueba para candidatos</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    items: ["default", "absolute", "fixed"],
    padless: false,
    variant: "default",
  }),
  computed: {
    localAttrs() {
      const attrs = {};
      if (this.variant === "default") {
        attrs.absolute = false;
        attrs.fixed = false;
      } else {
        attrs[this.variant] = true;
      }
      return attrs;
    },
  },
};
</script>
