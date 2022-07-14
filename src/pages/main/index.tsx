import { MyName } from "@/shared/components/name"
import { Box } from "@chakra-ui/react"

export const MainPage = () => {
  return (
    <Box h='100vh' p='10vw' display='flex' alignItems='center' justifyContent='center'>
      <MyName />
    </Box>
  )
}
