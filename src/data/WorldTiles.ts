export type TWorldK = string

export interface TWorldV {
  terrain: string
}

export type TWorld = {[key: TWorldK]: TWorldV}

export const tileKey = (row: number, col: number):TWorldK => `${row}:${col}`
export const tileValue = (terrain: string):TWorldV => ({terrain})

export const nullTile:TWorldV = {
  terrain: "",
}

export const getTile = (world: TWorld, row: number, col: number):TWorldV => (
  world[tileKey(row, col)] ?? nullTile
)

export const setTile = (row: number, col: number, terrain: string): {key: TWorldK, value: TWorldV} => (
  {key: tileKey(row, col), value: tileValue(terrain)}
)

export const initWorld: TWorld = {
  [tileKey(0, 0)]: {terrain: "0"},
}
