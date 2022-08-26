<template>
    <RecyclerView :screens="_screens"/>
</template>

<script>
   import { _screens } from './screens/screens'
   import RecyclerView from './components/RecyclerView'

   export default {
      name: 'App',
      components: {
         RecyclerView
      },
      setup(){
         return {
            _screens
         }
      }
   }
</script>

<style lang="scss">
    @import "./assets/style/main";
</style>
