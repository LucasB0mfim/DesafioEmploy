import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 120vh;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(155, 250, 176, 1) 100%
  );

  @media (max-width: 768px) {
    height: 270vh;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(218, 253, 226, 1) 100%
    );
  }

  @media (min-width: 1680px) {
    height: calc(100vh - 66px);
    display: flex;
    align-items: start;
  }
`

export const Plan = styled.div`
  width: 100%;
  height: 500px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
`

export const Title = styled.h1`
  color: #1ea358;
  font-size: 54px;
  margin: 25px 0 25px 0;
  text-align: center;

  @media (max-width: 1440px) {
    margin-top: 80px;
  }

  @media (min-width: 1680px) {
    margin: 50px 0 24px 0;
  }
`

export const Phase = styled.p`
  font-size: 24px;
  color: #53a376;
  text-align: center;
  margin-bottom: 50px;

  @media (max-width: 1440px) {
    margin-bottom: 80px;
  }
`
