import {useEffect} from "react"
import useAppContext from "../context/useAppContext"
import {Actions} from "../context/reducer"
import {type IState} from "../context/state"
import {
  GameStat,
} from "../data/GameStats"

const useGame = () => {
  const { state, dispatch } = useAppContext()
  const {
    count,
    worldX,
    worldY,
    worldMap,
    gameStats,
  } = state as IState

  useEffect(() => {
    setWorldMap(0, 0, '0')
  }, [])

  const incCount = (n: number) => {
    dispatch({type: Actions.SetCount, payload: count + n})
  }

  const decCount = (n: number) => {
    dispatch({type: Actions.SetCount, payload: count - n})
  }

  function getWorldMap(row: number, col: number) {
    return worldMap[`${row}:${col}`] ?? ""
  }

  function setWorldMap(row: number, col: number, value: string) {
    dispatch({type: Actions.SetWorldMap, payload: {key: `${row}:${col}`, value}})
  }

  const worldMove = (id: number) => {
    const XY = [
        [-1, -1], [ 0, -1], [ 1, -1],
        [-1,  0], [ 0,  0], [ 1,  0],
        [-1,  1], [ 0,  1], [ 1,  1],
    ]
    const dx = XY[id][0], dy = XY[id][1]
    const tile = getWorldMap(worldY + dy, worldX + dx)
    if (!tile) {
      incCount(1)
      incStatTile(1)
      const rnd1 = ~~(6 * Math.random() + 1)
      const rnd2 = ~~(6 * Math.random() + 1)
      const rnd = rnd1 + rnd2
      // console.log(rnd)

      if (7 === rnd) {
        incStatSite(1)
      }
      setWorldMap(worldY + dy, worldX + dx, `${rnd}`)
    }
    dispatch({type: Actions.WorldMove, payload: {x: dx, y: dy}})
  }

  const incStatTile = (n: number) => {
    dispatch({type: Actions.SetGameStat, payload: {
      key: GameStat.OpenTile, value: gameStats[GameStat.OpenTile] + n
    }})
  }

  const incStatSite = (n: number) => {
    dispatch({type: Actions.SetGameStat, payload: {
        key: GameStat.OpenSite, value: gameStats[GameStat.OpenSite] + n
      }})
  }

  return {
    count,
    worldX,
    worldY,
    gameStats,
    //
    incCount,
    decCount,
    getWorldMap,
    worldMove,
  }
}

export default useGame
