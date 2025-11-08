/** gray:red:pink:purple:blue:cyan:teal:green:yellow:orange */
import {type TWorldV} from "./WorldTiles"
import {type TSiteV} from "./Sites"

const dark = "green.900"
const lite = "green.600"
const zero = "gray.500"

export function getColor(tile: TWorldV, site: TSiteV) {
  if (site.kind) return [
    "green.800", // 0
    "pink.600", // 1
    "orange.600", // 2
    "yellow.600", // 3
    "cyan.600", // 4
    "blue.600", // 5
    "purple.600", // 6
  ][+site.kind] ?? zero
  return tile.terrain? lite: dark
}

export function getBorder(tile: TWorldV, site: TSiteV) {
  if (site.stance) return {
    "Player": "green.300",
    "Enemy": "red.400",
  }[site.stance] ?? lite
  return tile.terrain? lite: dark
}
