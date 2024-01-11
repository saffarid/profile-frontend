import { defineAsyncComponent } from 'vue'

/**
 * @param portfolio объект, хранящий в себе описание работ - портфолио
 * */
const _cards = (portfolio) => {
   return [
      {
         card: defineAsyncComponent(() => import('./Thoth')),
         data: portfolio.thoth
      },
      {
         card: defineAsyncComponent(() => import('./Letters')),
         data: portfolio.letters
      },
      {
         card: defineAsyncComponent(() => import('./WebInterfaces')),
         data: portfolio.web_devices
      },
      {
         card: defineAsyncComponent(() => import('./Nadoumchik')),
         data: portfolio.nadoumchik
      },
      {
         card: defineAsyncComponent(() => import('./Axelrod')),
         data: portfolio.axelrod
      },
   ]
}

export {
   _cards,
}