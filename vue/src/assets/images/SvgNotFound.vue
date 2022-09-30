<template>
    <svg :x="x" :y="y" :height="height" :width="width" stroke-width="1.5" fill="none" viewBox="0 0 24 24">
        <path d="M12 8L12 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 16.01L12.01 15.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 3H4V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4 11V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20 11V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15 3H20V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 21H4V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15 21H20V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</template>

<script>
   import SvgMixin from '../../components/mixins/SvgMixin'

   export default {
      name: 'SvgNotFound',
      mixins: [SvgMixin],
   }
</script>
