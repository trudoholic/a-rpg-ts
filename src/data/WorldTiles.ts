export type TWorldK = string

export type TWorldV = {
  terrain: string
  site: string
}

export type TWorld = {[key: TWorldK]: TWorldV}

export const tileKey = (row: number, col: number):TWorldK => `${row}:${col}`
export const tileValue = (terrain: string, site: string):TWorldV => ({terrain, site})

export const nullTile:TWorldV = {
  terrain: "",
  site: "",
}

export const getTile = (world: TWorld, row: number, col: number):TWorldV => (
  world[tileKey(row, col)] ?? nullTile
)

export const setTile = (row: number, col: number, terrain: string, site: string): {key: TWorldK, value: TWorldV} => (
  {key: tileKey(row, col), value: tileValue(terrain, site)}
)

export const initWorld: TWorld = {
  [tileKey(0, 0)]: {
    terrain: "0",
    site: "0",
  },
}
