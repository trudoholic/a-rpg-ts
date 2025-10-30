import {Center} from "@chakra-ui/react"

interface IWorldTile  {
    row: number
    col: number
    center: boolean
    tile: string
}

const WorldTile = (props: IWorldTile) => {
    const {
        // row, col,
        center, tile
    } = props
    const tileColor = tile? "green.600": "green.900"

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
                {`${tile}`}
            </Center>
        </Center>
    )
}

export default WorldTile
