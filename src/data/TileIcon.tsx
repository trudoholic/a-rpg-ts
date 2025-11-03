import {JSX} from "react"
import {type TWorldV} from "./WorldTiles"
import {
  LuGoal,
} from "react-icons/lu"

const icons = {
  ['0']: <LuGoal />,
}

export function getIcon(tile: TWorldV): JSX.Element | string {
  return icons[tile.site] ?? `${tile.terrain}`
}
