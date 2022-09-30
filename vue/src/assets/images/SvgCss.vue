<template>
    <svg :x="x" :y="y" :width="width" :height="height" viewBox="0 0 79.375 90.023">
        <g transform="translate(-3.656 -2)">
            <path d="M10.877,83.024,3.656,2H83.031L75.8,83.011,43.3,92.023Z" transform="translate(0)" fill="#1572b6"/>
            <path d="M16,80.571l26.267-7.282L48.447,4.061H16Z" transform="translate(27.343 4.565)" fill="#33a9dc"/>
            <path d="M16,27.049H29.15l.907-10.176H16V6.935H40.917L40.679,9.6l-2.44,27.386H16Z" transform="translate(27.343 10.932)" fill="#fff"/>
            <path d="M31.035,28.729l-.045.013-11.066-2.99-.707-7.925H9.24l1.392,15.6,20.355,5.652.048-.013Z" transform="translate(12.369 35.058)" fill="#ebebeb"/>
            <path d="M28.286,16.151l-1.2,13.307-11.082,2.99v10.34l20.371-5.646.151-1.678,1.727-19.313Z" transform="translate(27.361 31.346)" fill="#fff"/>
            <path d="M33.163,6.935v9.938h-24l-.2-2.234L8.506,9.6,8.268,6.935Z" transform="translate(10.216 10.932)" fill="#ebebeb"/>
            <path d="M24.141,13.191v9.938H13.212l-.2-2.234-.45-5.038-.238-2.665Z" transform="translate(19.203 24.789)" fill="#ebebeb"/>
        </g>
    </svg>

</template>

<script>
   import SvgMixin from '../../components/mixins/SvgMixin'

   export default {
      name: 'SvgCss',
      mixins: [SvgMixin]
   }
</script>
