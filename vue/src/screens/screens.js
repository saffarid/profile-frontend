import {defineAsyncComponent} from "vue";

const _screens = [
   {
      title: 'Анкета',
      workspace: defineAsyncComponent(() => import('./profile/Profile')),
   },
   {
      title: 'Навыки',
      workspace: defineAsyncComponent(() => import('./competition/Competition')),
   },
   {
      title: 'Портфолио',
      workspace: defineAsyncComponent(() => import('./portfolio/Portfolio')),
   },
   {
      title: 'Контакты',
      workspace: defineAsyncComponent(() => import('./contact/Contact')),
   }

]

export {
   _screens
}