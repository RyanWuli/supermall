<template>
  <div id="app">

    <h2>{{message}}</h2>
    <h2>----- modules -----</h2>
    <!-- 拿到module中的状态 -->
    <h2>{{$store.state.a.name}}</h2>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="updateName">修改名字</button>
    <button @click="asyncUpdateName">异步修改名字</button>
    <h2>----- info -----</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改 info</button>
    <h2>{{$store.state.counter}}</h2>
    <!-- <button @click="$store.state.counter++">+</button>
    <button @click="$store.state.counter">-</button> 不推荐直接修改vuex的状态，通过 mutation 或者 action-->
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCounter(5)">+5</button>
    <button @click="addCounter(10)">+10</button>
    <button @click="addStu">添加学生</button>
    <hello-vuex></hello-vuex>

    <!-- app 计算属性 -->
    <!-- <h2>{{more20stu}}</h2> -->

    <!-- store getter -->
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>

    <h2>---------------演示 vuex 的 getter-----------------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.moreAgeStu(8)}}</h2>
  </div>
</template>

<script>
  import HelloVuex from './components/HelloVuex.vue'
  import {INCREMENT} from './store/mutations-types.js'
  export default {
    name: 'App',
    components: {
      HelloVuex
    },
    data() {
      return {
        message: '我是 app 组件'
      }
    },
    methods: {
      addition() {
        this.$store.commit(INCREMENT)
      },
      subtraction() {
        this.$store.commit('decrement')
      },
      addCounter(num) {
        // payload 负载（说白了就是传参）
        // this.$store.commit('incrementNum', num)

        // 第二种风格 //
        this.$store.commit({
          type: 'incrementNum',
          num // num：num
        })
      },
      addStu() {
        const stu =  {id: '000006', name: '释小龙', age: 15}
        this.$store.commit('addStudent', stu)
      },
      updateInfo() {
        console.log('修改 info');
        // this.$store.commit('updateInfo') // 这是没有异步的时候可以直接提交到mutations
        // this.$store.dispatch('aUpdateInfo', '我是 payload') // 有异步操作的时候先到 action

        // 普通回调方法
        // this.$store.dispatch('aUpdateInfo', {
        //   message: 'hello',
        //   success: () => {
        //     console.log('异步完成了');
        //   }
        // }) // 异步执行完之后需要回调

        // 优雅的回调// 异步执行完之后需要回调
        this.$store.dispatch('aUpdateInfo', 'hello').then(res => {
          console.log(res);
          console.log('异步执行完成');
        })
      },
      updateName() {
        this.$store.commit('updateName', 'Jay')
      },
      asyncUpdateName() {
        this.$store.dispatch('aUpdateName')
      }
    },
    computed: {
      // more20stu() {
      //   return this.$store.state.students.filter(s => s.age >= 22)
      // }
    }
  }
</script>

<style>

</style>
