import {SimpleGrid} from "@chakra-ui/react"
import WorldTile from "./WorldTile"
import useGame from "../hooks/useGame"

const halfRows = 5, halfCols = 5
const Rows = halfRows + 1 + halfRows, Cols = halfCols + 1 + halfCols

const range = (n: number) => Array.from(Array(n).keys())
const row = (n: number) => ~~(n / Cols)
const col = (n: number) => n % Cols

const WorldGrid = () => {
    const {
        worldX,
        worldY,
        getWorldMap,
    } = useGame()

    return (
        <SimpleGrid columns={Cols} gap="1px">
            {range(Rows * Cols).map(n => (
                <WorldTile
                    row={row(n) - halfRows + worldY}
                    col={col(n) - halfCols + worldX}
                    center={row(n) === halfRows && col(n) === halfCols}
                    tile={getWorldMap(
                        row(n) - halfRows + worldY,
                        col(n) - halfCols + worldX
                    )}
                />
            ))}
        </SimpleGrid>
    )
}

export default WorldGrid
