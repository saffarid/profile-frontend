<template>
    <div class="profile">
        <img class="photo" src="/img/png/its_me.jpg"/>
        <div class="about_me">
            <div class="desc">
                <span>Добрый день.</span>
                <span>Меня зовут Павлов Никита.</span>
                <span>Являюсь разработчиком с августа 2020 года.</span>
                <span>Данная страничка - презентация моих навыков.</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        inject,
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

<style lang="scss">

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