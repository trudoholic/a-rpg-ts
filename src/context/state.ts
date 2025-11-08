import {type TGameStats, initGameStats} from "../data/GameStats"
import {type TWorld, initWorld} from "../data/WorldTiles"
import {type TSites} from "../data/Sites"

export interface IState {
  count: number
  gameStats: TGameStats
  worldX: number
  worldY: number
  worldMap: TWorld
  sites: TSites
}

export const defaultState: IState = {
  count: 0,
  gameStats: initGameStats,
  worldX: 0,
  worldY: 0,
  worldMap: initWorld,
  sites: {},
}
