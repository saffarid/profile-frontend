<template>
    <FullCard style="--inner_color: #014a5f; --outer_color: #005f7b;" ref="FullCard">
        <div class="card thoth">
            <div class="images">
                <img @click="showImage($event)" class="image products"
                     :width="width"
                     :src="'/img/png/products.png'">

                <img @click="showImage($event)" class="image purchase"
                     :width="width"
                     :src="'/img/png/purchase.png'"/>
                <img @click="showImage($event)" class="image settings"
                     :width="width"
                     :src="'/img/png/settings.png'">

                <img @click="showImage($event)" class="image types_of_products"
                     :width="width"
                     :src="'/img/png/types%20of%20products.png'">
            </div>
                <div class="d">
                    <div class="title">{{data.title}}</div>
                    <div class="desc">{{data.desc}}</div>
                    <Button class="link">СКАЧАТЬ</Button>
                </div>
            </div>

    </FullCard>
</template>

<script>
    import {
        Button
    } from 'saffarid-ui-kit'
    import FullCard from "../../../components/FullCard";
    import {
        ref,
        watch
    } from 'vue'

    export default {
        name: 'thoth',
        components: {
            FullCard,
            Button
        },
        props: {
            data: {
                type: Object,
                required: false
            }
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

    .thoth {
        display: grid;
        grid-template-columns: 3fr 2fr;

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

            .image { }
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