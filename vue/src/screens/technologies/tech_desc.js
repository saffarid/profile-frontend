import {defineAsyncComponent} from "vue";

export const technologies = [
    {
        title: 'Верстка',
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
        title: 'Фреймворки',
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
        title: 'Языки',
        list: [
            {
                title: 'Java',
                image: defineAsyncComponent(() => import('@/assets/images/SvgJava.vue')),
            },
        ],
    },
    {
        title: 'Макеты',
        list: [
            {
                title: 'Adobe XD',
                image: defineAsyncComponent(() => import('@/assets/images/SvgXd.vue')),
            },
        ],
    },
]