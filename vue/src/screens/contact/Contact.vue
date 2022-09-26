<template>
    <FullCard style="--inner_color: #616161; --outer_color: #747474;">
        <div class="contact">
            <span class="title">КОНТАКТЫ</span>
            <div class="contacts">
                <a target="_blank" href="mailto:pavlov.nikita@mail.ru">
                    <div class="link mail">
                        <div class="point"></div>
                        <SvgMail/>
                        <span>
                    PAVLOV.NIKITA@MAIL.RU
                </span>
                    </div>
                </a>
                <a target="_blank" href="https://t.me/saffarid">
                    <div class="link telegram">
                        <div class="point"></div>
                        <SvgTelegram/>
                        <span>
                    TELEGRAM
                </span>
                    </div>
                </a>
                <a target="_blank" href="https://vk.com/id5690462">
                    <div class="link vk">
                        <div class="point"></div>
                        <SvgVk/>
                        <span>
                    VKONTAKTE
                </span>
                    </div>
                </a>

            </div>
        </div>
    </FullCard>

</template>

<script>
    import SvgMail from "../../assets/images/SvgMail";
    import SvgTelegram from "../../assets/images/SvgTelegram";
    import SvgVk from "../../assets/images/SvgVk";
    import FullCard from "../../components/FullCard";

    export default {
        name: "Contact",
        components: {
            FullCard,
            SvgVk,
            SvgTelegram,
            SvgMail
        }
    }
</script>

<style lang="scss" scoped>

    .outer_background .inner_background .contact {
        position: absolute;
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-rows: max-content max-content;
        align-items: center;
        align-content: center;
        padding-left: 15%;
        row-gap: 15%;

        .title {
            font-size: 15vh;
            font-weight: 600;
            font-family: "Segoe UI";
            color: #ffffff;
        }

        .contacts {
            height: 100%;
            width: 100%;
            display: grid;
            grid-template-rows: repeat(3, 40px);
            row-gap: 5px;
            align-content: center;
            align-items: center;
            align-self: center;
            justify-content: start;
            justify-items: start;
            justify-self: center;
            /*padding: 10%;*/

            a {
                height: 100%;
                text-decoration: none;
                color: #ffffff;

                .mail {
                    --c: #005ff9;
                }

                .telegram {
                    --c: #24a1df;
                }

                .vk {
                    --c: #0077ff;
                }

                .link {
                    display: grid;
                    column-gap: 5px;
                    grid-template-columns: 4vh 30vh;
                    border-radius: 20px;
                    /*height: 100%;*/
                    align-content: center;
                    align-items: center;
                    justify-content: start;
                    justify-items: start;
                    /*padding: 5px 5px 5px 7.5px;*/

                    span {
                        font-size: 2.5vh;
                        z-index: 1;
                    }

                    svg {
                        width: 2.5vh;
                        height: 2.5vh;
                        justify-self: center;
                        z-index: 1;
                    }

                    .point {
                        border-radius: 2vh;
                        height: 4vh;
                        width: 4vh;
                        background: var(--c);
                        position: absolute;
                        z-index: 0;
                        transition: width 1s;
                    }

                    &:hover {
                        .point {
                            width: 34vh;
                        }
                    }
                }
            }
        }
    }

</style>