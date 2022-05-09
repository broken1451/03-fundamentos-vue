<template>
  <div>
    <!-- <h2>{{ title || "Counter" }}!!</h2> -->
    <h2>{{ customTitle }}</h2>
    <!-- <p>{{counter}} <sup>2</sup> = {{counter * counter}} </p> -->
    <!-- <p>{{counter}} <sup>2</sup> = {{getSquare()}} </p>
    <p>{{counter}} <sup>2</sup> = {{getSquare()}} </p>
    <p>{{counter}} <sup>2</sup> = {{getSquare()}} </p>
    <p>{{counter}} <sup>2</sup> = {{getSquare()}} </p>
    <p>{{counter}} <sup>2</sup> = {{getSquare()}} </p>
    <p>{{counter}} <sup>2</sup> = {{getSquare()}} </p>
    <p>{{counter}} <sup>2</sup> = {{getSquare()}} </p>
    <p>{{counter}} <sup>2</sup> = {{getSquare()}} </p>
    <p>{{counter}} <sup>2</sup> = {{getSquare()}} </p> -->
    <!-- <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p> -->
    <p data-testid="counter">{{counter}}</p>
    <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
    <div>
      <!-- <button v-on:click="increment">+1</button>
      <button v-on:click="decrement">-1</button> -->
      <button @click="increment">+1</button>
      <button @click="decrement">-1</button>
    </div>
  </div>
</template>

<script>
export default {
  // la diferencia entre una property y un atributo es :
  // las properties estan previamente definidas en el objeto o en la opcion props/properties
  // props: ["title", "start"],

  props: {
    title: String,
    start: {
      type: Number,
      // required: false,
      default: 100,
      validator(value){
        console.log({value});
        return value >= 0
      }
    },
  },
  name: "Counter",
  data() {
    return {
      counter: this.start,
    };
  },
  methods: {
    getSquare() {
      console.log("helo");
      return this.counter * this.counter;
    },
    increment() {
      this.counter = this.counter + 1;
    },
    decrement() {
      this.counter = this.counter - 1;
    },
  },
  // las propiedades computadas se guardan en chache de vue, y se llama como una propiedad en el html como el counter, o como se tiene en la data y siempre retorna
  computed: {
    squareCounter() {
      console.log("getSquareCounter");
      return this.counter * this.counter;
    },
    customTitle() {
      console.log("customTitle", this.title);
      return this.title ? this.title : "Counter";
      // return this.title || 'Conuter';
      // if (this.title) {
      //   return this.title;
      // } else{
      //     return 'Conuter'
      // }
    },
  },
};
</script>

<style>
button {
  background-color: #64bb87;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 15px;
  transition: 0.3s ease-in-out;
}
button:hover {
  background-color: #64bb87;
  transition: 0.3s ease-in-out;
}
</style>