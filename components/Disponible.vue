<template>
    <div class="disponible">
      <h3>Disponible</h3>
      <v-icon color="green darken-3"> mdi-check</v-icon>
    </div>
</template>


<script>
  export default {
    name: "Disponible",
  };
</script>


<style>
.disponible {
  color: green;
  display: flex;
  font-weight: 900;
  gap: 8px;
  justify-content: center;
  margin-top: 2rem;
}

</style>
