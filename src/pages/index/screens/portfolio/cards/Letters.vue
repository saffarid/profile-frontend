<template>
    <Card :options="{'--width':'88%',
                               '--height':'85%',
                               '--inner_color':'var(--primary_color)',
                               '--outer_color': '#6d3622'}">
        <div class="card letters">
            <div class="l">
                <div class="title">{{data.title}}</div>
                <div class="desc" v-html="data.desc"/>
            </div>
            <div class="view">
                <iframe src="./letters/elemy/letter.html" frameborder="0" scrolling="no"/>
            </div>
        </div>
    </Card>
</template>

<script>
   import Card from '../../../../../components/Card'

   export default {
      name: 'Letters',
      components: {
         Card,
      },
      props: {
         data: {
            type: Object,
            required: false,
         },
      },
   }
</script>

<style lang="scss" scoped>

    @import "card";

    .letters {
        display: grid;
        grid-template-columns: 1fr minmax(800px, 3fr);
        row-gap: 5px;
        align-self: stretch;
        justify-self: stretch;
        height: 97%;

        .l {
            display: grid;
            grid-template-rows: 100px auto;
            align-content: stretch;
            align-items: stretch;
            align-self: stretch;
            justify-content: stretch;
            justify-items: stretch;
            justify-self: stretch;

            .desc {

            }
        }

        .view {
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

</style>