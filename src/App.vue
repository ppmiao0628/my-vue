<template>
  <div id="app">
    <ul>

      <li onclick="history.back(-1)">back</li>
      <router-link to='/' tag='li'><a href="/">main</a></router-link>
      <router-link to='/hello' tag='li'><a href="/hello">hello</a></router-link>
      <router-link to='/another' tag='li'><a href="/another">another</a></router-link>
      <router-link to='/test' tag='li'><a href="/test">test</a></router-link>
    </ul>
    <div>{{parentMsg}}</div>
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
