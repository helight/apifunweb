
// 引入路由模块并使用它
import Vue from 'vue'
import VueRouter from 'vue-router'

import home from "../view/main.vue";
import intro from "../view/intro.vue";

Vue.use(VueRouter)

// 创建路由实例并配置路由映射  
// path:'*',redirect:'/home'  重定向到path是/home的映射
const router = new VueRouter({
  routes:[{
      path: '/home', 
      component: home
  },{
      path: '/intro', 
      component: intro
  },{
    path:'/',
    redirect:'/home'
},{
    path:'*',
    redirect:'/home'
}]
})


// 输出router
export default router;