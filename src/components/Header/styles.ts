import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #1ea358;
`

export const Top = styled.div`
  color: #fff;
  max-width: 1240px;
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: space-between;
`

export const A = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    color: #d0fdd7;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`

export const ListLinks = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  list-style: none;

  .Button {
    @media (min-width: 768px) {
      display: block;
    }
  }
`

export const ButtonSkin = styled.a`
  color: #fff;
  text-decoration: none;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  border-radius: 5px;
  height: 40px;
  transition: transform 0.3s ease;

  &:hover {
    color: #dfffe4;
    border: 2px solid #9bfab0;
    transform: translateY(-8px);
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const Hamburguer = styled.div`
  display: none;

  @media (max-width: 768px) {
    width: 50px;
    display: block;
    margin-right: 15px;
  }

  @media (min-width: 768px) and (max-width: 1100px) {
    width: 30px;
    display: block;
    margin-right: 15px;
  }

  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: #f1f1f1;
    margin-bottom: 4px;
  }
`

export const Link = styled.li`
  display: flex;
  align-items: center;
  margin: 0 20px;
  cursor: pointer;

  &:hover {
    color: #dfffe4;
  }

  .seta {
    width: 10px;
    height: 10px;
    margin-left: 10px;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`

export const BoxLeft = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 150px;
  }
`

export const BoxRight = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
`
