import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #1ea358;
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
  }

  .seta {
    width: 10px;
    margin-left: 10px;
  }

  > img {
    width: 150px;

    @media (max-width: 768px) {
      width: 100px;
    }
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

export const BoxRight = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  li > {
    width: auto;
  }

  ${A} {
    width: auto;
    margin-right: 30px;
  }
`

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  ${A} {
    width: 135px;
  }
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
    color: #dfffe4;
    border: 1px solid: #9bfab0;
    transform: translateY(-8px);
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const Hamburguer = styled.div`
  display: none;

  @media (max-width: 768px) {
    width: 25px;
    display: block;
    margin-right: 15px;

    span {
      height: 2px;
      display: block;
      width: 100%;
      background-color: #f1f1f1;
      margin-bottom: 4px;
    }
  }
`
