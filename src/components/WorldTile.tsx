import {Center} from "@chakra-ui/react"

import {
    LuGoal,
} from "react-icons/lu"

const icons = {
    ['0']: <LuGoal />,
}

interface IWorldTile  {
    // row: number
    // col: number
    center: boolean
    terrain: string
    site: string
    color: string
}
export type TWorldTile = IWorldTile

const WorldTile = (props: IWorldTile) => {
    const {
        // row, col,
        center,
        terrain,
        site,
        color,
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
                {icons[site] ?? `${terrain}`}
            </Center>
        </Center>
    )
}

export default WorldTile
