import {
  Container,
  Top,
  BoxLeft,
  BoxRight,
  A,
  Ul,
  ButtonSkin,
  Teste,
  TesteTwo
} from './styles'
import employ from '../../assets/images/EmployBackgroundBlack.png'
import { useState } from 'react'

const Header = () => {
  const [isProduct, setIsProduct] = useState(false)
  const [isLearning, setIsLearning] = useState(false)

  return (
    <>
      <Container>
        <Top>
          <BoxLeft>
            <img src={employ} alt="Employ" />
            <div onClick={() => setIsProduct(!isProduct)}>
              Product <span>V</span>
            </div>
            <div onClick={() => setIsLearning(!isLearning)}>
              Learning Center<span>V</span>
            </div>

            <Ul>
              <li>
                <A href="#">Pricing</A>
              </li>
              <li>
                <A href="#">Watch Demo</A>
              </li>
            </Ul>
          </BoxLeft>
          <BoxRight>
            <li>
              <A href="#">Talk to sales</A>
            </li>
            <li>
              <ButtonSkin href="#">Login</ButtonSkin>
            </li>
            <li>
              <ButtonSkin href="#">Get started</ButtonSkin>
            </li>
          </BoxRight>
        </Top>
      </Container>
      {isProduct && (
        <Teste>
          <ul>
            <li>teste</li>
            <li>teste</li>
            <li>teste</li>
            <li>teste</li>
            <li>teste</li>
            <li>teste</li>
          </ul>
        </Teste>
      )}
      {isLearning && (
        <TesteTwo>
          <ul>
            <li>teste</li>
            <li>teste</li>
            <li>teste</li>
            <li>teste</li>
            <li>teste</li>
            <li>teste</li>
          </ul>
        </TesteTwo>
      )}
    </>
  )
}

export default Header
