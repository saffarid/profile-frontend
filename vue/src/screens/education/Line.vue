<template>
    <svg :x="x" :y="y" :height="height" :width="width">
        
    </svg>
</template>

<script>
   import SvgMixin from '../../components/mixins/SvgMixin'

   export default {
      name: 'Line',
      mixins: [SvgMixin],
   }
</script>

<style scoped>

</style>