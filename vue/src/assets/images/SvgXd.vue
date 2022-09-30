<template>
    <svg :x="x" :y="y" :width="width" :height="height" viewBox="0 0 181 181">
        <g fill="#2e0020" stroke="#707070" stroke-width="1">
            <rect width="181" height="181" rx="50" stroke="none"/>
            <rect x="0.5" y="0.5" width="180" height="180" rx="49.5" fill="none"/>
        </g>
        <text id="Xd" transform="translate(41 123)" fill="#e40dce" font-size="78" font-family="SegoeUI-Bold, Segoe UI" font-weight="700"><tspan x="0" y="0">Xd</tspan></text>
    </svg>

</template>

<script>
   import SvgMixin from '../../components/mixins/SvgMixin'

   export default {
      name: 'SvgXd',
      mixins: [SvgMixin]
   }
</script>

<style scoped>

</style>