import {ChakraProvider, defaultSystem, Box} from "@chakra-ui/react"

import Main from "./Main"

function Layout() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Box
        color={"white"}
        bg={"teal.500"}
        w="dvw" h="dvh"
      >
        <Main/>
      </Box>
    </ChakraProvider>
  )
}

export default Layout
