import {defineAsyncComponent} from "vue";

const _screens = [
   {
      title: 'Анкета',
      workspace: defineAsyncComponent(() => import('./profile/Profile')),
   },
   {
      title: 'Образование',
      workspace: defineAsyncComponent(() => import('./education/Education')),
   },
   {
      title: 'Работа',
      workspace: defineAsyncComponent(() => import('./job/Job')),
   },
   {
      title: 'Навыки',
      workspace: defineAsyncComponent(() => import('./skills/Skills')),
   }

]

export {
   _screens
}