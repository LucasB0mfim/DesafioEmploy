import {
  Container,
  Top,
  BoxLeft,
  BoxRight,
  A,
  Ul,
  ButtonSkin,
  Hamburguer,
  Links
} from './styles'

import employ from '../../assets/images/EmployBackgroundBlack.png'
import seta from '../../assets/images/Seta.png'

const Header = () => (
  <>
    <Container>
      <Top>
        <BoxLeft>
          <img src={employ} alt="Employ" />
          <Links>
            <div>
              Product <img src={seta} className="seta" />
            </div>
            <div>
              Learning Center <img src={seta} className="seta" />
            </div>
          </Links>

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
          <Ul>
            <li>
              <A href="#">Talk to sales</A>
            </li>
            <li>
              <ButtonSkin href="#">Login</ButtonSkin>
            </li>
            <li>
              <ButtonSkin href="#">Get started</ButtonSkin>
            </li>
          </Ul>
          <Hamburguer>
            <span></span>
            <span></span>
            <span></span>
          </Hamburguer>
        </BoxRight>
      </Top>
    </Container>
  </>
)

export default Header
