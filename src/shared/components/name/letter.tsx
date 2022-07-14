import { Box, chakra } from "@chakra-ui/react"
import { isValidMotionProp, motion } from "framer-motion"

type Letter = {
  letter: string
  idx: number
}

export const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
})

export const Letter = (props: Letter) => {
  const { letter } = props

  return (
    <ChakraBox
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      background='linear-gradient(90deg, hsla(0, 0%, 0%, 1) 0%, hsla(0, 0%, 37%, 1) 100%)'
      backgroundClip='text'
      textShadow='-6px 8px 13px rgba(36,47,30,0.68)'
      // @ts-ignore
      transition={{
        duration: .2,
        ease: "easeInOut",
      }}

    >
      {letter}
    </ChakraBox>
  )
}
