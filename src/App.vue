<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <Counter title="Entraron" />
    <Counter  title="Salieron"/> -->
    <!-- <Counter title="Entraron" /> -->
    <!-- <Counter /> manda un NaN-->
    <!-- <Counter v-bind:start="10"/> transforma la variable en expresion js -->
    <!-- <Counter start /> manda string vacio -->
    <!-- <Counter  v-bind:start="10" /> -->
    <!-- <Counter  /> -->
    <Indecision  />
  </div>
</template>

<script>
// import Counter from "./components/Counter";
import Indecision from './components/indecision.vue';

export default {
  name: "App",
  components: {
    // Counter,
    Indecision
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
