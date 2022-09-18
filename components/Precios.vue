<template>
    <div class="precios">
        <h5>{{ precio }}€</h5>
        <h4>{{ precio * 0.9 }}€</h4>
    </div>
</template>


<script>
  export default {
    name: "Precios",
    props: {
      precio: {
      type: Number
    },
    }
  };
</script>


<style>
  .precios {
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

  .precios h4 {
  font-size: 40px;
  color: rgb(252, 80, 18);
    }

  .precios h5 {
  text-decoration: line-through;
  color: #002376;
  font-size: 20px;
  }
</style>
