import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./app/App"
import "./app/index.css"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import "@fontsource/bebas-neue"

const theme = extendTheme({
  fonts: {
    heading: "'Bebas Neue', sans-serif",
  },
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
