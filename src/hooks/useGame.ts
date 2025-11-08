// import {useEffect} from "react"
import useAppContext from "../context/useAppContext"
import {Actions} from "../context/reducer"
import {type IState} from "../context/state"
import {type TGameStatK, GameStat} from "../data/GameStats"
import {getTile, setTile} from "../data/WorldTiles"
import {createSite} from "../data/Sites"
import useShuffleBag from "./useShuffleBag"
import {Dice, Dice2} from "../data/Utils"


const useGame = () => {
  const { state, dispatch } = useAppContext()
  const {
    count,
    gameStats,
    worldX,
    worldY,
    worldMap,
    sites,
  } = state as IState

  // useEffect(() => {setWorldMap(0, 0, '0')}, [])

  const incCount = (n: number) => {
    dispatch({type: Actions.SetCount, payload: count + n})
  }

  const decCount = (n: number) => {
    dispatch({type: Actions.SetCount, payload: count - n})
  }

  function getWorldMap(row: number, col: number) {
    return getTile(worldMap, row, col)
  }

  function setWorldMap(row: number, col: number, terrain: string, site: string) {
    dispatch({type: Actions.SetWorldMap, payload: setTile(row, col, terrain, site)})
  }

  const {next: next1D6} = useShuffleBag(Dice(6))
  const {next: next2D6} = useShuffleBag(Dice2(6))

  const worldMove = (id: number) => {
    const XY = [
        [-1, -1], [ 0, -1], [ 1, -1],
        [-1,  0], [ 0,  0], [ 1,  0],
        [-1,  1], [ 0,  1], [ 1,  1],
    ]
    const dx = XY[id][0], dy = XY[id][1]
    const terrain = getWorldMap(worldY + dy, worldX + dx).terrain
    if (!terrain) {
      incCount(1)
      incGameStat(GameStat.OpenTile)
      const rnd2D6 = next2D6()

      let siteId = ""
      if (7 === rnd2D6) {
        incGameStat(GameStat.OpenSite)
        const site = createSite(next1D6())
        dispatch({type: Actions.SetSite, payload: {key: site.id, value: site}})
        siteId = site.id
      }
      setWorldMap(worldY + dy, worldX + dx, `${rnd2D6}`, siteId)
    }
    if (!dx && !dy) {
      dispatch({type: Actions.WorldTP, payload: {x: dx, y: dy}})
    }
    else {
      dispatch({type: Actions.WorldMove, payload: {x: dx, y: dy}})
    }
  }

  const incGameStat = (key: TGameStatK, n: number = 1) => {
    dispatch({type: Actions.SetGameStat, payload: {
        key, value: gameStats[key] + n
      }})
  }

  return {
    // State:
    count,
    gameStats,
    worldX,
    worldY,
    sites,
    // Actions:
    incCount,
    decCount,
    getWorldMap,
    worldMove,
  }
}

export default useGame
