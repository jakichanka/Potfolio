import React, { ReactElement, useCallback, useEffect, useRef, useState } from "react"
import { Letter } from "./letter"
import { Heading } from "./styled"

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
      <Heading>
        {[...myName.substring(0, typeCount)].map((letter, idx) => (
          <Letter key={idx + letter} letter={letter} idx={idx} />
        ))}
      </Heading>
    </>
  )
}
