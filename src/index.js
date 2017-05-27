import Title from './cm_title'
import Menu1 from './menu'

const install = (Vue) => {
	Vue.component(Title.name, Title)
	Vue.component(Menu1.name, Menu1)
}

export default install
