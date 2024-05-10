import {
  Container,
  Top,
  BoxLeft,
  BoxRight,
  A,
  ListLinks,
  ButtonSkin,
  Hamburguer,
  Link
} from './styles'

import employ from '../../assets/images/EmployBackgroundBlack.png'
import seta from '../../assets/images/Seta.png'

const Header = () => (
  <>
    <Container>
      <Top>
        <BoxLeft>
          <img src={employ} alt="Employ" />

          <ListLinks>
            <Link>
              Product <img src={seta} className="seta" />
            </Link>
            <Link>
              Learning Center <img src={seta} className="seta" />
            </Link>
            <Link>
              <A href="#">Pricing</A>
            </Link>
            <Link>
              <A href="#">Watch Demo</A>
            </Link>
          </ListLinks>
        </BoxLeft>
        <BoxRight>
          <ListLinks>
            <Link>
              <A href="#">Talk to sales</A>
            </Link>
            <Link>
              <ButtonSkin href="#">Login</ButtonSkin>
            </Link>
            <Link>
              <ButtonSkin href="#">Get started</ButtonSkin>
            </Link>
          </ListLinks>
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
