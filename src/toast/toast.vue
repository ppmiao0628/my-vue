<template>
  <div class="wrap">
    在下是弹窗
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
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrap{
    position: fixed;
    left: 50%;
    top: 50%;
    background: rgba(0,0,0,.35);
    padding:10px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    -o-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    color: #FFFFFF;
  }
</style>
