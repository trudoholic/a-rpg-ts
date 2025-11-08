import {SimpleGrid} from "@chakra-ui/react"
import WorldTile, {type TWorldTile} from "./WorldTile"
import useGame from "../hooks/useGame"
import {getSite} from "../data/Sites"
import {getBorder, getColor} from "../data/TileColor"
import {getIcon} from "../data/TileIcon"

const halfRows = 5, halfCols = 5
const Rows = halfRows + 1 + halfRows, Cols = halfCols + 1 + halfCols

const range = (n: number) => Array.from(Array(n).keys())
const row = (n: number) => ~~(n / Cols)
const col = (n: number) => n % Cols
const center = (n: number) => (row(n) === halfRows && col(n) === halfCols)

const WorldGrid = () => {
    const {
        worldX,
        worldY,
        sites,
        getWorldMap,
    } = useGame()

    const tileProps = (n: number):TWorldTile => {
        const tileR = row(n) - halfRows + worldY
        const tileC = col(n) - halfCols + worldX
        const tile = getWorldMap(tileR, tileC)
        const site = getSite(sites, tile.site)

        return {
            border: center(n)? "yellow.300": getBorder(tile, site),
            color: getColor(tile, site),
            hint: `${tileR}:${tileC}`,
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
