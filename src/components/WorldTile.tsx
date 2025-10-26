import {Center} from "@chakra-ui/react"

interface IWorldTile  {
    row: number
    col: number
    center: boolean
}

const WorldTile = (props: IWorldTile) => {
    const {row, col, center} = props

    return (
        <Center
            w="40px" h="40px"
            bg={center? "green.400": "green.600"}
            color="white"
        >
            {`${row}:${col}`}
        </Center>
    )
}

export default WorldTile
