export const range = (n: number) => [...Array(n).keys()]

export const sum = (a: number[]) => a.reduce((s, i) => s + i, 0)

export const rnd = (n: number) => ~~(n * Math.random() + 1)

export const mRndN = (m: number, n: number) => sum(range(m).map(_ => rnd(n)))
