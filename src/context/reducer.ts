import {type IState} from "./state"

export const Actions = {
  SetCount: 'SetCount',
  SetWorldMap: 'SetWorldMap',
  WorldMove: 'WorldMove',
} as const

export type TAction =
  | { type: 'SetCount', payload: number }
  | { type: 'SetWorldMap', payload: {key: string, value: string} }
  | { type: 'WorldMove', payload: {x: number, y: number} }

export const reducer = (state: IState, action: TAction): IState => {
  switch (action.type) {

    case Actions.SetCount: {
      return { ...state, count: action.payload }
    }
    case Actions.SetWorldMap: {
      const ap = action.payload
      return { ...state, worldMap: {...state.worldMap, [ap.key]: ap.value} }
    }
    case Actions.WorldMove: {
      const ap = action.payload
      return { ...state, worldX: state.worldX + ap.x, worldY: state.worldY + ap.y }
    }
    default: {
      return state
    }

  }
}
