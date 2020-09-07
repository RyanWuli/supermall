import Vue from 'vue'
import Router from 'vue-router'

// 非懒加载的写法
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

// 懒加载的写法
const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')
const Profile = () => import('../components/Profile.vue')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      meta: {
        title: '首页'
      },
      children: [
        // {
        //   path: '',
        //   redirect: 'news'
        // },
        {
          path: 'news',
          component: HomeNews
        },
        {
          path: 'message',
          component: HomeMessage
        }
      ]
    },{
      path: '/about',
      component: About,
      meta: {
        title: '关于'
      }
    },{
      path: '/user/:user_id',
      component: User,
      meta: {
        title: '用户'
      }
    },{
      path: '/profile',
      component: Profile,
      meta: {
        title: '档案'
      }
    }
  ],
  mode: 'history',
  linkActiveClass: 'active'
})

// 前置钩子(hook)
router.beforeEach((to, from, next) => {
  console.log('+++++')
  document.title = to.matched[0].meta.title
  // console.log(to);
  next() // 必须有才能跳转
})

// 后置钩子
router.afterEach((to, from) => {
  console.log('-----')
})

export default router
