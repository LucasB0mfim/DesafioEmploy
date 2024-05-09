import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  gap: 24px;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: -30%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 25px;
    bottom: -305%;
    display: flex;
    justify-content: center;
    align-items: center;

    padding-bottom: 20px;
  }
`
