<template>
    <HeadMenu class="top" :screens="_screens" @clickOnItem="activeScreenChange"/>
    <RecyclerView class="middle" :screens="_screens" :index-active-screen="activeScreen" @activeScreenChange="activeScreenChange"/>
</template>

<script>
   import {
      BorderPane,
   }                   from 'saffarid-ui-kit'
   import { _screens } from './screens/screens'
   import RecyclerView from './components/RecyclerView'
   import HeadMenu     from './components/HeadMenu'
   import {
      ref
   } from 'vue'

   export default {
      name: 'App',
      components: {
         HeadMenu,
         BorderPane,
         RecyclerView,
      },
      setup() {

         const activeScreen = ref(0)

         const activeScreenChange = (index) => {
            console.log(index)
            activeScreen.value = index
         }

         return {
            activeScreen,
            activeScreenChange,
            _screens,
         }
      },
   }
</script>

<style lang="scss">
    @import "./assets/style/main";

    .top{
        position: absolute;
        z-index: 100;
        width: 100%;
        height: 5vh;
    }


</style>
