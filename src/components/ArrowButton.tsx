import {Button} from "@chakra-ui/react"
import {
    RiArrowLeftUpFill, RiArrowUpFill, RiArrowRightUpFill,
    RiArrowLeftFill, RiCrosshair2Line, RiArrowRightFill,
    RiArrowLeftDownFill, RiArrowDownFill, RiArrowRightDownFill,
} from "react-icons/ri"

const Arrows = [
    <RiArrowLeftUpFill />, <RiArrowUpFill />, <RiArrowRightUpFill />,
    <RiArrowLeftFill />, <RiCrosshair2Line />, <RiArrowRightFill />,
    <RiArrowLeftDownFill />, <RiArrowDownFill />, <RiArrowRightDownFill />,
]

const ArrowButton = ({id}:{id: number}) => {
    return (
        <Button
            colorPalette={"green"}
            size="xs" w="2rem" h="2rem"
            onClick={() => console.log('->', id)}
        >
            {Arrows[id]}
        </Button>
    )
}

export default ArrowButton
