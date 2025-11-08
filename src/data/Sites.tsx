import {rnd} from "./Utils"

export type TSiteK = string

export type TSiteV = {
  id: string
  kind: string
  stance: string //Ally Enemy Neutral
}

export type TSites = {[key: TSiteK]: TSiteV}

let siteCnt = 0

export const createSite = ():TSiteV => (
  {
    id: `${ ++siteCnt }`,
    kind: `${ rnd(6) }`,
    stance: "Enemy",
  }
)

export const nullSite:TSiteV = {
  id: "",
  kind: "",
  stance: "",
}

export const getSite = (sites: TSites, key: TSiteK):TSiteV => (
  sites[key] ?? nullSite
)

export const initSites: TSites = {
  ["0"]: {
    id: "0",
    kind: "0",
    stance: "Player",
  },
}
