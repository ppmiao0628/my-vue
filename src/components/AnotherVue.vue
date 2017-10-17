<template>
  <div class="basebk">
    <div>anothervue</div>
    <div>{{msg}}</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '这是anothervue'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .basebk {
    background-color: #42b983;
  }
</style>
