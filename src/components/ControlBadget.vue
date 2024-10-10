<script setup>
import image from "../assets/img/grafico.jpg";
import { amountFormat } from "../helpers";

const props = defineProps({
  badget: {
    type: Number,
    required: true,
  },
  avalableBudget: {
    type: Number,
    required: true,
  },
  spent: {
    type: Number,
    required: true,
  },
});
defineEmits(["rest-app"]);
</script>

<template>
  <div class="container">
    <div class="grafic-container">
      <img :src="image" alt="" />
    </div>
    <div class="budget-container">
      <button @click="$emit('rest-app')" class="reset-app">Resetear App</button>
      <p>
        <span>Presupuesto: {{ amountFormat(badget) }}</span>
      </p>
      <p>
        <span>Disponible: {{ amountFormat(avalableBudget) }}</span>
      </p>
      <p>
        <span>Gastado: € {{ amountFormat(spent) }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
}
.porcentaje {
  position: absolute;
  margin: auto;
  top: calc(50% - 1.5rem);
  left: 0;
  right: 0;
  text-align: center;
  z-index: 100;
  font-size: 3rem;
  font-weight: 900;
  color: var(--gris-oscuro);
}
.container {
  display: flex;
  flex-direction: column;
}
.container > :first-child {
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .container {
    flex-direction: row;
    gap: 4rem;
    align-items: center;
  }
  .container > :first-child {
    margin-bottom: 0;
  }
}

.reset-app {
  background-color: #db2777;
  border: none;
  padding: 1rem;
  width: 100%;
  color: var(--blanco);
  font-weight: 900;
  text-transform: uppercase;
  border-radius: 1rem;
  transition-property: background-color;
  transition-duration: 300ms;
}
.reset-app:hover {
  cursor: pointer;
  background-color: #c11d67;
}
.budget-container {
  width: 100%;
}
.budget-container p {
  font-size: 2.4rem;
  text-align: center;
  color: var(--gris-oscuro);
}
@media (min-width: 768px) {
  .budget-container p {
    text-align: left;
  }
}
.budget-container span {
  font-weight: 900;
  color: var(--azul);
}
</style>
