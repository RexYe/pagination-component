import Vue from 'vue'
import App from './App.vue'
// 全局可引用
// import MMTitle from '..'
// Vue.use(MMTitle)

import {pagination} from '..'
Vue.use(pagination)


new Vue({
	el: '#app',
	data() {
		return {

		}
	},
	template: '<App/>',
	components: { App },
	created() {
	}
})
