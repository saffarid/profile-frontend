<template>
    <FullCard style="--inner_color: #004e02; --outer_color: #015803;">
        <div class="card web_interfaces">
            <div class="title">{{data.title}}</div>
            <div class="desc">{{data.desc}}</div>
        </div>
    </FullCard>
</template>

<script>
    import FullCard from "../../../components/FullCard";

    export default {
        name: 'WebInterfaces',
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

    .web_interfaces {
        display: grid;
        grid-template-rows: 1fr 1fr auto;
        row-gap: 5px;
    }

</style>