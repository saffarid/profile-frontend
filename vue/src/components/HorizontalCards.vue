<template>
    <div class="horizontal-card" ref="horizontalCard" :style="styleVars" @keyup.right="toNext" @keyup.left="toPrev" @keyup="keyup($event)">
        <ImageButton class="button-back" ref="back" @click="toPrev">
            <SvgBack :height="buttonSizes.size" :width="buttonSizes.size"/>
        </ImageButton>
        <ImageButton class="button-next" ref="next" @click="toNext">
            <SvgNext :height="buttonSizes.size" :width="buttonSizes.size"/>
        </ImageButton>

        <div style="width: 100%">
            <component class="node-cur" :is="cards[_cards.cur].card"/>
            <component aria-hidden="true" class="node-prev" :is="cards[_cards.prev].card"/>
            <component aria-hidden="true" class="node-next" :is="cards[_cards.next].card"/>
        </div>

        <div class="bullet_wrapper" ref="bulletWrapper">
            <template v-for="index of cards.length" :key="index">
                <div :class="{'bullet_select':(index-1) == _cards.cur}">
                    <ImageButton @click="setCurCard(index-1)">
                        <SvgRect :height="10" :width="10"/>
                    </ImageButton>
                </div>
            </template>
        </div>
    </div>
</template>

<script>

   import {
      onBeforeUnmount,
      ref,
      reactive,
      watch,
   } from 'vue'

   import ImageButton from './input/ImageButton'
   import SvgBack     from '../assets/images/SvgBack'
   import SvgNext     from '../assets/images/SvgNext'
   import SvgRect     from '../assets/images/SvgRect'
   import Bullets     from './Bullets'

   export default {
      name: 'HorizontalCards',
      components: {
         Bullets,
         SvgRect,
         ImageButton,
         SvgBack,
         SvgNext,
      },
      props: {
         cards: {
            type: Array,
            required: true,
         },
      },
      setup(props) {

         let lastSwitch = new Date()

         const _cards = reactive({})

         const back = ref(null)
         const next = ref(null)
         const bulletWrapper = ref(null)
         const horizontalCard = ref(null)

         if (props.cards.length == 1) {
            _cards.prev = 0
            _cards.cur = 0
            _cards.next = 0
         }
         else if (props.cards.length == 2) {
            _cards.prev = 1
            _cards.cur = 0
            _cards.next = 1
         }
         else if (props.cards.length > 2) {
            _cards.prev = props.cards.length - 1
            _cards.cur = 0
            _cards.next = 1
         }

         const buttonSizes = reactive({
            size: 0,
            shiftHor: 0,
            shiftVer: 0,
         })

         const styleVars = reactive({
            '--time-animation': 0.5 + 's',
            '--button_shift_h': 0 + 'px',
            '--button_shift_v': 0 + 'px',
            '--bullet_count': props.cards.length,
            '--bullet_shift_h': 0 + 'px',
            '--bullet_shift_v': 0 + 'px',

            '--cur-offset-x': 0 + '%',
            '--prev-offset-x': -100 + 'vw',
            '--next-offset-x': 100 + 'vw',

            '--prev-opacity': 0,
            '--cur-opacity': 1,
            '--next-opacity': 0,
         })

         const calcSizes = () => {
            const innerWidth = horizontalCard.value.clientWidth
            const innerHeight = horizontalCard.value.clientHeight

            buttonSizes.size = (75 / 1080) * Math.min(innerHeight, innerWidth)
            buttonSizes.shiftHor = (40 / 1920) * innerWidth
            buttonSizes.shiftVer = (innerHeight - buttonSizes.size) / 2

            styleVars['--button_shift_v'] = buttonSizes.shiftVer + 'px'
            styleVars['--button_shift_h'] = buttonSizes.shiftHor + 'px'

            styleVars['--bullet_shift_h'] = ((innerWidth - bulletWrapper.value.clientWidth) / 2) + 'px'
            styleVars['--bullet_shift_v'] = ((50 / 1080) * innerHeight) + 'px'
         }

         watch(horizontalCard, () => {
            horizontalCard.value.addEventListener('keyup', (event) => {
               console.log(event)
            })
            horizontalCard.value.focus()
            calcSizes()
            window.addEventListener('resize', calcSizes)
         })

         const setCurCard = (index) => {
            console.log(index)

            styleVars['--cur-offset-x'] = 0 + '%'
            styleVars['--prev-offset-x'] = -100 + 'vw'
            styleVars['--next-offset-x'] = 100 + 'vw'

            styleVars['--prev-opacity'] = 0
            styleVars['--cur-opacity'] = 1
            styleVars['--next-opacity'] = 0

            _cards.prev = (index - 1 == -1) ? (props.cards.length - 1) : (index - 1)
            _cards.cur = index
            _cards.next = (index + 1 == props.cards.length) ? (0) : (index + 1)
         }

         const toNext = () => {

            if ((new Date().getTime() - lastSwitch.getTime()) < parseFloat(styleVars['--time-animation'].replace('s', '')) * 1000) return
            lastSwitch = new Date()
            styleVars['--cur-offset-x'] = -100 + 'vw'
            styleVars['--prev-offset-x'] = -200 + 'vw'
            styleVars['--next-offset-x'] = 0 + '%'

            styleVars['--prev-opacity'] = 0
            styleVars['--cur-opacity'] = 0
            styleVars['--next-opacity'] = 1

            setTimeout(() => {
               setCurCard((_cards.cur + 1 == props.cards.length) ? (0) : (_cards.cur + 1))
            }, parseFloat(styleVars['--time-animation'].replace('s', '')) * 1000)
            // setCurCard((_cards.cur + 1 == props.cards.length) ? (0) : (_cards.cur + 1))
         }

         const toPrev = () => {
            if ((new Date().getTime() - lastSwitch.getTime()) < parseFloat(styleVars['--time-animation'].replace('s', '')) * 1000) return
            lastSwitch = new Date()
            styleVars['--cur-offset-x'] = 100 + 'vw'
            styleVars['--prev-offset-x'] = 0 + '%'
            styleVars['--next-offset-x'] = 200 + 'vw'

            styleVars['--prev-opacity'] = 1
            styleVars['--cur-opacity'] = 0
            styleVars['--next-opacity'] = 0

            setTimeout(() => {
               setCurCard((_cards.cur - 1 == -1) ? (props.cards.length - 1) : (_cards.cur - 1))
            }, parseFloat(styleVars['--time-animation'].replace('s', '')) * 1000)


         }

         const keyup = (event) => {
            console.log(event)
         }

         onBeforeUnmount(() => {
            horizontalCard.value.removeEventListener('keyup')
         })

         return {
            keyup,
            back,
            bulletWrapper,
            buttonSizes,
            _cards,
            horizontalCard,
            next,
            toNext,
            toPrev,
            styleVars,
            setCurCard,
         }
      },
   }
</script>

<style lang="scss" scoped>
    .horizontal-card {
        overflow-y: hidden;
        height: 100%;
        /*width: 100%;*/

        .button-back {
            z-index: 100;
            position: absolute;
            border-radius: 50%;
            left: var(--button_shift_h);
            top: var(--button_shift_v);
            transition: background-color 0.25s;
            background-color: transparent;

            &:hover {
                background-color: rgba(201, 201, 201, 0.65);
            }
        }

        .button-next {
            z-index: 100;
            position: absolute;
            border-radius: 50%;
            right: var(--button_shift_h);
            top: var(--button_shift_v);
            transition: background-color 0.25s;
            background-color: transparent;

            &:hover {
                background-color: rgba(201, 201, 201, 0.65);
            }
        }

        .bullet_wrapper {
            z-index: 100;
            position: absolute;
            left: var(--bullet_shift_h);
            bottom: var(--bullet_shift_v);
            display: grid;
            min-height: 30px;
            max-height: 30px;
            grid-template-columns: repeat(var(--bullet_count), 30px);
            justify-content: center;
            justify-self: center;
            justify-items: center;
            align-items: center;
            align-content: center;
            align-self: center;

            .image-button {
                background-color: transparent;

                svg {
                    transition: transform var(--time-animation);
                }
            }

            .bullet_select {
                .image-button {
                    svg {
                        transform: scale(1.25);
                    }
                }
            }
        }

        .node-cur {
            z-index: 10;
            position: absolute;

            transform: translateX(var(--cur-offset-x));
            transition: transform var(--time-animation);
        }

        .node-cur-opacity {
            opacity: var(--cur-opacity);
            transition: opacity 1s;
        }

        .node-prev {
            z-index: var(--z-index-prev);
            position: absolute;
            opacity: var(--prev-opacity);
            transform: translateX(var(--prev-offset-x));
            transition: transform, opacity var(--time-animation);
        }

        .node-prev-opacity {
            opacity: var(--prev-opacity);
            transition: opacity 1s;
        }

        .node-next {
            z-index: var(--z-index-next);
            position: absolute;
            opacity: var(--next-opacity);
            transform: translateX(var(--next-offset-x));
            transition: transform, opacity var(--time-animation);
        }

        .node-next-opacity {
            opacity: var(--next-opacity);
            transition: opacity 1s;
        }
    }
</style>