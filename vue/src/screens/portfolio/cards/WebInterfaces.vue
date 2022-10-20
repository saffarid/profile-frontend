<template>
    <BackgroundCard ref="FullCard"
                    :type="b_card_types.rect"
                    :options="{'--width':'88%',
                               '--height':'85%',
                               '--inner_color':'var(--primary_color)',
                               '--outer_color':'rgba(55,65,81, 1)'}">
        <div class="card web_interfaces">
            <div class="d">
                <div class="title">{{data.title}}</div>
                <div class="desc">{{data.desc}}</div>
            </div>
            <div class="images">
                <img @click="showImage($event)" class="image products"
                     :width="width"
                     :src="'/img/png/ccu_1001.png'">
                <img @click="showImage($event)" class="image products"
                     :width="width"
                     :src="'/img/png/ats_1204.png'">
                <img @click="showImage($event)" class="image products"
                     :width="width"
                     :src="'/img/png/ats_1204 (1).png'">
            </div>
        </div>
    </BackgroundCard>
</template>

<script>
   import { ref, watch }   from 'vue'
   import BackgroundCard   from '../../../components/backgrounds_card/BackgroundCard'
   import { b_card_types } from '../../../components/backgrounds_card/b_card_types'

   export default {
      name: 'WebInterfaces',
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

    .web_interfaces {
        display: grid;
        grid-template-columns: 1fr 3fr;
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