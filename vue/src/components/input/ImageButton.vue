<template>
    <button class="image-button">
        <slot/>
    </button>
</template>

<script>
   export default {
      name: 'ImageButton',
      props:{
         disabled:{
            type: Boolean,
            required: false,
            default: false
         }
      }
   }
</script>

<style lang="scss" scoped>
    @import "./../../assets/style/button";
</style>