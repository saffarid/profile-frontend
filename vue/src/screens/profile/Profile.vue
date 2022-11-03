<template>
    <div class="profile">

        <img class="photo" src="/img/png/its_me.jpg"/>

        <div class="about_me">
            <div class="desc">
                <span>{{profile.desc}}</span>
            </div>

            <div class="list">
                <div class="list_item" v-for="(item, index) in profile.features" :key="index">
                    <span class="list_item_index">{{++index}}</span>
                    <span class="list_item_text">{{item}}</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
   import {
      inject,
      ref,
   } from 'vue'

   export default {
      name: 'Profile',
      setup() {
         const profile = inject('profile').profile

         return {
            profile,
         }
      },
   }
</script>

<style lang="scss" scoped>

    $list_item_height: 35px;

    .profile {
        height: calc(max(90vh, 500px));
        width: calc(max(90vw, 1000px));
        background: var(--primary_color);

        display: grid;
        grid-template-columns: min-content auto;
        column-gap: 100px;

        padding: calc(max(5vh, 27.7px)) calc(max(5vw, 55.5px));

        img {
            border-radius: 10px;
            height: calc(max(90vh, 500px));

            align-self: center;
            justify-self: center;
        }


        .about_me {
            display: grid;
            align-self: stretch;
            justify-self: stretch;

            background-color: transparent;
            border-radius: 10px;

            grid-template-rows: 1fr 1fr;

            span {
                font-size: 22px;
                letter-spacing: .05em;
                color: var(--primary_text);
            }

            .desc {
                display: grid;
                align-content: center;
                text-align: justify;

                span {
                    text-align: justify;
                }
            }

            .list {
                display: grid;

                grid-template-rows: repeat(auto-fit, $list_item_height);
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
        }
    }

</style>