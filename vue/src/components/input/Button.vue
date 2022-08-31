<template>
    <button class="button" @click="click">{{text}}</button>
</template>

<script>
   export default {
      name: 'Buttton',
      props:{
         click:{
            type: Function,
            required: false,
            default: () => {}
         },
         text:{
            type: String,
            required: true,

         },
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