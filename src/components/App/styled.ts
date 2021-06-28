import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.light};
`

export const H1 = styled.h1`
  ${({ theme }) => theme.fonts.SansBold}
  font-size: 3rem;
  margin: 0;
  color: ${({ theme }) => theme.color.veryDark};
`
