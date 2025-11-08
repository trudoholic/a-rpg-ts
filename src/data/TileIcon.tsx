/** https://react-icons.github.io/react-icons/ */
import {JSX} from "react"
import {type TWorldV} from "./WorldTiles"
import {type TSiteV} from "./Sites"

import {
  LuGoal,
} from "react-icons/lu"

import {
  RiNumber1, RiNumber2, RiNumber3, RiNumber4, RiNumber5, RiNumber6,
} from "react-icons/ri"


const icons = {
  ['0']: <LuGoal />,
  ['1']: <RiNumber1 />,
  ['2']: <RiNumber2 />,
  ['3']: <RiNumber3 />,
  ['4']: <RiNumber4 />,
  ['5']: <RiNumber5 />,
  ['6']: <RiNumber6 />,
}

export function getIcon(tile: TWorldV, site: TSiteV): JSX.Element | string {
  return icons[site.kind] ?? `${tile.terrain}`
}
