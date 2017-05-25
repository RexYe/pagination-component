import Vue from 'vue'
import App from './App.vue'
// 全局可引用
// import MenuButton from '../dist'
// Vue.use(MenuButton)


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
