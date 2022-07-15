import "./index.css"
import { MainPage } from "@/pages/main"
import { motion, useScroll, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"

export const App = () => {
  // const container = useRef<HTMLDivElement>(null)
  const target = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { duration: 0.1 })

  useEffect(() => {
    return scaleX.onChange((el) => console.log(el))
  })

  return (
    <div>
      <MainPage />
      <div ref={target}>
        <motion.div
          style={{
            scaleX,
            background: "black",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          NewPage
        </motion.div>
      </div>

      <motion.div
        style={{
          background: "yellow",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        NewPage
      </motion.div>
    </div>
  )
}
