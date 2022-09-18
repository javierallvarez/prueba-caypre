<template>
    <div class="descuento">
      <h2 class="des-texto">DESCUENTO 10%</h2>
    </div>
</template>


<script>
  export default {
    name: "Descuento",
  };
</script>


<style>
  .descuento {
  background: linear-gradient(
    to right,
    rgb(135, 27, 27) 0%,
    rgba(218, 47, 46, 1) 30%
  );
  border: 3px solid #863c3c;
  clip-path: polygon(50% 0, 90% 0%, 70% 100%, 0 100%, 2% 0%);
  color: white;
  height: 40px;
  margin-left: -25px;
  padding: 0px 6rem 0 1rem;
  position: absolute;
}

.des-texto {
  font-size: 20px;
}
</style>
