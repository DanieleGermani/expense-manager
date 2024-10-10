<script setup>
import { ref, reactive } from "vue";
import iconNewExpense from "./assets/img/nuevo-gasto.svg";
import { generateId } from "./helpers";

import Badget from "./components/Badget.vue";
import ControlBadget from "./components/ControlBadget.vue";
import Modal from "./components/Modal.vue";
import Expense from "./components/Expense.vue";
const badget = ref(0);
const avalableBudget = ref(0);
const gastos = ref([]);
const modal = reactive({ showModal: false, animated: false });
const gasto = reactive({
  nombre: "",
  cantidad: "",
  categoria: "",
  id: null,
  fecha: Date.now(),
});

const difineBudget = (amount) => {
  badget.value = amount;
  avalableBudget.value = amount;
};

const showModal = () => {
  modal.showModal = true;
  setTimeout(() => {
    modal.animated = true;
  }, 300);
};

const hideModal = () => {
  modal.animated = false;
  setTimeout(() => {
    modal.showModal = false;
  }, 300);
};

const guardarGasto = () => {
  gastos.value.push({
    ...gasto,
    id: generateId(),
  });
  Object.assign(gasto, {
    nombre: "",
    cantidad: "",
    categoria: "",
    id: null,
    fecha: Date.now(),
  });
  hideModal();
};
</script>

<template>
  <div :class="{ fixed: modal.showModal }">
    <header>
      <h1>Planificador de Gastos</h1>
      <div class="header-container container shadow">
        <Badget v-if="badget === 0" @define-badget="difineBudget" />
        <ControlBadget
          v-else
          :badget="badget"
          :avalableBudget="avalableBudget"
        />
      </div>
    </header>
    <main v-if="badget > 0">
      <div class="container listado-gastos">
        <h2>{{ gastos.length > 0 ? "Gastos" : "No hay gastos" }}</h2>
        <Expense v-for="gasto in gastos" :key="gasto.id" :gasto="gasto" />
      </div>
      <div class="new-expense-container">
        <img :src="iconNewExpense" alt="" @click="showModal" />
      </div>
      <Modal
        v-if="modal.showModal"
        @close-modal="hideModal"
        @guardar-gasto="guardarGasto"
        v-model:nombre="gasto.nombre"
        v-model:cantidad="gasto.cantidad"
        v-model:categoria="gasto.categoria"
        :modal="modal"
      />
    </main>
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

.new-expense-container {
  position: fixed;
  bottom: 5rem;
  right: 5rem;
}

.new-expense-container img {
  width: 5rem;
  cursor: pointer;
}

.listado-gastos {
  margin-top: 10rem;
}
.listado-gastos h2 {
  font-weight: 900;
  color: var(--gris-oscuro);
}
.fixed {
  overflow: hidden;
  height: 100vh;
}
</style>
