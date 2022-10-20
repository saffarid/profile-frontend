<template>
    <div class="recycler-view" @wheel="scrollOnCur($event)" :style="styleVars">
        <component class="node-cur" :is="screens[_screens.cur].workspace"/>
        <component class="node-prev" :is="screens[_screens.prev].workspace"/>
        <component class="node-next" :is="screens[_screens.next].workspace"/>
    </div>
</template>

<script>
   import {
      reactive,
      watch,
   } from 'vue'

   export default {
      name: 'RecyclerView',
      props: {
         screens: {
            type: Array,
            required: true,
         },
         indexActiveScreen: {
            type: Number,
            required: false,
            default: -1,
         },
      },
      setup(props, context) {

         const _screens = reactive({})
         const stepDelay = 10

         const z_indexes = {
            front: '1',
            back: '-1',
         }

         let lastScroll = new Date()

         const styleVars = reactive({
            '--z-index-prev': z_indexes.back,
            '--z-index-next': z_indexes.front,
            '--offset-y': 0 + 'vh',
            '--time-animation': 0.5 + 's',
         })

         if (props.screens.length == 1) {
            _screens.prev = 0
            _screens.cur = 0
            _screens.next = 0
         }
         else if (props.screens.length == 2) {
            _screens.prev = 1
            _screens.cur = 0
            _screens.next = 1
         }
         else if (props.screens.length > 2) {
            _screens.prev = props.screens.length - 1
            _screens.cur = 0
            _screens.next = 1
         }

         const scrollOnCur = (event) => {

            if ((new Date().getTime() - lastScroll.getTime()) < parseFloat(styleVars['--time-animation'].replace('s', '')) * 100) return

            styleVars['--offset-y'] = (parseInt(styleVars['--offset-y'].replace('vh', '')) - (event.deltaY) / stepDelay) + 'vh'

            if (parseInt(styleVars['--offset-y'].replace('vh', '')) < 0) {
               if (styleVars['--z-index-next'] < styleVars['--z-index-prev']) {
                  styleVars['--z-index-next'] = z_indexes.front
                  styleVars['--z-index-prev'] = z_indexes.back
               }

               if (parseInt(styleVars['--offset-y'].replace('vh', '')) <= -100) {

                  if (props.indexActiveScreen == -1) {
                     setCurScreen((_screens.cur + 1 == props.screens.length) ? (0) : (_screens.cur + 1))
                  }
                  else {
                     context.emit('activeScreenChange', (_screens.cur + 1 == props.screens.length) ? (0) : (_screens.cur + 1))
                  }
               }
            }

            if (parseInt(styleVars['--offset-y'].replace('vh', '')) > 0) {

               if (styleVars['--z-index-next'] > styleVars['--z-index-prev']) {
                  styleVars['--z-index-next'] = z_indexes.back
                  styleVars['--z-index-prev'] = z_indexes.front
               }

               if (parseInt(styleVars['--offset-y'].replace('vh', '')) >= 100) {

                  if (props.indexActiveScreen == -1) {
                     setCurScreen((_screens.cur - 1 == -1) ? (props.screens.length - 1) : (_screens.cur - 1))
                  }
                  else {
                     context.emit('activeScreenChange', (_screens.cur - 1 == -1) ? (props.screens.length - 1) : (_screens.cur - 1))
                  }

               }
            }
            lastScroll = new Date()
         }

         const setCurScreen = (index) => {
            setTimeout(() => {
                  _screens.prev = (index - 1 == -1) ? (props.screens.length - 1) : (index - 1)
                  _screens.cur = index
                  _screens.next = (index + 1 == props.screens.length) ? (0) : (index + 1)

                  styleVars['--offset-y'] = 0 + 'vh'
               },
               parseInt(styleVars['--time-animation'].replace('s', '') * 1000),
            )
         }

         if (props.indexActiveScreen != -1) {
            watch(props, () => {
               setCurScreen(props.indexActiveScreen)
            })
         }

         return {
            _screens,
            scrollOnCur,
            styleVars,
         }

      },
   }
</script>

<style lang="scss" scoped>

    .recycler-view {
        overflow-y: hidden;
        height: 100%;
        max-height: 100%;

        .node-cur {
            z-index: 10;
            position: absolute;
            transform: translateY(var(--offset-y));
            transition: transform var(--time-animation);
        }

        .node-prev {
            z-index: var(--z-index-prev);
            position: absolute;
        }

        .node-next {
            z-index: var(--z-index-next);
            position: absolute;
        }
    }


</style>