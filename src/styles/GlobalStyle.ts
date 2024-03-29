import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
`
export const colors = {
  primary: "#2B75E2",
  secondary: "#FFC107",
  secondaryLight: "#f0dea5",
  third: "#565164",
  thirdLight: "#d9d9d9",
  black: "#000",
  white: "#fff"
}
