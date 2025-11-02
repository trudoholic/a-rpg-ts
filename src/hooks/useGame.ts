// import {useEffect} from "react"
import useAppContext from "../context/useAppContext"
import {Actions} from "../context/reducer"
import {type IState} from "../context/state"
import {tileKey} from "../data/WorldTiles"
import {type TGameStatK, GameStat} from "../data/GameStats"

const useGame = () => {
  const { state, dispatch } = useAppContext()
  const {
    count,
    worldX,
    worldY,
    worldMap,
    gameStats,
  } = state as IState

  // useEffect(() => {
  //   setWorldMap(0, 0, '0')
  // }, [])

  const incCount = (n: number) => {
    dispatch({type: Actions.SetCount, payload: count + n})
  }

  const decCount = (n: number) => {
    dispatch({type: Actions.SetCount, payload: count - n})
  }

  function getWorldMap(row: number, col: number) {
    return worldMap[tileKey(row, col)] ?? ""
  }

  function setWorldMap(row: number, col: number, value: string) {
    dispatch({type: Actions.SetWorldMap, payload: {key: tileKey(row, col), value}})
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
      incGameStat(GameStat.OpenTile)
      const rnd1 = ~~(6 * Math.random() + 1)
      const rnd2 = ~~(6 * Math.random() + 1)
      const rnd = rnd1 + rnd2
      // console.log(rnd)

      if (7 === rnd) {
        incGameStat(GameStat.OpenSite)
      }
      setWorldMap(worldY + dy, worldX + dx, `${rnd}`)
    }
    dispatch({type: Actions.WorldMove, payload: {x: dx, y: dy}})
  }

  const incGameStat = (key: TGameStatK, n: number = 1) => {
    dispatch({type: Actions.SetGameStat, payload: {
        key, value: gameStats[key] + n
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
