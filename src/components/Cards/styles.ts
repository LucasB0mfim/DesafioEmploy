import styled from 'styled-components'

export const Card = styled.div`
  width: 265px;
  height: auto;
  border-radius: 10px;
  top: 50%;
  left: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #1ea358;
  box-shadow: 2px 2px 15px #146838;
`

export const Title = styled.h3`
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  margin: 35px 0 20px 0;
`

export const Value = styled.p`
  color: #fff;
  font-size: 54px;
  font-weight: bold;
  margin-bottom: 20px;

  span {
    font-size: 16px;
  }
`

export const SubTitle = styled.span`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 20px;
`

export const Button = styled.button`
  width: 90%;
  height: 60px;
  background-color: #9bfab0;
  margin-bottom: 20px;
  font-size: 16px;
  border: none;
  color: #146838;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 2px 2px 15px #146838;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }
`

export const Span = styled.span`
  margin-left: 15px;
  color: #d4d4d4;
`

export const BoxSpan = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-bottom: 35px;

  .hidden {
    visibility: hidden;
  }
`
