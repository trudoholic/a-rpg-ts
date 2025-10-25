import {ReactNode} from "react"
import {Button} from "@chakra-ui/react"

const ArrowButton = ({children}:{children: ReactNode}) => {
    return (
        <Button
            colorPalette={"pink"}
        >
            {children}
        </Button>
    )
}

export default ArrowButton
