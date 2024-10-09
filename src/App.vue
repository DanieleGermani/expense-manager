<script setup></script>

<template>
  <div>
    <header><h1>Planificador de Gastos</h1></header>
    <Filter />
  </div>
</template>

<style>
:root {
  --azul: #3b82f6;
  --blanco: #ffffff;
  --gris-claro: #f5f5f5;
  --gris-oscuro: #47525e;
  --gris: #64748b;
  --negro: #000000;
}
html {
  font-size: 62.5%;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
body {
  font-family: "Lato", sans-serif;
  font-size: 1.6rem;
  background-color: var(--gris-claro);
}
h1 {
  font-size: 4rem;
}
h2 {
  font-size: 3.2rem;
}
header {
  background-color: var(--azul);
}
header h1 {
  padding: 3rem 0;
  margin: 0;
  color: var(--blanco);
  text-align: center;
}
</style>
