import {useState} from "react"

const useShuffleBag = (initBag:number[]) => {
  const debug = false
  const shuffle = (list: number[]) => {
    const src = [...list]
    if (debug) return src

    const result: number[] = []
    while (src.length) {
      const rnd = Math.floor(Math.random() * src.length)
      result.push(src.splice(rnd, 1)[0])
    }
    return result
  }

  const [shuffleBag, setShuffleBag] = useState<number[]>(shuffle(initBag))
  const [idx, setIdx] = useState<number>(0)

  function next() {
    const value = shuffleBag[idx]
    const nextIdx = idx + 1

    if (shuffleBag.length === nextIdx) {
      // console.log('shuffle')
      setShuffleBag(bag => shuffle(bag))
      setIdx(0)
    }
    else {
      setIdx(nextIdx)
    }

    return value
  }

  return {
    next,
  }
}

export default useShuffleBag
