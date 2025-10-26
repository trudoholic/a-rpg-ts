import {type IState} from "./state"

export const Actions = {
  SetCount: 'SetCount',
  WorldMove: 'WorldMove',
} as const

export type TAction =
  | { type: 'SetCount', payload: number }
  | { type: 'WorldMove', payload: {x: number, y: number} }

export const reducer = (state: IState, action: TAction): IState => {
  switch (action.type) {

    case Actions.SetCount: {
      return { ...state, count: action.payload }
    }
    case Actions.WorldMove: {
      return { ...state, worldX: state.worldX + action.payload.x, worldY: state.worldY + action.payload.y }
    }
    default: {
      return state
    }

  }
}
