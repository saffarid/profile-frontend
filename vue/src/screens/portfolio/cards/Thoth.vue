<template>
    <BackgroundCard ref="FullCard"
                    :type="b_card_types.rect"
                    :options="{'--width':'88%',
                               '--height':'85%',
                               '--inner_color': 'var(--primary_color)',
                               '--outer_color': '#014a5f'}" >
        <div class="card thoth">
            <div class="images">
                <img @click="showImage($event)" class="image products"
                     :src="'/img/png/products.png'">
                <img @click="showImage($event)" class="image purchase"
                     :src="'/img/png/purchase.png'"/>
                <img @click="showImage($event)" class="image settings"
                     :src="'/img/png/settings.png'">
                <img @click="showImage($event)" class="image types_of_products"
                     :src="'/img/png/types%20of%20products.png'">
            </div>
            <div class="d">
                <div class="title">{{data.title}}</div>
                <div class="desc">{{data.desc}}</div>
                <Button class="link">Скачать</Button>
            </div>
        </div>

    </BackgroundCard>
</template>

<script>
   import {
      Button,
   }                       from 'saffarid-ui-kit'
   import BackgroundCard   from '../../../components/backgrounds_card/BackgroundCard'
   import { b_card_types } from '../../../components/backgrounds_card/b_card_types'
   import {
      ref,
      watch,
   }                       from 'vue'

   export default {
      name: 'thoth',
      components: {
         BackgroundCard,
         Button,
      },
      props: {
         data: {
            type: Object,
            required: false,
         },
      },
      setup() {
         let activeImage = null
         const width = ref(0)
         const FullCard = ref(null)

         watch(FullCard, () => {
            width.value = (300 / 1080) * window.innerWidth
            window.addEventListener('resize', () => {
               width.value = (300 / 1080) * window.innerWidth
            })
         })

         const showImage = (e) => {
            console.log(e)
            if (activeImage != null) {
               activeImage.target.classList.toggle('show_image')
            }
            if (activeImage != null && JSON.stringify(activeImage.target) == JSON.stringify(e.target)) {
               activeImage = null
               return
            }
            e.target.classList.toggle('show_image')
            activeImage = e
         }

         return {
            FullCard,
            width,
            showImage,
            b_card_types,
         }
      },
   }
</script>

<style lang="scss" scoped>

    @import "card";

    .thoth {
        display: grid;
        grid-template-columns: 3fr 1fr;

        height: 96%;

        padding: 1%;

        column-gap: 1%;

        .images {
            display: grid;

            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;

            column-gap: 10px;
            row-gap: 10px;

            align-self: center;
            align-content: center;
            align-items: center;

            .image {
                width: 100%;
            }

            .show_image {
                position: absolute;
                margin: auto;
                width: 80vw;
            }
        }

        .d {
            display: grid;
            grid-template-rows: max-content max-content max-content;
            row-gap: 5px;

            .link {
                border: 2px solid #4ae2fb;
                border-radius: 1000000px;
            }
        }
    }

</style>