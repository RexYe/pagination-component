<template>
  <div id="app">
    <cm-title 
      :showMore='true'
      moreLink='http://www.baidu.com'
      title='课程直播' />
    <bottom-menu />
  </div>
</template>

<script>
// 组件内可用
// import TopTitle from '../dist'

export default {
  name: 'app',
  components:{
  	// TopTitle
  },
  data(){
    return {
    }
  },
}
</script>

