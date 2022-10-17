<template>
    <FullCard style="--inner_color: #b43503; --outer_color: #a12f02;">
        <div class="card letters">
            <div class="title">{{data.title}}</div>
            <div class="l">
                <div class="link">
                    <iframe src="./letters/elemy/letter.html" frameborder="0" scrolling="no"/>
                </div>
                <div class="desc"></div>
            </div>
        </div>
    </FullCard>
</template>

<script>
    import FullCard from "../../../components/FullCard";

    export default {
        name: 'Letters',
        components: {
            FullCard
        },
        props: {
            data: {
                type: Object,
                required: false
            }
        }
    }
</script>

<style lang="scss" scoped>

    @import "card";

    .letters {
        display: grid;
        grid-template-rows: 100px auto;
        row-gap: 5px;
        align-self: stretch;
        justify-self: stretch;
        height: 97%;

        .l {
            display: grid;
            grid-template-columns: 2fr 1fr;
            align-content: stretch;
            align-items: stretch;
            align-self: stretch;
            justify-content: stretch;
            justify-items: stretch;
            justify-self: stretch;

            .link {
                display: grid;
                align-self: stretch;
                justify-items: center;
                justify-content: stretch;
                justify-self: stretch;
                align-content: stretch;
                align-items: stretch;
                overflow-y: auto;
                iframe {
                    width: 81.6%;
                    height: 320%;
                    overflow-y: hidden;
                }
            }
        }

    }

</style>