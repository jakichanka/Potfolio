import { Fade, Heading } from "@chakra-ui/react"
import React, { ReactElement, useCallback, useEffect, useRef, useState } from "react"
import { Letter } from "./letter"

const myName = "E_Litvinov"

export const MyName = (): ReactElement => {
  const [typeCount, setTypeCount] = useState<number>(0)
  const ref = useRef<number>(1)

  useEffect(() => {
    ref.current = typeCount
  }, [typeCount])

  const handleKeyDown = useCallback(() => {
    setTypeCount((prev) => prev + 1)
    if (ref.current === myName.length - 1) {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <>
      <Fade in={!!typeCount}>
        <Heading
          px='2'
          position='relative'
          display='flex'
          cursor='default'
          fontSize='9xl'
          transform='skewY(-15deg)'
          background='linear-gradient(90deg, hsla(157, 79%, 62%, 1) 0%, hsla(63, 100%, 63%, 1) 97%)'
          _before={{
            content: "\"\"",
            position: "absolute",
            width: "10vw",
            transformOrigin: "right",
            height: "100%",
            left: "-10vw",
            transform: "skewY(45deg)",
            filter: "brightness(0.8)",
            background:
              "linear-gradient(90deg, hsla(157, 79%, 62%, 1) 0%, hsla(63, 100%, 63%, 1) 97%)",
          }}
          _after={{
            content: "\"\"",
            position: "absolute",
            width: "100%",
            transformOrigin: "bottom",
            height: "10vw",
            top: "-10vw",
            left: 0,
            transform: "skewX(45deg)",
            filter: "brightness(0.85)",
            background:
              "linear-gradient(90deg, hsla(157, 79%, 62%, 1) 0%, hsla(63, 100%, 63%, 1) 97%)",
            boxShadow: "-30vw 30vw 20px rgba(0,0,0,.1)",
          }}
        >
          {[...myName.substring(0, typeCount)].map((letter, idx) => (
            <Letter key={idx + letter} letter={letter} idx={idx} />
          ))}
        </Heading>
      </Fade>
    </>
  )
}
