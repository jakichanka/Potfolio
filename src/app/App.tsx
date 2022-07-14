import "./index.css"
import ErrorBoundary from "@/features/error/catch-page-error"
import { MainPage } from "@/pages/main"

export const App = () => {
  return (
    <ErrorBoundary>
      <MainPage />
    </ErrorBoundary>
  )
}
