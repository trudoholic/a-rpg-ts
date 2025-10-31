import {Heading, HStack, SimpleGrid} from "@chakra-ui/react"
import ArrowButton from "./ArrowButton"
import useGame from "../hooks/useGame"
import WorldGrid from "./WorldGrid"

import {
  GameStat,
} from "../data/GameStats"

const Main = () => {
  const {
    count,
    worldX,
    worldY,
    gameStats,
    // incCount,
    // decCount,
  } = useGame()

  const TX = (n:number) => `${n < 0? 'W: ': n > 0? 'E: ' : ''}${Math.abs(n)}`
  const TY = (n:number) => `${n < 0? 'N: ': n > 0? 'S: ' : ''}${Math.abs(n)}`

  return (
    <>
      <HStack>
        <SimpleGrid columns={3} gap="1px">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
              <ArrowButton
                  id={n - 1}
                  // onClick={() => ((n % 2)? incCount(1): decCount(1))}
              />
          ))}
        </SimpleGrid>
      </HStack>
      <HStack>
        <Heading as="h1">
          count is {count} [ {TX(worldX)} {TY(worldY)} ]
        </Heading>
        <Heading as="h1">
          Tiles: {gameStats[GameStat.OpenTile]} Sites: {gameStats[GameStat.OpenSite]}
        </Heading>
      </HStack>
      <HStack>
        <WorldGrid/>
      </HStack>
    </>
  )
}

export default Main
