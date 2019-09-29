export interface IMemo {
  id: number
  text: string
  date: string
  tag: string[]
}

export interface State {
  userName: string | null
  memoList: IMemo[]
}

export interface IGetters {
  findMemoIndex: (id: number) => number
  getMemoList: IMemo[]
}

export interface IMutations {
  addMemo: IMemo
  updateMemo: {
    id: number
    memo: IMemo
  }
  removeMemo: number
}

export interface IActions {
  addMemo: IMemo
  updateMemo: {
    id: number
    memo: IMemo
  }
  removeMemo: number
}
