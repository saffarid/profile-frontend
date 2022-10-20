<template>
    <div class="outer_background" :style="options">
        <div class="inner_background">
            <slot/>
        </div>
    </div>
</template>

<script>
   export default {
      name: 'LineCard',
      props: {
         options: {
            type: Object,
            required: false,
            default: {},
         },
      }
   }
</script>

<style lang="scss" scoped>

    .outer_background {
        height: 100%;
        width: 100%;
        background-color: var(--outer_color, #ffffff);

        .inner_background {
            position: absolute;
            background-color: var(--inner_color, #000000);
            width: 100%;
            height: var(--height, 80%);
            left: 0;
            padding: 0 10%;
            top: calc((100% - var(--height, 80%)) * 0.5);
        }
    }

    @media (max-height: 550px) {
        .outer_background .inner_background {
            top: 55px;
            height: 440px;
        }
    }
</style>