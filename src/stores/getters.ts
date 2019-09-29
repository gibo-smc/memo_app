import { Getters } from '@/stores/types'
import { State, IGetters} from '@/stores/storeTypes'

const getters: Getters<State, IGetters> = {
  findMemoIndex (state) {
    return (id: number) => {
      return state.memoList.findIndex((memo) => {
        return memo.id === id
      })
    }
  },
  getMemoList (state) {
    return state.memoList
  }
}

export default getters
