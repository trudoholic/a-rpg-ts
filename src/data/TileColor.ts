/** gray:red:pink:purple:blue:cyan:teal:green:yellow:orange */
import {type TWorldV} from "./WorldTiles"

export function getColor(tile: TWorldV) {
  if (tile.site) return [
    "green.800",
    "yellow.600",
  ][+tile.site] ?? "purple.500"
  return tile.terrain? "green.600": "green.900"
}
