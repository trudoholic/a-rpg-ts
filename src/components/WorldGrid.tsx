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

    const tileProps = (n: number) => {
        const tile = getWorldMap(
          row(n) - halfRows + worldY,
          col(n) - halfCols + worldX
        )
        return {
            center: (row(n) === halfRows && col(n) === halfCols),
            terrain: tile.terrain,
            site: tile.site,
        }
    }

    return (
      <SimpleGrid columns={Cols} gap="1px">
          {range(Rows * Cols).map(n => (
            <WorldTile
              {...tileProps(n)}
            />
          ))}
      </SimpleGrid>
    )
}

export default WorldGrid
