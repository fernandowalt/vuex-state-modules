
<template>
  <h1>Counter - vueX</h1>
  <h2>Direct Acces:{{ $store.state.counter.count }}</h2>
  <h1>Computeds:{{ countComputed }}</h1>
  <h1>mapState:{{ count }}</h1>
  <h1>LastMutations: {{ lastMutations }}</h1>

  <h3>direct getter:{{ squareCount }}</h3>

  <div>
    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button @click="incrementRandomInt" :disabled="isLoading">random</button>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  computed: {
    countComputed() {
      return this.$store.state.counter.count;
    },
    ...mapGetters("counter", ["squareCount"]),
    ...mapState("counter", ["count", "lastMutations", "isLoading"]),
  },
  methods: {
    increment() {
      this.$store.commit("counter/increment");
    },
    incrementBy() {
      this.$store.commit("counter/incrementBy", 5);
    },

    // ...mapActions(["incrementRandomInt"]),
    ...mapActions("counter", ["incrementRandomInt"]),
  },
};
</script>

