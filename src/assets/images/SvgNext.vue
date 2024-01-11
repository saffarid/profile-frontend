<template>
    <svg :x="x" :y="y" :width="width" :height="height" viewBox="0 0 100 100">
        <g>
            <rect width="100" height="100"
                  transform="translate(0 100) rotate(-90)" fill="#fff" opacity="0"/>
            <path
                  d="M13.172,63.426a4.166,4.166,0,0,1-3.208-6.833L28.631,34.259l-18-22.375a4.167,4.167,0,0,1,.625-5.875,4.167,4.167,0,0,1,6.083.625l20.125,25a4.167,4.167,0,0,1,0,5.292l-20.833,25A4.167,4.167,0,0,1,13.172,63.426Z"
                  transform="translate(28.494 15.741)" fill="#fff"/>
        </g>
    </svg>
</template>

<script>
   import SvgMixin from '../../components/mixins/SvgMixin'

   export default {
      name: 'SvgNext',
      mixins: [SvgMixin],
   }
</script>

