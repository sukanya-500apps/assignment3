import que1 from './que1.vue'
Vue.use(Router)
export default new Router({
    routes:[
        {
            path:'/',
    name:'App',
    component:App
        },
        {
            path:'/que1.vue',
            name:'que1',
            component:que1
        }
    ]
})
