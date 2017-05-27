import Vue from 'vue'
import App from './App.vue'
// 全局可引用
// import MMTitle from '..'
// Vue.use(MMTitle)

import {cm_title,menu} from '..'
Vue.use(cm_title)
Vue.use(menu)

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
