<template>
  <div class="hello">
    <button @click="bshow=!bshow">click me</button>
    <br>
    <transition name="bounce" mode="out-in">
      <div v-if="bshow" key="1">
        <p>1</p>
        <img src="../../assets/logo.png">
      </div>
      <div v-else key="2">
        <p>2</p>
        <img src="../../assets/logo.png">
      </div>
    </transition>
    <input v-model="parentMsg">
    <br>
    <child v-bind:message="parentMsg"></child>
    <child message="1"></child>
    <child message=true></child>
    <div>父组件{{ total }}</div>
    <p>{{ total }}</p>
    <button-counter v-on:increment="incrementTotal"></button-counter>
    <button-counter v-on:increment="incrementTotal"></button-counter>
    <br>
    <button @click="show=!show" class="tgbtn">Toggle</button>
    <button @click="show1=!show1" class="tgbtn">Toggle1</button>
    <transition name="slide-fade">
      <div v-if="show">
        <input type="checkbox" id="1" value="jack" v-model="checkedMsg"/>
        <label for="jack">jack</label>
        <input type="checkbox" id="2" value="jone" v-model="checkedMsg"/>
        <label for="jone">jone</label>
        <input type="checkbox" id="3" value="jenny" v-model="checkedMsg"/>
        <label for="jenny">jenny</label>
        <br>
        <span>Checked item : {{checkedMsg}} </span>
        <br>
        <input type="radio" id="4" value="jimmy" v-model="radioMsg"/>
        <label for="jimmy">jimmy</label>
        <input type="radio" id="5" value="jeck" v-model="radioMsg"/>
        <label for="jeck">jeck</label>
        <input type="radio" id="6" value="jine" v-model="radioMsg"/>
        <label for="jine">jine</label>
        <br>
        <span>Checked item : {{radioMsg}} </span>
        <br>
        <input v-model.number="age" type="number">
        <br>
        <div v-if="show1" class="basecs">
          <img src="../../assets/logo.png">
        </div>
      </div>
    </transition>
    <hello-world></hello-world>
  </div>
</template>

<script>
  import HelloWorld from '../../components/HelloWorld.vue'

  export default {
    components: {HelloWorld},
    name: 'app',
    data () {
      return {
        parentMsg: '',
        checkedMsg: [],
        radioMsg: '',
        age: 0,
        show: true,
        show1: true,
        bshow: true,
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

  .basecs {
    background-color: #42b983;
  }

  .tgbtn {
    background-color: #42b983;
  }

  .bounce-enter-active, .bounce-leave-active {
  transition: opacity .5s
  }
  .bounce-enter, .bounce-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
  }
  /* 可以设置不同的进入和离开动画 */
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */
  {
    transform: translateX(10px);
    opacity: 0;
  }

  /*.bounce-enter-active {*/
    /*animation: bounce-in 1.5s;*/
  /*}*/

  /*.bounce-leave-active {*/
    /*animation: bounce-in 1.5s reverse;*/
  /*}*/

  /*@keyframes bounce-in {*/
    /*0% {*/
      /*transform: scale(0);*/
    /*}*/
    /*50% {*/
      /*transform: scale(1.5);*/
    /*}*/
    /*100% {*/
      /*transform: scale(1);*/
    /*}*/
  /*}*/
</style>
