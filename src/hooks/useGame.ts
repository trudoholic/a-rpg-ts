// import {useEffect} from "react"
import useAppContext from "../context/useAppContext"
import {Actions} from "../context/reducer"
import {type IState} from "../context/state"
import {type TGameStatK, GameStat} from "../data/GameStats"
import {getTile, setTile} from "../data/WorldTiles"

const useGame = () => {
  const { state, dispatch } = useAppContext()
  const {
    count,
    worldX,
    worldY,
    worldMap,
    gameStats,
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

  const range = (n: number) => Array.from(Array(n).keys())
  const sum = (a: number[]) => a.reduce((s, i) => s + i, 0)
  const rnd = (n: number) => ~~(n * Math.random() + 1)
  const mRndN = (m: number, n: number) => sum(range(m).map(_ => rnd(n)))

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
      const rndN = mRndN(2, 6)
      // console.log(rndN)

      let siteId = ""
      if (7 === rndN) {
        incGameStat(GameStat.OpenSite)
        siteId = `${rnd(6)}`
      }
      setWorldMap(worldY + dy, worldX + dx, `${rndN}`, siteId)
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
    worldX,
    worldY,
    gameStats,
    // Actions:
    incCount,
    decCount,
    getWorldMap,
    worldMove,
  }
}

export default useGame
