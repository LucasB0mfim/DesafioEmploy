import { Container, Plan, Title, Phase } from './styles'
import ListCards from '../ListCards'
const PersuasiveText = () => (
  <Container>
    <Plan>
      <Title>Choose your ideal plan</Title>
      <Phase>No credit card required.</Phase>
      <ListCards />
    </Plan>
  </Container>
)

export default PersuasiveText
