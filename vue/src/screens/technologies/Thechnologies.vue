<template>
    <Card :options="{
                       '--height': '65%',
                       '--width': '100%',
                       '--radius': '0',
                       '--inner_color': '#2b4663',
                       '--outer_color': 'var(--primary_color)'
                    }">
        <div class="tecnologies">
            <h1 class="title">ТЕХНОЛОГИИ</h1>
            <div :class="{'technical-table-on-width': onWidth, 'technical-table-on-height': !onWidth}">
                <div class="row" v-for="(item, index) in technologies" :key="index">
                    <span>{{item.title}}</span>
                    <template v-for="(item1, index1) in item.list" :key="index1">
                        <Item :title="item1.title" :image="item1.image"/>
                    </template>
                </div>
            </div>
        </div>
    </Card>
</template>

<script>
   import Card             from '../../components/Card'
   import Item             from './Item'
   import { technologies } from './tech_desc'

   export default {
      name: 'Thechnologies',
      components: {
         Item,
         Card,
      },
      setup() {
         const onWidth = true

         return {
            technologies,
            onWidth,
         }
      },
   }
</script>

<style lang="scss" scoped>

    h1, span {
        color: var(--primary_text)
    }

    .tecnologies {
        padding: 5px 5px 5px 10%;

        .title {
            font-size: 21px;
            margin-left: 50px;
            margin-top: 10px;
            margin-bottom: 10px;
            letter-spacing: .2em;
        }
    }

    .technical-table-on-height {
        display: grid;
        grid-template-rows: repeat(4, minmax(87px, 16.597vh));
        row-gap: calc(min(1vh, 1vw));

        .row {
            display: grid;
            grid-template-columns: 110px repeat(auto-fit, minmax(110px, 7.8125vw));

            column-gap: calc(min(1vh, 1vw));

            align-content: stretch;
            align-items: stretch;


            span {
                align-self: center;
            }
        }
    }

    .technical-table-on-width {
        display: grid;
        grid-template-columns: repeat(auto-fit, 175px);
        column-gap: calc(min(1vh, 1vw));

        .row {
            display: grid;
            grid-template-rows: 50px repeat(auto-fit, 150px);

            row-gap: calc(min(1vh, 1vw));
            align-content: stretch;
            align-items: stretch;
            justify-content: stretch;
            justify-items: stretch;

            span {
                letter-spacing: .1em;
                align-self: center;
                justify-self: center;
                font-weight: 500;
            }
        }
    }


    @media (max-width: 550px) {
        .technical-table {
            row-gap: 5.5px;

            .row {
                column-gap: 5.5px;
            }
        }
    }

</style>