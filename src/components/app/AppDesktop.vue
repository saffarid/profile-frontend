
<template>

    <HeadMenu class="top" :screens="_screens" @clickOnItem="activeScreenChange"/>
    <RecyclerView class="middle" :screens="_screens" :index-active-screen="activeScreen"
                  @activeScreenChange="activeScreenChange"/>

</template>

<script>

   import { _screens } from './../screens/screens'
   import RecyclerView from '../RecyclerView'
   import HeadMenu     from '../HeadMenu'
   import {
      inject,
      provide,
      ref,
      reactive,
   }                   from 'vue'
   import {
      asyncRequest,
   }                   from './../js/web'

   export default {
      name: 'AppDesktop',
      components: {
         HeadMenu,
         RecyclerView,
      },
      setup() {
         const api = inject('api')
         const workObject = inject('workObject')
         const profile = reactive({})

         const activeScreen = ref(0)

         provide('asyncRequest', asyncRequest)
         provide('profile', profile)

         const activeScreenChange = (index) => {
            activeScreen.value = index
         }

         asyncRequest(api.MODEL_REQUESTS.work_e(
            api.ESSENCE.freelance.name,
            api.ESSENCE.freelance.actions.get,
            ),
            JSON.stringify({}),
         )
            .then(data => {
               if (data.responseCode == api.CODES_RESPONSE.ok.responseCode) {
                  workObject.copy(data.datas, profile)
               }
            })
            .catch(err => console.error(err))


         return {
            activeScreen,
            activeScreenChange,
            _screens,
         }
      },
   }
</script>

<style lang="scss">

    .top {
        position: absolute;
        z-index: 100;
        width: 100%;
    }

</style>
