export const GameStat = {
  OpenSite: "OpenSite",
  OpenTile: "OpenTile",
} as const

export type TGameStatK = typeof GameStat[keyof typeof GameStat]

export type TGameStatV = number

export type TGameStats = {[key: TGameStatK]: TGameStatV}

export const initGameStats: TGameStats = {
  OpenSite: 0,
  OpenTile: 0,
}
