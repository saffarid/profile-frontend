<template>
    <div class="portfolio">
        <HorizontalCards :cards="cards"/>
    </div>
</template>

<script>
    import {_cards} from './cards/cards'
    import HorizontalCards from '../../components/HorizontalCards'

    import {
        inject
    } from 'vue'

    export default {
        name: 'Portfolio',
        components: {HorizontalCards},
        setup() {
            const portfolio = inject("profile").portfolio
            const cards = _cards(portfolio)
            return {
                cards
            }
        }
    }
</script>

<style lang="scss" scoped>
    .portfolio {
        /*left:200px;*/
        /*top: 50px;*/
        /*height: 50%;*/
        /*width: 50%;*/
        height: 100%;
        width: 100%;
        background: cadetblue;
    }
</style>