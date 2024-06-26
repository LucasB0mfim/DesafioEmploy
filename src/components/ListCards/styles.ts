import styled from 'styled-components'

export const Container = styled.div`
  width: auto;
  gap: 24px;
  display: flex;
  justify-content: center;
  bottom: -30%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 80px;
    bottom: -305%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }

  @media (min-width: 1680px) {
    gap: 45px;
  }
`
