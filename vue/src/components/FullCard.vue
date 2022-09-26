<template>
    <div class="outer_background">
        <div class="inner_background">
            <slot/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FullCard"
    }
</script>

<style lang="scss" scoped>
    .outer_background {
        height: 100%;
        width: 100%;
        background-color: var(--outer_color);

        .inner_background {
            position: absolute;
            background-color: var(--inner_color);
            width: 80%;
            height: 80%;
            left: 10%;
            top: 10%;
            border-radius: 50px;
        }
    }
</style>