<template>
<dl id='my_bottom_menu2' :style='{backgroundColor:background}' >
  <!-- <dd v-for='(item,index) in list' :class='type===item.type?"on":""'>-->
  <dd v-for='(item,index) in list'  @click='toOther(item.to,type===item.type||+type===index+1)'>
    <i :class='item.type'></i>
    <span>{{item.name}}</span>
  </dd>
</dl>
</template>

<script>
// import 'ment'
export default {
  name: 'bottom-menu2',
  props: ['background',"type"],
  data() {
    return {
      list: [{
        name: '首页',
        type: 'main',
        to:'main',
      }, {
        name: '已购',
        type: 'bied',
        to:'bied',
      }, {
        name: '关注',
        type: 'concern',
        to: 'concern',

      }, {
        name: '我的',
        type: 'me',
        to: 'me',
      }]
    }
  },
  methods:{
    toOther:function(to,run) {
      
      // console.log(this.$route.path,to)
      // if(!run){
      //     location.hash = to;
      // }
    }
  }
}
</script>
<style lang="scss" scoped src='./menu2.scss'></style>
