/** gray:red:pink:purple:blue:cyan:teal:green:yellow:orange */
import {type TWorldV} from "./WorldTiles"

export function getColor(tile: TWorldV) {
  if (tile.site) return [
    "green.800", // 0
    "pink.600", // 1
    "orange.600", // 2
    "yellow.600", // 3
    "cyan.600", // 4
    "blue.600", // 5
    "purple.600", // 6
  ][+tile.site] ?? "gray.500"
  return tile.terrain? "green.600": "green.900"
}
