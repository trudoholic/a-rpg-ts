export const range = (n: number) => [...Array(n).keys()]

// export const sum = (a: number[]) => a.reduce((s, i) => s + i, 0)

export const rnd = (n: number) => ~~(n * Math.random() + 1)

// export const mRndN = (m: number, n: number) => sum(range(m).map(_ => rnd(n)))

export const Dice = (n: number) => range(n).map(i => i + 1)

export const Dice2 = (n: number) => Array(n).fill(0)
  .map((_, i) => i + 1)
  .map(j => Array(n).fill(j))
  .map(a => a.map((r, c) => r + c + 1))
  .flat()
