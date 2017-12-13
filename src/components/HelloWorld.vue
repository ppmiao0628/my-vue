<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>hello keller</h2>
    <div @click="alertajs">alertajs</div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'this is hello page'
      }
    },
    methods: {
      alertajs: function () {
        require.ensure([], function () {
          require('../utiljs/utiljs.js')
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  .hello{
    background-color: #42b983;
  }
</style>
