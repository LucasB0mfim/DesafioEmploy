import { Card, Title, Value, SubTitle, Button, Span, BoxSpan } from './styles'

const Cards = () => (
  <>
    <Card>
      <Title>Free</Title>
      <Value>$0</Value>
      <SubTitle>Seriously, free forever</SubTitle>
      <Button>Sign up for free</Button>
      <BoxSpan>
        <Span>✓ Up to 10 videos</Span>
        <Span>✓ Customizable player</Span>
        <Span>✓ Recording and editing</Span>
        <Span className="hidden">✓ Up to 10 videos</Span>
      </BoxSpan>
    </Card>

    <Card>
      <Title>Plus</Title>
      <Value>
        $19<span>/mo</span>
      </Value>
      <SubTitle>Billed at $228 per year</SubTitle>
      <Button>Start a free trial</Button>
      <BoxSpan>
        <Span>Everything in Free, and…</Span>
        <Span>✓ Remove Wistia branding</Span>
        <Span>✓ Basic CTAs</Span>
        <Span>✓ Multiple users</Span>
      </BoxSpan>
    </Card>

    <Card>
      <Title>Pro</Title>
      <Value>
        $79<span>/mo</span>
      </Value>
      <SubTitle>Billed at $948 per year</SubTitle>
      <Button>Start a free trial</Button>
      <BoxSpan>
        <Span>Everything in Plus, and…</Span>
        <Span>✓ Lead capture forms</Span>
        <Span>✓ Enhanced data analytics</Span>
        <Span>✓ Webinar hosting</Span>
      </BoxSpan>
    </Card>

    <Card>
      <Title>Advanced</Title>
      <Value>
        $319<span>/mo</span>
      </Value>
      <SubTitle>Billed at $3828 per year</SubTitle>
      <Button>Start a free trial</Button>
      <BoxSpan>
        <Span>Everything in Pro, and…</Span>
        <Span>✓ Marketing integrations</Span>
        <Span>✓ Unlimited video galleries</Span>
        <Span>✓ Custom branded webinars</Span>
      </BoxSpan>
    </Card>
  </>
)

export default Cards
