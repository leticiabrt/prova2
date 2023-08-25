import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.header`
  /* Cabeçalho */
  background-color: ${colors.third};
  display: flex;
  height: 6rem;
  color: white;
`

export const NavBar = styled.nav`
  /* Navegação */
  display: flex;
  align-items: center;
  width: 100%;border-bottom: 0.4rem;
  justify-content: right;
  
  ul {
    list-style-type: none;
    display: flex;
    align-items: center;
    height: 100%;
    color: black;
    li:hover {
      background-color: greenyellow;
    }
  }

`