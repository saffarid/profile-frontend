<template>
    <FullCard ref="FullCard" style="--inner_color: #004e02; --outer_color: #015803;">
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
    </FullCard>
</template>

<script>
   import FullCard       from '@/components/FullCard'
   import { ref, watch } from 'vue'

   export default {
      name: 'WebInterfaces',
      components: {
         FullCard,
      },
      props: {
         data: {
            type: Object,
            required: false,
         },
      },
      setup(){
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
            showImage
         }

      }
   }
</script>

<style lang="scss" scoped>

    @import "card";

    .show_image {
        position: absolute;
        width: 56vw;
    }

    .web_interfaces {
        display: grid;
        grid-template-columns: 2fr 3fr;
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