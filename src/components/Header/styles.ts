import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #2c2c2c;
`

export const Top = styled.div`
  max-width: 1240px;
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
`

export const BoxLeft = styled.div`
  display: flex;
  align-items: center;
  color: #fff;

  div {
    width: 135px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    @media (max-width: 768px) {
      display: none;
    }

    &:hover {
      color: #d0fdd7;
    }

    span {
      font-size: 12px;
      margin-left: 10px;
      font-weight: bold;
    }
  }

  > img {
    width: 150px;

    @media (max-width: 768px) {
      width: 100px;
    }
  }
`

export const BoxRight = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  li > {
    width: 130px;
  }
`

export const A = styled.a`
  color: #fff;
  text-decoration: none;
  width: 130px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #d0fdd7;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`

export const ButtonSkin = styled.a`
  color: #fff;
  text-decoration: none;
  width: 100px;
  margin-right: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  border-radius: 5px;
  height: 40px;
  transition: transform 0.3s ease;

  &:hover {
    color: #d0fdd7;
    border: 1px solid #1ea358;
    transform: translateY(-8px);
  }
`

export const Teste = styled.div`
  width: 100%;
  height: calc(100vh - 65px);
  background-color: red;
`

export const TesteTwo = styled.div`
  width: 100%;
  height: calc(50vh - 65px);
  background-color: red;
`
