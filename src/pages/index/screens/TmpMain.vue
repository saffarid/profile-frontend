<template>

  <TmpCard title="Главная" class="tmp-container-main" :class="{ 'is-mobile': isMobile }">

    <div class="tmp-main">
      
    </div>

    <table>
      <tbody>
        <tr>
          <td>Наименование лекарства</td>
          <td>
            <TmpButton
              class="success"
              :options="{
                        type: button_types.simpleButton,
                        action: () => create()
            }">
              <span>Добавить</span>
            </TmpButton>
          </td>
        </tr>

        <tr  v-for="(drag, i) in drags" :key="drag.id">
          <td><span>{{ drag.nameRu }}</span></td>
          <td>
            <TmpButton
              class="success"
              :options="{
                        type: button_types.simpleButton,
                        action: () => create(drag)
          }">
            <span>Редактировать</span>
          </TmpButton>
          </td>
          <td>
            <TmpButton
              class="cancel"
              :options="{type: button_types.simpleButton,
                        action: () => remove(drag.id)}">
            <span>Удалить</span>
          </TmpButton>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="title">

    </div>

  </TmpCard>
</template>

<script lang="ts">
import {defineComponent, computed, reactive, watchEffect, watch, ref, onUnmounted, onMounted} from 'vue'
import {useStore} from 'vuex'
import TmpCard from '@/components/panes/TmpCard.vue'
import TmpButton from '@/components/controls/input/button/TmpButton.vue'
import TmpToggle from '@/components/controls/input/toggle/TmpToggle.vue'
import {button_types} from '@/js/enums/enums'
import TmpLoading from "@/components/controls/TmpLoading.vue";
import { IDialog } from '@/js/interfaces/interfaces'
import TmpDialogConfirm from '@/components/dialogs/TmpDialogConfirm.vue'
import TmpDialogDrag from '@/components/dialogs/TmpDialogDrag.vue'
import { objectCopy } from '@/js/utils'
import { IDrag } from '@/js/interfaces/interfaces'

export default defineComponent({
  name: 'TmpMain',
  components: {
    TmpLoading,
    TmpCard,
    TmpButton,
    TmpToggle,
  },
  setup() {
    const store = useStore()
    const model = computed(() => store.getters.model)
    const isMobile = computed(() => store.getters.isMobile)
    const curUser = computed(() => store.getters.curUser)
    const drags = reactive<IDrag[]>([])

    window.addEventListener('resize', () => {
    })

    watchEffect(() => {
      objectCopy(model.value.config.drags, drags)
    })

    const testDrag = (drag:any) => {
      return false
    }

    const create = (drag?:any) => {
      let changedDrag = {}
      const disableBtn = ref<boolean>(false)
      Object.assign(changedDrag, drag)
      store.dispatch('setDialogPane', <IDialog>{
          _callbacks: {
            changeDrag: (drag: any) => {
              disableBtn.value = testDrag(drag)
              changedDrag = drag
            }
          },
          _component: TmpDialogDrag,
          _componentData: changedDrag,
          _dismiss: () => store.dispatch('clearDialogPane'),
          _isShow: true,
          _negativeButton: {
            type: button_types.simpleButton,
            text: 'Отмена',
            action: () => store.dispatch('clearDialogPane')
          },
          _neutralButton: undefined,
          _positiveButton: {
            type: button_types.simpleButton,
            disabled: disableBtn,
            text: 'Добавить',
            action: () => {
                let param = {
                  key: 'config.drags',
                  data: changedDrag
                }
                if(drag === undefined) {
                  store.dispatch('add', param).then((value: any) => {
                    store.dispatch('clearDialogPane')
                  })
                } else {
                  store.dispatch('set', param).then((value: any) => {
                    store.dispatch('clearDialogPane')
                  })
                }


            }
          },
          _title: 'Новое лекарство'
        })
    }

    const remove = (id: number) => {
        store.dispatch('setDialogPane', <IDialog>{
          _callbacks: undefined,
          _component: TmpDialogConfirm,
          _componentData: undefined,
          _dismiss: () => store.dispatch('clearDialogPane'),
          _isShow: true,
          _negativeButton: {
            type: button_types.simpleButton,
            text: 'Отмена',
            action: () => store.dispatch('clearDialogPane')
          },
          _neutralButton: undefined,
          _positiveButton: {
            type: button_types.simpleButton,
            text: 'Ок',
            action: () => {
                let param = {
                  key: 'config.drags',
                  data: id
                }
                store.dispatch('remove', param).then((value: any) => {
                  store.dispatch('clearDialogPane')
                  console.log('value', value)
                })
            }
          },
          _title: 'Подтверждение действия'
        })
    }


    return {
      button_types,
      model,
      isMobile,
      curUser,
      create, remove,
      drags
    }

  },
})
</script>

<style lang="scss">
@import '@/assets/style/screens/tmp_main.scss';
</style>