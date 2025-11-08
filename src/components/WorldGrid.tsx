import {SimpleGrid} from "@chakra-ui/react"
import WorldTile, {type TWorldTile} from "./WorldTile"
import useGame from "../hooks/useGame"
import {getSite} from "../data/Sites"
import {getColor} from "../data/TileColor"
import {getIcon} from "../data/TileIcon"

const halfRows = 5, halfCols = 5
const Rows = halfRows + 1 + halfRows, Cols = halfCols + 1 + halfCols

const range = (n: number) => Array.from(Array(n).keys())
const row = (n: number) => ~~(n / Cols)
const col = (n: number) => n % Cols

const WorldGrid = () => {
    const {
        worldX,
        worldY,
        sites,
        getWorldMap,
    } = useGame()

    const tileProps = (n: number):TWorldTile => {
        const tile = getWorldMap(
          row(n) - halfRows + worldY,
          col(n) - halfCols + worldX
        )

        const site = getSite(sites, tile.site)

        return {
            center: (row(n) === halfRows && col(n) === halfCols),
            color: getColor(tile, site),
            icon: getIcon(tile, site),
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
