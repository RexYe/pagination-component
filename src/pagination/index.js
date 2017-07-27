import pagination from './pagination.vue'
import './pagination.css'
pagination.install = (Vue) => {
	Vue.component(pagination.name,pagination)
}
export default pagination
