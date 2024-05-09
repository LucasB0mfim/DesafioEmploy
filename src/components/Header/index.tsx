import {
  Container,
  Top,
  BoxLeft,
  BoxRight,
  A,
  Ul,
  ButtonSkin,
  Teste,
  TesteTwo,
  Hamburguer
} from './styles'
import employ from '../../assets/images/EmployBackgroundBlack.png'
import seta from '../../assets/images/Seta.png'
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
              Product <img src={seta} className="seta" />
            </div>
            <div onClick={() => setIsLearning(!isLearning)}>
              Learning Center <img src={seta} className="seta" />
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
            <Hamburguer>
              <span></span>
              <span></span>
              <span></span>
            </Hamburguer>
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
