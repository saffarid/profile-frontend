<template>
    <BackgroundCard :type="b_card_types.rect"
                    :options="{'--width':'88%',
                               '--height':'85%',
                               '--inner_color':'var(--primary_color)',
                               '--outer_color':'#664502'}">
        <div class="card nadoumchik">
            <div class="d">
                <div class="title">{{data.title}}</div>
                <div class="desc">{{data.desc}}</div>
                <a class="link" target="_blank" :href="linkOnWeb">#Надоумчик</a>
            </div>
            <div class="view">
                <iframe :src="linkOnWeb" frameborder="0" scrolling="no"/>
            </div>
        </div>
    </BackgroundCard>
</template>

<script>
   import BackgroundCard   from '../../../components/backgrounds_card/BackgroundCard'
   import { b_card_types } from '../../../components/backgrounds_card/b_card_types'

   export default {
      name: 'nadoumchik',
      components: {
         BackgroundCard,
      },
      props: {
         data: {
            type: Object,
            required: false,
         },
      },
      setup() {
         const linkOnWeb = 'https://nadoumchik.ru'
         return {
            b_card_types,
            linkOnWeb
         }
      },
   }
</script>

<style lang="scss" scoped>

    @import "card";

    .nadoumchik {
        display: grid;
        grid-template-columns: 1fr 3fr;
        align-self: stretch;
        justify-self: stretch;
        height: 97%;

        .d {
            display: grid;
            grid-template-rows: max-content max-content max-content;
            row-gap: 5px;

            .link {
                border: 2px solid #4ae2fb;
                border-radius: 1000000px;
                text-decoration: none;
            }
        }

        .view {
            display: grid;
            align-self: stretch;
            justify-items: center;
            justify-content: stretch;
            justify-self: stretch;
            align-content: stretch;
            align-items: stretch;
            overflow-y: auto;

            iframe {
                width: 81.6%;
                height: 320%;
                overflow-y: hidden;
            }
        }
    }

</style>