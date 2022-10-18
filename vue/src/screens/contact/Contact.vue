<template>
    <FullCard style="--inner_color: #616161; --outer_color: #747474;">
        <div class="contacts">
            <span class="title">КОНТАКТЫ</span>
            <div class="contacts_list">
                <template v-for="(obj, key) in contacts" :key="key">
                    <a class="contact" target="_blank" :href="obj.href">
                        <div class="link"
                             :class="key">
                            <div class="point"></div>
                            <component :is="obj.img"/>
                            <span>{{obj.text}}</span>
                        </div>
                    </a>
                </template>
            </div>
        </div>
    </FullCard>

</template>

<script>
   import FullCard from '../../components/FullCard'
   import {
      defineAsyncComponent,
      inject,
   }               from 'vue'

   export default {
      name: 'Contact',
      components: {
         FullCard,
      },
      setup() {
         const contacts = inject('profile').contact
         let imgIsLoad = false

         if (!imgIsLoad) {
            Object.values(contacts).forEach(value => {
               value['img'] = defineAsyncComponent(() => import(`@/assets/images/${value.imgUrl}`))
               imgIsLoad = true
            })
         }

         return {
            contacts,
         }
      },
   }
</script>

<style lang="scss" scoped>
    .outer_background .inner_background .contacts {
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

        .contacts_list {
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

            .contact {
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

                .whatsapp {
                    --c: #0dc143;
                }

                .link {
                    display: grid;
                    column-gap: 5px;
                    grid-template-columns: 4vh 30vh;
                    border-radius: 20px;
                    align-content: center;
                    align-items: center;
                    justify-content: start;
                    justify-items: start;

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