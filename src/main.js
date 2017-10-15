// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.component('child', {
  props: {
    message: {
      type: Number,
      required: true
    }
  },
  template: '<div>Hello {{message}} !</div>'
})

Vue.component('button-counter', {
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    incrementCounter: function () {
      this.counter += 1
      this.$emit('increment')
    }
  },
  template: '<button v-on:click="incrementCounter">{{ counter }}</button>'
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
