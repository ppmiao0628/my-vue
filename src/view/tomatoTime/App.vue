<template>
  <div class="hello">



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
      }
    }
  }
</script>
<style scoped>

</style>
