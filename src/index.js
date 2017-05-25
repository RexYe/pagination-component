import Menu from './Menu.vue'
import Menu2 from './Menu2.vue'

Menu.install = Vue=> Vue.component(Menu.name, Menu)

const install = (Vue) => {
  Vue.component(Menu.name, Menu)
  Vue.component(Menu2.name, Menu2)
}

export default {
  install,
}

export {
	Menu,
  	Menu2
}
