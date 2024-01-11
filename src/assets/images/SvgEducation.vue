<template>
    <svg :x="x" :y="y" :width="width" :height="height" viewBox="0 0 413.102 347.57">
        <g transform="translate(-49.449 -82.215)">
            <path fill="white"
                    d="M445.055,384.794V221.864L418.8,234.989V384.777l-17.5,45.008h61.25Z"/>
            <path fill="white"
                    d="M229.065,306.371,121.3,252.491v53.775c0,36.243,58.763,65.625,131.25,65.625S383.8,342.51,383.8,306.266V252.49L276.028,306.374C257.581,313.681,247.513,313.679,229.065,306.371Z"/>
            <path fill="white"
                    d="M264.291,282.9l186.521-93.26c6.458-3.229,6.458-8.511,0-11.74L264.291,84.637c-6.456-3.229-17.021-3.229-23.479,0L54.291,177.9c-6.456,3.229-6.456,8.511,0,11.74L240.812,282.9C247.27,286.126,257.836,286.126,264.291,282.9Z"/>
        </g>
    </svg>
</template>

<script>
   import SvgMixin from '../../components/mixins/SvgMixin'

   export default {
      name: 'SvgEducation',
      mixins: [SvgMixin],
   }
</script>

<style scoped>

</style>