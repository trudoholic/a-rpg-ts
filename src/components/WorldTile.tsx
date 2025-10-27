import {Center} from "@chakra-ui/react"

interface IWorldTile  {
    row: number
    col: number
    center: boolean
    tile: string
}

const WorldTile = (props: IWorldTile) => {
    const {row, col, center, tile} = props

    return (
        <Center
            w="40px" h="40px"
            bg={tile? "pink.400": "green.600"}
            color={center? "white": "green.300"}
        >
            {`${row}:${col}`}
        </Center>
    )
}

export default WorldTile
