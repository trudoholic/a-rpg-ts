import {Heading, HStack} from "@chakra-ui/react"
import {RiArrowLeftSFill, RiArrowRightSFill} from "react-icons/ri"
import useGame from "../hooks/useGame"
import ArrowButton from "./ArrowButton"

const Main = () => {
  const {
    count,
    incCount,
    decCount,
  } = useGame()

  return (
    <>
      <HStack>
        <ArrowButton
          onClick={() => decCount(1)}
        ><RiArrowLeftSFill /></ArrowButton>
        <ArrowButton
          onClick={() => incCount(1)}
        ><RiArrowRightSFill /></ArrowButton>
        <Heading as="h1">
          count is {count}
        </Heading>
      </HStack>
    </>
  )
}

export default Main
