import * as S from "./styles"

import { useLocation } from "react-router-dom";
export function fixed() {
    const location = useLocation();
    const isPageHome = location.pathname === "/" || location.pathname === "/List"
    return (
        <S.FixedSideBar isPageHome={isPageHome}>
            <p>Restaurante</p>
            <ul>
                <li>
                    <a href="/" >Tópicos</a>

                </li>
                <li>
                    <a href="/List">Descrição</a>
                </li>
            </ul>

        </S.FixedSideBar>
    )
}