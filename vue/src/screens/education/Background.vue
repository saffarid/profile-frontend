<template>
    <svg x="0" y="0" width="100%" height="100%" ref="background">

        <rect
                x="0" y="0" height="100%" width="100%" fill="#3D3D3D"/>

        <path :d="path" fill="#5E0000"/>

        <template v-for="i in 100">

            <line :x1="lineParam.x1 - i*50" :y1="lineParam.y1" :x2="lineParam.x2 - i*50" :y2="lineParam.y2" stroke-width="20"
                  stroke="#6B0707"/>

        </template>
    </svg>
</template>

<script>
   import {
      ref,
      reactive,
      watch,
   }               from 'vue'
   import SvgMixin from '../../components/mixins/SvgMixin'

   export default {
      name: 'Background',
      mixins: [
         SvgMixin,
      ],
      setup() {

         const background = ref(null)

         const radToDeg = (rad) => {
            return (180 * rad) / (Math.PI)
         }

         const path = ref(null)
         const angle = ref(null)
         const lineParam = reactive({
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
         })

         const changeSizes = () => {
            path.value = `M 0,0 L${0.4 * window.innerWidth},0 ${0.6 * window.innerWidth},${1 * window.innerHeight} ${0 * window.innerWidth},${1 * window.innerHeight} Z`
            angle.value = radToDeg(Math.atan(window.innerHeight / (0.6 * window.innerWidth - 0.4 * window.innerWidth)))
            lineParam.x1 = 0.405 * window.innerWidth
            lineParam.y1 = 0.0 * window.innerHeight
            lineParam.x2 = 0.605 * window.innerWidth
            lineParam.y2 = 1 * window.innerHeight
         }

         watch(background, () => {
            changeSizes()
            window.addEventListener('resize', changeSizes)
         })

         return {
            angle,
            background,
            path,
            lineParam,
         }
      },
   }
</script>

<style scoped>

</style>