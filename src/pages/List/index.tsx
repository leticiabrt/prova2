import * as S from './styles'
import { dados } from "../../services/dados"
import { ComponentCard } from '../../components'

export function List() {
  return (
    <S.Section>
      <div>
        <h3>Receita com História: "Torta de Maçã da Vovó: Esta receita tradicional tem sido transmitida de geração em
geração. A avó deu o toque especial ao adicionar uma pitada de canela extra à massa. Cada mordida é uma
viagem no tempo para a cozinha da infância."</h3>
      </div>

    <div>
        <h3>Guia de Vinhos para Iniciantes: "Escolhendo o Vinho Certo para sua Refeição: Um guia básico para combinar
vinhos com pratos. Aprenda como os sabores do vinho podem complementar ou contrastar com os alimentos,
elevando a experiência gastronômica."</h3>
    </div>

    <div>
      <h3>Receita de Cozinha Internacional: "Curry de Frango Indiano: Delicie-se com a explosão de sabores do curry
indiano. A mistura de especiarias aromáticas, como açafrão, com a cremosidade do iogurte cria um prato
irresistível. Sirva com arroz basmati e pão naan."</h3>
    </div>

    <div>
      <h3>Dicas para Churrasco Perfeito: "Segredos do Churrasco: Domine a arte do churrasco com estas dicas
essenciais. Controle o calor, escolha a lenha certa e saiba quando virar a carne para garantir resultados
suculentos e cheios de sabor."</h3>
    </div>
      
      
    </S.Section>
  )
}
