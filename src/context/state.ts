import {
  type TGameStats, initGameStats,
} from "../data/GameStats"

export interface IState {
  count: number
  worldX: number
  worldY: number
  worldMap: {[key: string]: string}
  gameStats: TGameStats
}

export const defaultState: IState = {
  count: 0,
  worldX: 0,
  worldY: 0,
  worldMap: {},
  gameStats: initGameStats,
}
