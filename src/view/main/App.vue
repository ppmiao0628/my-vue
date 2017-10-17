<template>
  <div class="hello">
    <img src="../../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>hello keller</h2>
    <ul>
      <router-link to='/hello' tag='li'><a href="/hello">hello</a></router-link>
      <router-link to='/another' tag='li'><a href="/another">another</a></router-link>
      <router-link to='/test' tag='li'><a href="/test">test</a></router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'this is the main page'
      }
    }
  }
</script>
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
