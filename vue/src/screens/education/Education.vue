<template>
    <div class="education" ref="education">
        <svg x="0" y="0" width="100%" height="100%">
            <SvgEducation :x="iconSizes.x" y="33%" :width="iconSizes.width" :height="iconSizes.height"/>

        </svg>
    </div>
</template>

<script>
   import SvgEducation from '../../assets/images/SvgEducation'

   import {
      ref,
      reactive,
      watch,
   } from 'vue'

   export default {
      name: 'Education',
      components: {
         SvgEducation,
      },
      setup() {

         const education = ref(null)

         const iconSizes = reactive({
            x:0,
            y:0,
            height: 250,
            width: 250,
         })

         watch(education, () => {
            window.addEventListener('resize', () => {
                calcIcon()
            })
            calcIcon()
         })

         const calcIcon = () => {
            iconSizes.width = (414/1920)*window.innerWidth
            iconSizes.height = (350/1080)*window.innerHeight

            iconSizes.x = (250/1920)*window.innerWidth
            iconSizes.y = (window.innerHeight - iconSizes.height - 50)/2
         }

         return {
            education,
            iconSizes
         }

      },
   }
</script>

<style lang="scss" scoped>
    .education {
        height: 100%;
        width: 100%;
        background: slateblue;
    }
</style>