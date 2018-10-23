<template>
  <div class="dragapp">
    <div id="box1" v-for="data in datas" class="box green" @touchstart="touchstartfun($event,$index,data)"
         @touchmove="touchmovefun($event,$index,data)"  @touchend="touchendfun($event,$index,item)"> 盒子1
    </div>
    <div id="box2" class="box red"> 盒子2</div>

  </div>
</template>

<script>
  export default {
    name: 'dragapp',
    data () {
      return {
        datas: [
          {name: 'box1'},
          {name: 'box2'}
        ],
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

  .hello {
    background-color: #42b983;
  }

  .box {
    width: 2rem;
    height: 3rem;
    font-size: .3rem;
  }

  .green {
    background-color: greenyellow;
  }

  .red {
    background-color: red;
  }
</style>
