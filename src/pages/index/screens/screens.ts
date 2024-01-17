import {defineAsyncComponent} from "vue";
import {IScreen} from '@/js/interfaces/interfaces'
import TmpLoading from "@/components/controls/TmpLoading.vue";
import TmpSvgEmpty from "@/assets/img/TmpSvgEmpty.vue";

const _screens: IScreen[] = [
  {
    title: 'Анкета',
    workspace: defineAsyncComponent(() => import('./profile/Profile')),
    icon: defineAsyncComponent({
      delay: 100,
      timeout: 60000,
      loadingComponent: TmpSvgEmpty,
      loader: () => import('@/assets/img/TmpSvgDashboard.vue'),
    }),
    allow: true,
    isShow: true,
    active: false,
    //Сервисы для работы. В разработке. Доступ к странице.
    services: {
      necessary: {
        read: ['drags'],
        write: ['drags'],
        exec: []
      },
      optional: {
        read: [],
        write: [],
        exec: []
      },
    },
    confSections: ['config'],
    dataSections: ['data']
  },
  {
    title: 'Навыки',
    workspace: defineAsyncComponent(() => import('./technologies/Thechnologies')),
    icon: defineAsyncComponent({
      delay: 100,
      timeout: 60000,
      loadingComponent: TmpSvgEmpty,
      loader: () => import('@/assets/img/TmpSvgDashboard.vue'),
    }),
    allow: true,
    isShow: true,
    active: false,
    //Сервисы для работы. В разработке. Доступ к странице.
    services: {
      necessary: {
        read: ['drags'],
        write: ['drags'],
        exec: []
      },
      optional: {
        read: [],
        write: [],
        exec: []
      },
    },
    confSections: ['config'],
    dataSections: ['data']
  },
  {
    title: 'Портфолио',
    workspace: defineAsyncComponent(() => import('./portfolio/Portfolio')),
    icon: defineAsyncComponent({
      delay: 100,
      timeout: 60000,
      loadingComponent: TmpSvgEmpty,
      loader: () => import('@/assets/img/TmpSvgDashboard.vue'),
    }),
    allow: true,
    isShow: true,
    active: false,
    //Сервисы для работы. В разработке. Доступ к странице.
    services: {
      necessary: {
        read: ['drags'],
        write: ['drags'],
        exec: []
      },
      optional: {
        read: [],
        write: [],
        exec: []
      },
    },
    confSections: ['config'],
    dataSections: ['data']
  },
  {
    title: 'Контакты',
    workspace: defineAsyncComponent(() => import('./contact/Contact')),
    icon: defineAsyncComponent({
      delay: 100,
      timeout: 60000,
      loadingComponent: TmpSvgEmpty,
      loader: () => import('@/assets/img/TmpSvgDashboard.vue'),
    }),
    allow: true,
    isShow: true,
    active: false,
    //Сервисы для работы. В разработке. Доступ к странице.
    services: {
      necessary: {
        read: ['drags'],
        write: ['drags'],
        exec: []
      },
      optional: {
        read: [],
        write: [],
        exec: []
      },
    },
    confSections: ['config'],
    dataSections: ['data']
  }

]

export {
  _screens
}