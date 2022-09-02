import { defineAsyncComponent } from 'vue'

const _cards = [
   {
      card: defineAsyncComponent(() => import('./Job1')),
   },
   {
      card: defineAsyncComponent(() => import('./Job2')),
   },
   {
      card: defineAsyncComponent(() => import('./Job3')),
   },
   {
      card: defineAsyncComponent(() => import('./Job4')),
   },
]

export {
   _cards,
}