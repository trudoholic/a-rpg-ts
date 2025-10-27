import useAppContext from "../context/useAppContext"
import {Actions} from "../context/reducer"
import {type IState} from "../context/state"

const useGame = () => {
  const { state, dispatch } = useAppContext()
  const {
    count,
    worldX,
    worldY,
    worldMap,
  } = state as IState

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
    setWorldMap(worldY + dy, worldX + dx, "1")
    dispatch({type: Actions.WorldMove, payload: {x: dx, y: dy}})
  }

  return {
    count,
    worldX,
    worldY,
    incCount,
    decCount,
    getWorldMap,
    worldMove,
  }
}

export default useGame
