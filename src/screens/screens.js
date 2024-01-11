import {defineAsyncComponent} from "vue";

const _screens = [
   {
      title: 'Анкета',
      workspace: defineAsyncComponent(() => import('./profile/Profile')),
   },
   {
      title: 'Навыки',
      workspace: defineAsyncComponent(() => import('./technologies/Thechnologies')),
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