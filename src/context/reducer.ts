import {type IState} from "./state"
import {type TGameStatK, type TGameStatV} from "../data/GameStats"
import {type TWorldK, type TWorldV} from "../data/WorldTiles"

export const Actions = {
  SetCount: 'SetCount',
  SetGameStat: 'SetGameStat',
  SetWorldMap: 'SetWorldMap',
  WorldMove: 'WorldMove',
} as const

export type TAction =
  | { type: 'SetCount', payload: number }
  | { type: 'SetGameStat', payload: {key: TGameStatK, value: TGameStatV} }
  | { type: 'SetWorldMap', payload: {key: TWorldK, value: TWorldV} }
  | { type: 'WorldMove', payload: {x: number, y: number} }

export const reducer = (state: IState, action: TAction): IState => {
  switch (action.type) {

    case Actions.SetCount: {
      return { ...state, count: action.payload }
    }
    case Actions.SetGameStat: {
      const ap = action.payload
      return { ...state, gameStats: {...state.gameStats, [ap.key]: ap.value} }
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
