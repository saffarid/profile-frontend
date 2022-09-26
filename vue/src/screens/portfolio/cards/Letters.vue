<template>
    <FullCard style="--inner_color: #b43503; --outer_color: #a12f02;">
        <div class="card letters">
            <div class="title">{{data.title}}</div>
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
        grid-template-rows: 1fr auto;
        row-gap: 5px;
    }

</style>