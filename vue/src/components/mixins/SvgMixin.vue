
<script>
   export default {
      name: 'SvgMixin',
      props: {
         x: {
            type: Number,
            required: false,
            default: 0
         },
         y: {
            type: Number,
            required: false,
            default: 0
         },
         height:{
            type: Number,
            required: false,
            default: 20
         },
         width:{
            type: Number,
            required: false,
            default: 20
         },
      },
   }
</script>

<style scoped>

</style>