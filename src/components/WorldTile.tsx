import {JSX} from "react"
import {Center} from "@chakra-ui/react"

interface IWorldTile  {
    // row: number
    // col: number
    center: boolean
    color: string
    icon: JSX.Element | string
}
export type TWorldTile = IWorldTile

const WorldTile = (props: IWorldTile) => {
    const {
        // row, col,
        center,
        color,
        icon,
    } = props

    return (
        <Center
            w="48px" h="48px"
            bg={center? "yellow.300": color}
        >
            <Center
              w="40px" h="40px"
              bg={color}
            >
                {/*{`${row}:${col}`}*/}
                {icon}
            </Center>
        </Center>
    )
}

export default WorldTile
