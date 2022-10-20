<template>
    <component :is="component" :options="options">
        <template v-slot:default>
            <slot/>
        </template>
    </component>
</template>

<script>
    import {
       defineAsyncComponent
    } from 'vue'
   export default {
      name: 'BackgroundCard',
      props:{
         type:{
            type: String,
            required: true
         },
         options: {
            type: Object,
            required: false,
            default: {},
         },
      },
      setup(props){
         const component = defineAsyncComponent(() => import(`./${props.type}`))

         return {
            component
         }
      }
   }
</script>
