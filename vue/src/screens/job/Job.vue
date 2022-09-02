<template>
    <div class="job">
        <HorizontalCards :cards="_cards"/>
    </div>
</template>

<script>
   import { _cards }      from './cards/cards'
   import HorizontalCards from '../../components/HorizontalCards'

   export default {
      name: 'Job',
      components: { HorizontalCards },
      setup() {
         return {
            _cards
         }
      }
   }
</script>

<style lang="scss" scoped>
    .job {

        /*left:200px;*/
        /*top: 50px;*/
        /*height: 50%;*/
        /*width: 50%;*/
        height: 100%;
        width: 100%;
        background: cadetblue;
    }
</style>