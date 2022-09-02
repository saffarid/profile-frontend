<template>
    <div class="bullet_wrapper">
        <template v-for="index of count" :key="index">
            <div>
                <ImageButton @click="click(index)">
                    <SvgRect :height="10" :width="10"/>
                </ImageButton>
            </div>
        </template>
    </div>
</template>

<script>
   import ImageButton from './input/ImageButton'
   import SvgRect     from '../assets/images/SvgRect'

   export default {
      name: 'Bullets',
      components:{
         ImageButton,
         SvgRect
      },
      props:{
         count:{
            type: Number,
            required: true
         },
         click:{
            type: Function,
            required: true
         }
      }
   }
</script>

<style scoped>

</style>