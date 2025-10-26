import useAppContext from "../context/useAppContext"
import {Actions} from "../context/reducer"
import {type IState} from "../context/state"

const useGame = () => {
  const { state, dispatch } = useAppContext()
  const {
    count,
    worldX,
    worldY,
  } = state as IState

  const incCount = (n: number) => {
    dispatch({type: Actions.SetCount, payload: count + n})
  }

  const decCount = (n: number) => {
    dispatch({type: Actions.SetCount, payload: count - n})
  }

  const worldMove = (id: number) => {
    console.log('->', id)
    dispatch({type: Actions.WorldMove, payload: {x: 1, y: 1}})
  }

  return {
    count,
    worldX,
    worldY,
    incCount,
    decCount,
    worldMove,
  }
}

export default useGame
