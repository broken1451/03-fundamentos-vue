<template>
  <div>
    <img v-if="img" :src="img" alt="" srcset="" />
    <div class="bg-dark"></div>
    <div class="indecision-container">
      <input
        v-model="question"
        type="text"
        placeholder="Realiza una pregunta"
      />
      <p>Recuerda terminar con un signo de interrogacion(?)</p>
      <div v-if="isValidQuestion">
        <h2>{{ question }}</h2>
        <h1>{{ answer }}</h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Indecision",
  data() {
    return {
      question: null,
      answer: null,
      img: null,
      isValidQuestion: false,
    };
  },
  methods: {
    async getAnswer() {
      try {
        this.answer = "Pensando...";
        this.isValidQuestion = false;
        let url = "https://yesno.wtf/api";
        const { answer, image } = await fetch(url).then((r) => r.json());
        this.answer = answer === "yes" ? "Si!" : "No!";
        this.img = image;
      } catch (error) {
        console.log("indesicion component: ", error);
        this.answer = 'No se pudo cargar del API';
        this.img = null;

      }
    },
  },
  watch: {
    // se pueden poner observables o estar pendiente de los cambios de muchas cosas, mismo valor q en la data question
    question(value, oldvalue) {
      this.isValidQuestion = false;
      console.log({ value });
      this.img = null;
      if (!value.includes("?")) {
        return;
      }
      // TODO realizar peticion http
      this.getAnswer();
      this.isValidQuestion = true;
    },
  },
};
</script>
<style scoped>
/* scoped significa q solo el css es para este componente */

img,
.bg-dark {
  height: 100vh;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  width: 100vw;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
  position: relative;
  z-index: 99;
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}
input:focus {
  outline: none;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 0px;
}

h1,
h2 {
  color: white;
}

h2 {
  margin-top: 150px;
}
</style>