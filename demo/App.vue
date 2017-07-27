<template>
  <div id="app">
      <pagination paginationClass='myStyle' @pageChange="pageChange" :dataTotal="dataTotal" :pageEach="pageEach" :pageNow="pageNow"></pagination>
  </div>
</template>

<script>
//自定义样式
//import myStyle from '../src/pagination/myStyle.css'
export default {
  name: 'app',
  components:{
  },
  data(){
    return {
        dataTotal : 810,  //数据总条数
        pageEach : 8,     //每页数据显示条数
        pageNow : 1      //当前页数
    }
  },
  methods:{
    //当前页码
    pageChange(a){
      console.log(a)
    }
  }
}
</script>
