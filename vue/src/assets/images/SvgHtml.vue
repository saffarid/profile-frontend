<template>
    <svg : :width="width" :height="height" viewBox="0 0 79.361 90">
        <g transform="translate(-3.655 -2)">
            <path d="M10.877,83,3.655,2H83.016L75.784,82.99,43.287,92Z" transform="translate(0)" fill="#e44f26"/>
            <path d="M16,80.537l26.288-7.279,6.184-69.2H16Z" transform="translate(27.294 4.571)" fill="#f1662a"/>
            <path d="M33.187,27.281H20.027L19.119,17.1H33.187V7.151H8.25l.238,2.671,2.442,27.4H33.187Z" transform="translate(10.168 11.397)" fill="#ebebeb"/>
            <path d="M31.033,28.952l-.045.013L19.913,25.976l-.708-7.932H9.221l1.393,15.612,20.374,5.657.045-.013Z" transform="translate(12.318 35.509)" fill="#ebebeb"/>
            <path d="M15.989,13.407v9.946H28.235l-1.152,12.9L15.989,39.245V49.593l20.39-5.653.148-1.68,2.336-26.182.245-2.671H15.989Z" transform="translate(27.294 25.233)" fill="#fff"/>
            <path d="M15.989,7.151V17.1H40.012l.2-2.233.454-5.042L40.9,7.151Z" transform="translate(27.292 11.404)" fill="#fff"/>
        </g>
    </svg>

</template>

<script>
   import SvgMixin from '../../components/mixins/SvgMixin'

   export default {
      name: 'SvgHtml',
      mixins: [SvgMixin]
   }
</script>
