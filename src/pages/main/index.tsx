import { MyName } from "@/shared/components/name"
import styled from "styled-components"

const StyledDiv = styled.div`
  height: 100vh;
  padding: 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MainPage = () => {
  return (
    <StyledDiv>
      <MyName />
    </StyledDiv>
  )
}
