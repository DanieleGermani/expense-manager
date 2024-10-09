<script setup>
import { ref } from "vue";
import Badget from "./components/Badget.vue";
import ControlBadget from "./components/ControlBadget.vue";

const badget = ref(0);

const difineBudget = (amount) => {
  badget.value = amount;
};
</script>

<template>
  <div>
    <header>
      <h1>Planificador de Gastos</h1>
      <div class="header-container container shadow">
        <Badget v-if="badget === 0" @define-badget="difineBudget" />
        <ControlBadget v-else />
      </div>
    </header>
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

.container {
  width: 90%;
  max-width: 80rem;
  margin: 0 auto;
}
.header-container {
  margin-top: -5rem;
  transform: translateY(5rem);
  padding: 5rem;
}
.shadow {
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  background-color: var(--blanco);
  border-radius: 1.2rem;
  padding: 5rem;
}
</style>
