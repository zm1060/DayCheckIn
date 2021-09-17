import vueCheckin from './DayCheckIn.vue'
const checkin = {
    install(Vue, options) {
        console.log(vueCheckin)
        Vue.component(vueCheckin.name, vueCheckin) 
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(checkin);
}
export default checkin // 导出..
