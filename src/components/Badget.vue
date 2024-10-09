<script setup>
import { ref } from "vue";
import Alert from "./Alert.vue";
const badget = ref(0);
const error = ref("");

const emit = defineEmits(["define-badget"]);

const defineBudget = () => {
  if (badget.value <= 0 || badget.value === "") {
    error.value = "Presupuesto no válido";
    setTimeout(() => {
      error.value = "";
    }, 3000);
    return;
  }
  emit("define-badget", badget.value);
};
</script>
<template>
  <form class="badget" @submit.prevent="defineBudget">
    <Alert v-if="error">
      {{ error }}
    </Alert>

    <div class="field">
      <label for="new-badget">Definir Presupuesto</label>

      <input
        id="new-badget"
        class="new-badget"
        placeholder="Añade tu badget"
        type="number"
        min="0"
        v-model.number="badget"
      />
    </div>

    <input type="submit" value="Definir Presupuesto" />
  </form>
</template>
<style scoped>
.badget {
  width: 100%;
}
.field {
  display: grid;
  gap: 2rem;
}
.badget label {
  font-size: 2.2rem;
  text-align: center;
  color: var(--azul);
}
.badget input[type="number"] {
  background-color: var(--gris-claro);
  border-radius: 1rem;
  padding: 1rem;
  border: none;
  font-size: 2.2rem;
  text-align: center;
}
.badget input[type="submit"] {
  background-color: var(--azul);
  border: none;
  padding: 1rem;
  text-align: center;
  font-size: 2rem;
  margin-top: 2rem;
  color: var(--blanco);
  font-weight: 900;
  width: 100%;
  transition: background-color 300ms ease;
}
.badget input[type="submit"]:hover {
  background-color: #1048a4;
  cursor: pointer;
}
</style>
