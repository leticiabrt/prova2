import * as S from "./styles"

export function Header() {
  return (
    <S.Header>
      <h1>Onde a barriga controla o coração</h1>
      <S.NavBar>
        <ul>
          <li>
            <a href="">Restaurante</a>
          </li>
          <li>
            <a href="/">Tópicos</a>
          </li>
          <li>
            <a href="/list">Descrição</a>
          </li>
        </ul>
      </S.NavBar>
    </S.Header>
  )
}