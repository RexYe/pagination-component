<template>
  <div class="pagination"  :class='paginationClass'>
    <div class="block" @click="forwardClick()" :class="{disable: turnTo == 1}">
      <ul><</ul>
    </div>
    <div class="block" :class="{active: turnTo == 1}" @click="pageClick(-1)">
        <ul>1</ul>
    </div>
    <div class="block"  v-if="page_all > 7 && turnTo >4  " @click="pageClick(-3)">
        <ul>...</ul>
    </div>
    <div class="block" v-if="page_all<=7 && page_all>2" @click="pageClick(item)" v-for="item in Math.abs(page_all-2)" :class="{active: turnTo==item+1}">
      <ul>{{item+1}}</ul>
    </div>
    <div class="block" v-if="page_all > 7" v-for="item in 5"  :class="{active: turnTo==(turnTo<5 ? item+1 : turnTo<=page_all-3 ? item+turnTo-3 : item+page_all-6)}" @click="pageClick(item)" >
      <ul>{{turnTo<5 ? item+1 : turnTo<=page_all-3 ? item+turnTo-3 : item+page_all-6}}</ul>
    </div>
    <div class="block"  v-if="turnTo+3 < page_all && page_all > 7" @click="pageClick(-4)">
        <ul>...</ul>
    </div>
    <div class="block" :class="{active: turnTo == page_all}" @click="pageClick(-2)" v-if="page_all != 1">
        <ul>{{this.page_all}}</ul>
    </div>
    <div class="block" @click="backwardClick()" :class="{disable: turnTo == page_all}">
      <ul>></ul>
    </div>
  </div>
</template>

<script>
import './pagination.css'
export default {
  name : 'pagination',
  props : {
    dataTotal:{
      type: Number,
    },
    pageNow:{
      type: Number,
    },
    pageEach:{
      type: Number,
    },
    paginationClass:{
      type: String,
    }
  },
  methods:{
    forwardClick(){
      //向前一页
      if(this.turnTo > 1){
        this.turnTo -=1;
        this.$emit('pageChange',this.turnTo)
      }
    },
    pageClick(item){
      //点击跳转到该页
      if(item == -1){
        //跳转到页首
        this.turnTo = 1;
      }
      else if(item == -2){
        //跳转到页尾
        this.turnTo = this.page_all;
      }
      else if(item == -3){
        //前省略号
        if(this.turnTo == 5){
          this.turnTo = 2;
        }
        else if(this.turnTo > 5 ){
          this.turnTo = this.turnTo - 5;
        }
      }
      else if(item == -4){
        //后省略号
        if(this.turnTo == 1 ){
          this.turnTo = 7;
        }
        else if(this.turnTo < this.page_all-4){
          this.turnTo = this.turnTo + 5;
        }
      }
      else if(this.turnTo != item+1 && this.turnTo < 5){
        //页首区间
        this.turnTo = item+1 ;
      }
      //页尾区间
      else if(this.turnTo != item+this.page_all-6 && this.turnTo >= this.page_all-3){
        this.turnTo = this.page_all+item-6 ;
      }
      else if(this.turnTo != item+this.turnTo-3 && this.turnTo < this.page_all-3 && this.turnTo >= 5){
        //中间段
        this.turnTo = this.turnTo+item-3 ;
      }
      this.$emit('pageChange',this.turnTo)
    },
    backwardClick(){
      //向后翻页
      if(this.turnTo < this.page_all){
        this.turnTo +=1
        this.$emit('pageChange',this.turnTo)
      }
    }
  },
  computed : {
    page_all(){
      //计算总页数
        return Math.ceil(this.dataTotal/this.pageEach);
    },
  },
  data(){
    return {
      turnTo : this.pageNow
    }
  }
}
</script>

<style lang="css">
</style>
