<template>
    <Card :options="{'--width':'88%',
                               '--height':'85%',
                               '--inner_color':'var(--primary_color)',
                               '--outer_color':'#664502'}">
        <div class="card nadoumchik">
            <div class="d">
                <div class="title">{{data.title}}</div>
                <div class="desc">{{data.desc}}</div>
                <div class="list">
                    <div class="list_item" v-for="(item, index) in data.features" :key="index">
                        <span class="list_item_index">{{++index}}</span>
                        <span class="list_item_text">{{item}}</span>
                    </div>
                </div>
                <a class="link" target="_blank" :href="linkOnWeb">#Надоумчик</a>
            </div>
            <div class="view">
                <iframe :src="linkOnWeb" frameborder="0" scrolling="no"/>
            </div>
        </div>
    </Card>
</template>

<script>
   import Card from '../../../components/Card'

   export default {
      name: 'nadoumchik',
      components: {
         Card,
      },
      props: {
         data: {
            type: Object,
            required: false,
         },
      },
      setup() {
         const linkOnWeb = 'https://nadoumchik.ru'
         return {
            linkOnWeb,
         }
      },
   }
</script>

<style lang="scss" scoped>

    @import "card";

    .nadoumchik {
        display: grid;
        grid-template-columns: 1fr 3fr;
        align-self: stretch;
        justify-self: stretch;
        height: 97%;

        .d {
            display: grid;
            grid-template-rows: repeat(4, max-content);
            row-gap: 5px;

            .list {
                display: grid;
                row-gap: 10px;

                .list_item {
                    display: flex;
                    column-gap: 5px;
                    align-items: center;

                    .list_item_index {
                        background-color: var(--secondary_color_B);
                        justify-items: center;
                        justify-content: center;
                        text-align: center;
                        border-radius: 10px;
                        padding: 2px 10px;
                    }
                }
            }

            .link {
                border: 2px solid #4ae2fb;
                border-radius: 1000000px;
                text-decoration: none;
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