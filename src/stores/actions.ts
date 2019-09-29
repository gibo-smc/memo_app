import { Actions } from '@/stores/types'
import { State, IActions, IGetters, IMutations } from '@/stores/storeTypes'

const actions: Actions<State, IActions, IGetters, IMutations> = {
  addMemo
}

export default actions
