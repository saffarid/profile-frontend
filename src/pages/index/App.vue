<template>
  <div class="light">
    <AppMobile v-if="isMobile"/>
    <AppDesktop v-else/>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  ref, reactive,
} from 'vue'
import {useStore} from 'vuex'
import AppDesktop from '@/components/app/AppDesktop'
import AppMobile from '@/components/app/AppMobile'

export default defineComponent({
  name: 'TmpApp',
  components: {
    AppDesktop,
    AppMobile
  },
  setup() {
    const store = useStore()
    store.dispatch('appInit')


    const isMobile = computed(() => store.getters.isMobile)
    const dialogPane = computed(() => store.getters.dialogPane)
    const theme = computed(() => store.getters.theme)

    const styleVars = computed(() => store.getters.perSize)

    const curUser = computed(() => store.getters.curUser)

    const activeScreen = computed(() => store.getters.activeScreen)
    const isScreenReady = computed(() => store.getters.isScreenReady)
    const isAppReady = computed(() => store.getters.isAppReady)

    return {
      activeScreen,
      dialogPane,
      isMobile,
      isScreenReady,
      isAppReady,
      theme,
      styleVars,
      curUser,
    }
  },
})
</script>

<style lang="scss">
@import "@/assets/style/main";
</style>