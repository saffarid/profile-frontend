<template>
    <FullCard style="--inner_color: #664502; --outer_color: #a16c02;">
        <div class="card nadoumchik">
            <div class="d">
                <div class="title">{{data.title}}</div>
                <div class="desc">{{data.desc}}</div>
                <a class="link" target="_blank" href="http://192.168.0.58:20200/">ПЕРЕЙТИ</a>
            </div>
            <div class="image">Перейти на сайт</div>
        </div>
    </FullCard>
</template>

<script>
    import FullCard from "../../../components/FullCard";

    export default {
        name: 'nadoumchik',
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

    .nadoumchik {
        display: grid;
        grid-template-columns: 2fr 3fr;

        .d {
            display: grid;
            grid-template-rows: max-content max-content max-content;
            row-gap: 5px;

            .link {
                border: 2px solid #4ae2fb;
                border-radius: 1000000px;
                text-decoration: none;
            }
        }
    }

</style>