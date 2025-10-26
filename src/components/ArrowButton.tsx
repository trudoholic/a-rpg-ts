import {Button} from "@chakra-ui/react"
import {
    RiArrowLeftUpFill, RiArrowUpFill, RiArrowRightUpFill,
    RiArrowLeftFill, RiCrosshair2Line, RiArrowRightFill,
    RiArrowLeftDownFill, RiArrowDownFill, RiArrowRightDownFill,
} from "react-icons/ri"
import useGame from "../hooks/useGame"

const Arrows = [
    <RiArrowLeftUpFill />, <RiArrowUpFill />, <RiArrowRightUpFill />,
    <RiArrowLeftFill />, <RiCrosshair2Line />, <RiArrowRightFill />,
    <RiArrowLeftDownFill />, <RiArrowDownFill />, <RiArrowRightDownFill />,
]

const ArrowButton = ({id}:{id: number}) => {
    const {
        worldMove,
    } = useGame()

    return (
        <Button
            colorPalette={"green"}
            size="xs" w="2rem" h="2rem"
            onClick={() => worldMove(id)}
        >
            {Arrows[id]}
        </Button>
    )
}

export default ArrowButton
