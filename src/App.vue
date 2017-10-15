<template>
  <div id="app">
    <input v-model="parentMsg">
    <br>
    <child v-bind:message="parentMsg"></child>
    <child message="1"></child>
    <child message=true></child>
    <div>父组件{{ total }}</div>
    <p>{{ total }}</p>
    <button-counter v-on:increment="incrementTotal"></button-counter>
    <button-counter v-on:increment="incrementTotal"></button-counter>
    <div>{{parentMsg}}</div>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        parentMsg: '',
        total: 0
      }
    },
    methods: {
      incrementTotal: function () {
        this.total += 1
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
