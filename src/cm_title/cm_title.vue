<template>
	<div class="top-title">
	<span v-for='(name,index) in title.split("")'>{{name}}
		<span v-if='index !== (title.length)-1' class="top-title-line">/</span>
	</span>
	<a :href="moreLink" v-if='showMore' class="top-title-more">查看更多 ></a></div>
</template>

<script>
import './cm_title.css'

export default {
	name:'cm-title',
	props:[
		'title',
		'showMore',
		'moreLink',
	],
	components:{
		
	},
	computed:{

	},
	data(){
		return {

		}
	},
	created(){
	},
	methods:{

	}
}
</script>
