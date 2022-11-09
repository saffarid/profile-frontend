<template>
    <div class="light">
        <AppMobile v-if="isMobile"/>
        <AppDesktop v-else/>
    </div>
</template>

<script>

   import AppDesktop from './app/AppDesktop'
   import AppMobile  from './app/AppMobile'

   export default {
      name: 'App',
      components: {
         AppMobile,
         AppDesktop,
      },
      setup() {
         const isMobile = navigator.userAgent.toLowerCase().match(/mobile/i)


         return {
            isMobile,
         }
      },
   }
</script>

<style lang="scss">
    @import "@/assets/style/main";
</style>
