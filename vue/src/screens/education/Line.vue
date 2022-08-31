<template>
    <svg :x="line.x" :y="line.y + ((line.line[1].y >= line.line[0].y)?(strokeWidth/2):(0))" :height="line.height" :width="line.width">
        <path :d="`M${line.line[0].x},${line.line[0].y-((line.line[1].y == line.line[0].y)?(strokeWidth/2):(0)) }
                   L${line.line[1].x},${line.line[1].y-((line.line[1].y >= line.line[0].y)?(strokeWidth/2):(0))}
                   ${line.line[2].x},${line.line[2].y-((line.line[1].y >= line.line[0].y)?(strokeWidth/2):(0))}`"
              stroke="white" :stroke-width="strokeWidth" fill="transparent"/>
        <text fill="#fff" :font-size="line.fontSize" font-family="Segoe UI" font-weight="600" text-anchor="middle">
            <tspan :x="((line.line[2].x - line.line[1].x)/2)" :y="line.line[1].y - line.fontSize/2">{{line.title}}</tspan>
        </text>
    </svg>
</template>

<script>
   import SvgMixin from '../../components/mixins/SvgMixin'

   export default {
      name: 'Line',
      mixins: [SvgMixin],
      props: {
         line: {
            type: Object,
            required: true,
         },
      },
      setup() {
         const strokeWidth = 5

         return {
            strokeWidth,
         }
      },

   }
</script>

<style scoped>

</style>