<template>
    <Card ref="FullCard"
          :options="{'--width':'88%',
                               '--height':'85%',
                               '--inner_color':'var(--primary_color)',
                               '--outer_color':'rgba(55,65,81, 1)'}">
        <div class="card web_interfaces">
            <div class="d">
                <div class="title">{{data.title}}</div>
                <div class="desc">{{data.desc}}</div>
                <div class="list">
                    <div class="list_item" v-for="(item, index) in data.features" :key="index">
                        <span class="list_item_index">{{++index}}</span>
                        <span class="list_item_text">{{item}}</span>
                    </div>
                </div>
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
    </Card>
</template>

<script>
   import { ref, watch }   from 'vue'
   import Card             from '../../../components/Card'

   export default {
      name: 'WebInterfaces',
      components: {
         Card,
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
            grid-template-rows: repeat(4, max-content);
            row-gap: 5px;

            .list {
                display: grid;
                row-gap: 10px;

                .list_item {
                    display: flex;
                    column-gap: 5px;
                    align-items: center;

                    .list_item_index {
                        background-color: var(--secondary_color_B);
                        justify-items: center;
                        justify-content: center;
                        text-align: center;
                        border-radius: 10px;
                        padding: 2px 10px;
                    }
                }
            }

            .link {
                border: 2px solid #4ae2fb;
                border-radius: 1000000px;
            }
        }

    }

</style>