/** gray:red:pink:purple:blue:cyan:teal:green:yellow:orange */
import {type TWorldV} from "./WorldTiles"
import {type TSiteV} from "./Sites"

const dark = "green.900"
const lite = "green.700"
const zero = "gray.500"

export function getColor(tile: TWorldV, site: TSiteV) {
  if (site.kind) return [
    "green.700", // 0
    "pink.800", // 1
    "orange.800", // 2
    "yellow.800", // 3
    "cyan.800", // 4
    "blue.800", // 5
    "purple.800", // 6
  ][+site.kind] ?? zero
  return tile.terrain? lite: dark
}

export function getBorder(tile: TWorldV, site: TSiteV) {
  if (site.stance) return {
    "Player": "cyan.500",
    "Enemy": "red.500",
  }[site.stance] ?? lite
  return tile.terrain? lite: dark
}
