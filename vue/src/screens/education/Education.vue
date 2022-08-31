<template>
    <div class="education" ref="education">

        <svg x="0" y="0" width="100%" height="100%">
            <Background/>
            <SvgEducation :x="iconSizes.x" :y="iconSizes.y" :width="iconSizes.width" :height="iconSizes.height"/>
            <template v-for="(line, index) of lines" :key="index">
                <Line :line="line"/>
            </template>
        </svg>
    </div>
</template>

<script>
   import SvgEducation from '../../assets/images/SvgEducation'

   import {
      ref,
      reactive,
      watch,
   }                 from 'vue'
   import Line       from './Line'
   import Background from './Background'

   export default {
      name: 'Education',
      components: {
         Background,
         Line,
         SvgEducation,
      },
      setup() {

         const education = ref(null)

         const iconSizes = reactive({
            x: 0,
            y: 0,
            height: 250,
            width: 250,
         })

         const lines = reactive([])

         const calcs = () => {
            calcIcon()
            calcLines()
         }

         watch(education, () => {
            calcs()
            window.addEventListener('resize', calcs)
         })

         const calcIcon = () => {
            iconSizes.width = (414 / 1920) * window.innerWidth
            iconSizes.height = (350 / 1080) * window.innerHeight

            iconSizes.x = (250 / 1920) * window.innerWidth
            iconSizes.y = (window.innerHeight - iconSizes.height - 50) / 2
         }

         const calcLines = () => {

            const titles = [
               { title: 'Среднее' },
               { title: 'Высшее' },
               { title: 'Дополнительное' },
            ]

            const xStart = (750 / 1920) * window.innerWidth
            const xEnd = (1792 / 1920) * window.innerWidth

            const yLineStart = (0.25*1080 / 1080) * window.innerHeight
            const yLineEnd = (0.75*1080 / 1080) * window.innerHeight

            const yLineStep = (yLineEnd - yLineStart) / (titles.length - 1)

            const yStart = (0.4*1080 / 1080) * window.innerHeight
            const yEnd = (0.6*1080 / 1080) * window.innerHeight

            const yStep = (yEnd - yStart) / (titles.length - 1)

            for (let i = 0; i < titles.length; i++) {
               const f = Math.max(14, (30 / 1080) * window.innerHeight)

               const yPoint = (yStart + i * yStep)
               const yLine = (yLineStart + i * yLineStep)

               console.log([yPoint, yLine, f])

               const w = xEnd - xStart
               let h = Math.abs(yPoint - yLine) + ((yPoint >= yLine)?(2*f):(0))

               lines[i] = {
                  title: titles[i].title,
                  fontSize: f,
                  x: xStart,
                  y: (yPoint >= yLine) ? (yLineStart + i * yLineStep - 2*f) : (yPoint),
                  width: w,
                  height: h,
                  line: [
                     { x: 0, y: (yPoint >= yLine) ? (h) : (0) },
                     { x: w * 0.2, y: (yPoint >= yLine) ? (2*f) : (h) },
                     { x: w, y: (yPoint >= yLine) ? (2*f) : (h) }
                     ],
               }

            }

         }

         return {
            education,
            iconSizes,
            lines,
         }

      },
   }
</script>

<style lang="scss" scoped>
    .education {
        height: 100%;
        width: 100%;
    }
</style>