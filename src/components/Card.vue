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

<style lang="scss">

    $radius: var(--radius, 20px);
    $width: var(--width, 80%);
    $height: var(--height, 80%);
    $min_height: var(--min_height, 750px);

    $fact_height: calc( max( var(--height, 80%), var(--min_height, 750px) ) );
    $top: calc( (100% - calc( max( var(--height, 80%), var(--min_height, 750px) ) )) * 0.5 );


    .outer_background {
        height: 100%;
        width: 100%;
        background-color: var(--outer_color, #ffffff);

        .inner_background {
            position: absolute;
            background-color: var(--inner_color, #000000);
            width: $width;
            height: $fact_height;
            left: calc((100% - var(--width, 80%)) * 0.5);
            top: $top;
            border-radius: $radius;
        }
    }

</style>