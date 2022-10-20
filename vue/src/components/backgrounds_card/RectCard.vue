<template>
    <div class="outer_background" :style="options">
        <div class="inner_background">
            <slot/>
        </div>
    </div>
</template>

<script>
   export default {
      name: 'RectCard',
      props: {
         options: {
            type: Object,
            required: false,
            default: {},
         },
      },
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
            width: var(--width, 80%);
            height: var(--height, 80%);
            left: calc((100% - var(--width, 80%)) * 0.5);
            top: calc((100% - var(--height, 80%)) * 0.5);
            border-radius: 50px;
        }
    }

    @media (max-height: 550px) {
        .outer_background {
            .inner_background {
                top: 55px;
                height: 440px;
            }
        }
    }
</style>