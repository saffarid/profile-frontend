<template>
    <div class="item">
        <span class="title">{{title}}</span>
        <component :is="image"/>
    </div>
</template>

<script>

    export default {
        name: 'Item',
        props: {
            title: {
                type: String,
                required: true,
                default: 'You missed title',
            },
            image: {
                type: String,
                required: true,
                default: '@/assets/images/SvgNotFound.vue',
            },
        },
        setup() {

        },
    }
</script>

<style lang="scss">
    .item {
        display: grid;
        grid-template-areas: "title" "image";
        grid-template-rows: 4vh auto;
        /*width: 7.8125vw;*/
        /*height: 16.597vh;*/
        border-radius: 10px;
        background-color: #BEBEBE;
        align-content: stretch;
        align-items: center;
        align-self: stretch;
        justify-content: stretch;
        justify-items: center;
        justify-self: stretch;
        padding: 5px;

        .title {
            grid-area: title;
            white-space: pre;
            letter-spacing: .1em;
        }

        svg {
            grid-area: image;
            min-width: 55px;
            min-height: 55px;
            width: calc(min(10vh, 5vw));
            height: calc(min(10vh, 5vw));
        }

    }

    @media (max-height: 550px) {
        /*.item {*/
        /*    grid-template-areas: "image title";*/
        /*    grid-template-rows: 10vh;*/
        /*    grid-template-columns: 10vh auto;*/

        /*    svg {*/
        /*        width: 7.75vh;*/
        /*        height: 7.75vh;*/
        /*    }*/
        /*}*/
        .item {
            .item {
                grid-template-rows: 22px auto;
        }
    }}
</style>