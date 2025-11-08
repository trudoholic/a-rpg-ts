import {JSX} from "react"
import {Center} from "@chakra-ui/react"

interface IWorldTile  {
    border: string
    color: string
    hint: string
    icon: JSX.Element | string
}
export type TWorldTile = IWorldTile

const WorldTile = (props: IWorldTile) => {
    const {
        border,
        color,
        hint,
        icon,
    } = props

    return (
      <Center
        w="48px" h="48px"
        bg={border}
        onClick={() => console.log(hint)}
      >
          <Center
            w="40px" h="40px"
            bg={color}
          >
              {icon}
          </Center>
      </Center>
    )
}

export default WorldTile
