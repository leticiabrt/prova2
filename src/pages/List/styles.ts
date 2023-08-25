import styled from 'styled-components'

export const Section = styled.section`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 1rem;
  @media (max-width: 1010px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto auto;
    font-size: 0.9rem;
  }
  @media (max-width: 500px) {
    grid-template-columns: auto;
  }

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  margin: 3rem;
  gap: 3rem;

  div{
    background-color: #D8F5D1;
    border-radius: 1rem;
    border: 2rem solid #D8F5D1;
  }
  

`
