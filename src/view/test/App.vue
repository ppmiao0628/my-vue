<template>
  <div class="hello">
    <div class="info">agentInfo：{{agentInfo}}</div>
    <div class="info">appCodeName：{{appCodeName}}</div>
    <div class="info">appVersion：{{appVersion}}</div>
    <transition-group name="list-complete" tap="p">
      <span v-for="itt in item" :key="itt" class="list-complete-item" @click="add">
        {{itt}}
      </span>
    </transition-group>
    <transition name="bounce" mode="out-in">
      <div v-if="bshow" key="1" @click="bshow=!bshow">
        <p>1</p>
        <img src="../../assets/logo.png">
      </div>
      <div v-else key="2" @click="bshow=!bshow">
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
        item: [14, 53, 65, 99, 98, 12, 2, 3, 4, 5, 6, 7, 8, 9],
        nextNum: 10,
        parentMsg: '',
        checkedMsg: [],
        radioMsg: '',
        age: 0,
        show: true,
        show1: true,
        bshow: true,
        agentInfo: navigator.userAgent,
        appCodeName: navigator.appCodeName,
        appVersion: navigator.appVersion,
        total: 0
      }
    },
    methods: {
      quickSort: function (left, right) {
        let i, j, t, temp
        temp = this.item[left]
        i = left
        j = right
        while (i !== j) {
          while (this.item[j] >= temp && i < j) {
            j--
          }
          while (this.item[i] <= temp && i < j) {
            i++
          }
          if (i < j) {
            t = this.item[i]
            this.item[i] = this.item[j]
            this.item[j] = t
          }
        }
        this.item[left] = this.item[i]
        this.item[i] = temp
        this.quickSort(left, i - 1)
        this.quickSort(i + 1, right)
      },
      randomIndex: function () {
        return Math.floor(Math.random() * this.items.length)
      },
      add: function () {
//        this.items.splice(this.randomIndex(), 0, this.nextNum++)
        console.log(this.item)
        this.quickSort(0, this.item.length)
        console.log(this.item)
      },
      remove: function () {
        this.items.splice(this.randomIndex(), 1)
      },
      incrementTotal: function () {
        this.total += 1
      }
    }
  }
</script>
<style scoped>
  .list-item {
    display: inline-block;
    margin-right: 10px;
    background-color: #42b983;
  }

  /*.list-enter-active, .list-leave-active {*/
  /*transition: all 1s;*/
  /*}*/

  /*.list-enter, .list-leave-to {*/
  /*opacity: 0;*/
  /*transform: translateY(30px);*/
  /*}*/

  .list-complete-item {
    transition: all 1s;
    display: inline-block;
    margin-right: 10px;
  }

  .list-complete-enter, .list-complete-leave-to
    /* .list-complete-leave-active for below version 2.1.8 */
  {
    opacity: 0;
    transform: translateY(30px);
  }

  .list-complete-leave-active {
    position: absolute;
  }

  .info {
    font-weight: bold;
    font-size: 2rem;
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

  .basecs {
    background-color: #42b983;
  }

  .tgbtn {
    background-color: #42b983;
  }

  .bounce-enter-active, .bounce-leave-active {
    transition: opacity .5s
  }

  .bounce-enter, .bounce-leave-to /* .fade-leave-active in below version 2.1.8 */
  {
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
