<template>
    <svg :x="x" :y="y" :height="height" :width="width" viewBox="0 0 20 20">
        <rect x="0" y="0" height="20" width="20" rx="5" fill="#9F9F9F"/>
    </svg>
</template>

<script>
   import SvgMixin from '../../components/mixins/SvgMixin'

   export default {
      name: 'SvgRect',
      mixins: [
         SvgMixin
      ]
   }
</script>
