<template>
  <div id="app">
<!--     <MenuC
  ></MenuC> -->
  	<Menu></Menu>
  	<Menu2></Menu2>
  </div>
</template>

<script>
// 组件内可用
import { Menu,Menu2 } from '../dist'
export default {
  name: 'app',
  components:{
  	Menu,
  	Menu2
  },
  data(){
    return {
    }
  },
}
</script>

