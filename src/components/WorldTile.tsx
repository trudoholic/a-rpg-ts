import {Center} from "@chakra-ui/react"

import {
    LuGoal,
} from "react-icons/lu"

const icons = {
    ['0']: <LuGoal />,
}

function getColor(n: number) {
    // gray:red:pink:purple:blue:cyan:teal:green:yellow:orange
    if (0 === n) return "green.800"
    if (7 === n) return "yellow.600"
    return "green.600"
}

interface IWorldTile  {
    // row: number
    // col: number
    center: boolean
    terrain: string
    site: string
}

const WorldTile = (props: IWorldTile) => {
    const {
        // row, col,
        center,
        terrain,
        site,
    } = props
    const tileColor = terrain? getColor(+terrain): "green.900"

    return (
        <Center
            w="48px" h="48px"
            bg={center? "yellow.300": tileColor}
        >
            <Center
              w="40px" h="40px"
              bg={tileColor}
            >
                {/*{`${row}:${col}`}*/}
                {icons[site] ?? `${terrain}`}
            </Center>
        </Center>
    )
}

export default WorldTile
