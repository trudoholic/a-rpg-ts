import {Box, Button, Heading, HStack, SimpleGrid, VStack} from "@chakra-ui/react"
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
    heroSite,
    worldMove,
  } = useGame()

  const TX = (n:number) => `${n < 0? 'W: ': n > 0? 'E: ' : ''}${Math.abs(n)}`
  const TY = (n:number) => `${n < 0? 'N: ': n > 0? 'S: ' : ''}${Math.abs(n)}`

  return (
    <>
      <Box
        position="fixed" w="200px" h="100vh" bg="green.900"
      >
        <VStack>
          <SimpleGrid columns={3} gap="1px">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => (
              <ArrowButton
                id={n - 1}
                cb={worldMove}
              />
            ))}
          </SimpleGrid>

          <Heading as="h1">
            [ {TY(worldY)} {TX(worldX)} ]
          </Heading>
          <Heading as="h1">
            Day {count}
          </Heading>
          <Heading as="h1">
            Tiles {gameStats[GameStat.OpenTile]}
          </Heading>
          <Heading as="h1">
            Sites {gameStats[GameStat.OpenSite]}
          </Heading>
          {heroSite.kind? (
            <Box
              p={4} bg="green.800"
            >
              <Heading as="h1">
                Kind {heroSite.kind}
              </Heading>
              <Heading as="h1">
                {heroSite.stance}
              </Heading>
              <Button
                colorPalette={"teal"}
                size="xs" w="4rem" h="2rem" mt="1rem"
                onClick={() => console.log(heroSite.stance)}
              >
                Click
              </Button>
            </Box>
          ): null}
        </VStack>
      </Box>

      <Box
        position="fixed" right="0" w="calc(100% - 200px)" h="100vh" p={4}
      >
        <HStack>
        </HStack>
        <HStack>
          <WorldGrid/>
        </HStack>
      </Box>
    </>
  )
}

export default Main
