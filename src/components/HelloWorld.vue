<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>hello keller</h2>
    <div @click="alertajs">alertajs</div>
    <div v-for="arr in arrObj">
      <div>this {{arr}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        arrObj: [],
        msg: 'this is hello page'
      }
    },
    ready: function () {
//      let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
//      for (let i = 0; i < arr.length; i++) {
//        this.arrObj.push(arr[i])
//        for (let j = 0; j < 99999; j++) {
//          for (let a = 0; a < 9999; a++) {
//            console.log(a)
//          }
//        }
//      }
    },
    methods: {
      alertajs: function () {
        let self = this
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
        self.arrObj = []
        let i = 0
        let a = setInterval(function () {
          self.arrObj.push(arr[i++])
          if (i > 9) {
            clearInterval(a)
            a = null
          }
        }, 10)
//        require.ensure([], function () {
//          require('../utiljs/utiljs.js')
//        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  .hello {
    background-color: #42b983;
  }
</style>
