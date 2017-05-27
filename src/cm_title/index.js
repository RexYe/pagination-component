import Title from './cm_title.vue'

Title.install = (Vue) => {
	Vue.component(Title.name, Title)
}

export default Title