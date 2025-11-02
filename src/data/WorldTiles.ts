export type TWorldK = string

export type TWorldV = string

export type TWorld = {[key: TWorldK]: TWorldV}

export const tileKey = (row: number, col: number):TWorldK => `${row}:${col}`

export const initWorld: TWorld = {
  [tileKey(0, 0)]: "0",
}
