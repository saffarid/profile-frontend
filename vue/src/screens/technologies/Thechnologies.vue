<template>
    <FullCard style="--inner_color: #B9AFAF; --outer_color: #D5D5D5;">
        <div class="tecnologies">
        <h1 class="title">ТЕХНОЛОГИИ</h1>
        <div class="technical-table">
            <div class="row" v-for="(item, index) in technologies" :key="index">
                <div>{{item.title}}</div>
                <template v-for="(item1, index1) in item.list" :key="index1">
                    <Item :title="item1.title" :image="item1.image"/>
                </template>
            </div>
        </div>
        </div>
    </FullCard>
</template>

<script>
    import FullCard from '../../components/FullCard'
    import Item from './Item'

    import {
        defineAsyncComponent,
    } from 'vue'

    export default {
        name: 'Thechnologies',
        components: {
            Item,
            FullCard,
        },
        setup() {
            const technologies = [
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

            return {
                technologies,
            }
        },
    }
</script>

<style lang="scss" scoped>

    .tecnologies {
        padding: 5px;

        .title{
            font-size: calc(max(21px, min(4vh, 2vw)));
            margin-left: 50px;
            margin-top: 10px;
            margin-bottom: 10px;
        }
    }

    .technical-table {
        display: grid;
        grid-template-rows: repeat(4, minmax(87px, 16.597vh));
        row-gap: calc(min(1vh, 1vw));

        .row {
            display: grid;
            grid-template-columns: 110px repeat(auto-fit, minmax(110px, 7.8125vw));
            column-gap: calc(min(1vh, 1vw));
            align-content: stretch;
            align-items: stretch;
        }
    }


    @media (max-width: 550px) {
        .technical-table {
            row-gap: 5.5px;

            .row {
                column-gap: 5.5px;
            }
        }
    }

</style>