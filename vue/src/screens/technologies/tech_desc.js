import {defineAsyncComponent} from "vue";

export const technologies = [
    {
        title: 'ВЕРСТКА',
        list: [
            {
                title: 'HTML',
                image: defineAsyncComponent(() => import('@/assets/images/SvgHtml.vue')),
            },
            {
                title: 'CSS',
                image: defineAsyncComponent(() => import('@/assets/images/SvgCss.vue')),
            },
            {
                title: 'JavaScript',
                image: defineAsyncComponent(() => import('@/assets/images/SvgJS.vue')),
            },
        ],
    },
    {
        title: 'ФРЕЙМВОРКИ',
        list: [
            {
                title: 'Angular',
                image: defineAsyncComponent(() => import('@/assets/images/SvgAngular.vue')),
            },
            {
                title: 'Vue',
                image: defineAsyncComponent(() => import('@/assets/images/SvgVue.vue')),
            },
        ],
    },
    {
        title: 'ЯЗЫКИ',
        list: [
            {
                title: 'Java',
                image: defineAsyncComponent(() => import('@/assets/images/SvgJava.vue')),
            },
        ],
    },
    {
        title: 'МАКЕТЫ',
        list: [
            {
                title: 'Adobe XD',
                image: defineAsyncComponent(() => import('@/assets/images/SvgXd.vue')),
            },
        ],
    },
]