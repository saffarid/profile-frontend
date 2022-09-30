<template>
    <div class="item">
        <div class="title">
            {{title}}
        </div>
        <div class="image">
            <component :is="image"/>
        </div>
    </div>
</template>

<script>

   export default {
      name: 'Item',
      props: {
         title: {
            type: String,
            required: true,
            default: 'You missed title',
         },
         image: {
            type: String,
            required: true,
            default: '@/vue/src/assets/images/SvgNotFound.vue',
         },
      },
      setup() {

      },
   }
</script>

<style lang="scss" scoped>
    .item {
        display: grid;
        grid-template-rows: 40px auto;
        width: 7.8125vw;
        height: 14.814vh;
        border-radius: 10px;
        background-color: #BEBEBE;
        align-content: center;
        align-items: center;
        align-self: stretch;
        justify-content: center;
        justify-items: center;
        justify-self: stretch;

        .title {
        }

        .image {
            width: 90px;
            height: 90px;

            svg {
                width: 90px;
                height: 90px;
            }
        }
    }
</style>