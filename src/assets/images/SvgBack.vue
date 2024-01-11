<template>
    <svg :x="x" :y="y" :width="width" :height="height" viewBox="0 0 100 100">
        <g>
            <rect width="100" height="100"
                  transform="translate(100) rotate(90)" fill="#fff" opacity="0"/>
            <path
                    d="M32.315,63.337a4.167,4.167,0,0,1-3.25-1.542L8.94,36.8a4.167,4.167,0,0,1,0-5.292l20.833-25a4.172,4.172,0,1,1,6.417,5.333L17.565,34.171l18,22.333a4.167,4.167,0,0,1-3.25,6.833Z"
                    transform="translate(25.31 15.829)" fill="#fff"/>
        </g>
    </svg>
</template>

<script>
   import SvgMixin from '../../components/mixins/SvgMixin'

   export default {
      name: 'SvgBack',
      mixins: [
         SvgMixin,
      ],
   }
</script>

