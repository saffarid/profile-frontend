<template>
    <FullCard style="--inner_color: #B9AFAF; --outer_color: #D5D5D5;">

        <div class="technical-table">
            <div class="row" v-for="(item, index) in technologies" :key="index">
                <div>{{item.title}}</div>
                <template v-for="(item1, index1) in item.list" :key="index1">
                    <Item :title="item1.title" :image="item1.image"/>
                </template>
            </div>
        </div>
    </FullCard>
</template>

<script>
   import FullCard from '../../components/FullCard'
   import Item     from './Item'

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
                     image: defineAsyncComponent(() => import('./../assets/images/SvgHtml.vue')),
                  },
                  {
                     title: 'CSS',
                     image: defineAsyncComponent(() => import('./../assets/images/SvgCss.vue')),
                  },
                  {
                     title: 'JavaScript',
                     image: defineAsyncComponent(() => import('./../assets/images/SvgJS.vue')),
                  },
               ],
            },
            {
               title: 'Фреймворки',
               list: [
                  {
                     title: 'Angular',
                     image: defineAsyncComponent(() => import('@/vue/src/assets/images/SvgAngular.vue')),
                  },
                  {
                     title: 'Vue',
                     image: defineAsyncComponent(() => import('@/vue/src/assets/images/SvgVue.vue')),
                  },
               ],
            },
            {
               title: 'Языки программирования',
               list: [
                  {
                     title: 'Java',
                     image: defineAsyncComponent(() => import('@/vue/src/assets/images/SvgJava.vue')),
                  },
               ],
            },
            {
               title: 'Макеты',
               list: [
                  {
                     title: 'Adobe XD',
                     image: defineAsyncComponent(() => import('@/vue/src/assets/images/SvgXd.vue')),
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

    .technical-table {
        display: grid;
        grid-template-rows: repeat(auto-fit, minmax(100px, 160px));

        .row {
            display: grid;
            grid-template-columns: 100px repeat(auto-fit, minmax(100px, 150px));
        }
    }

</style>