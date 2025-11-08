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

interface IArrowButton  {
    id: number
    cb: (id: number) => void
}

const ArrowButton = (props: IArrowButton) => {
    const {id, cb} = props
    return (
        <Button
            colorPalette={"teal"}
            size="xs" w="2rem" h="2rem"
            onClick={() => cb(id)}
        >
            {Arrows[id]}
        </Button>
    )
}

export default ArrowButton
