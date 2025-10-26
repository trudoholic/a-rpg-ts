import {Heading, HStack, SimpleGrid} from "@chakra-ui/react"
import ArrowButton from "./ArrowButton"
import useGame from "../hooks/useGame"
import WorldGrid from "./WorldGrid"

const Main = () => {
  const {
    count,
    worldX,
    worldY,
    // incCount,
    // decCount,
  } = useGame()

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
          count is {count} X: {worldX} Y: {worldY}
        </Heading>
      </HStack>
      <HStack>
        <WorldGrid/>
      </HStack>
    </>
  )
}

export default Main
