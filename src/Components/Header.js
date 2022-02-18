import { StyledHeader } from "./styles/Header.style";
import { Container } from "./styles/Container.style";
import { Nav, Logo,Image } from "./styles/Header.style";
import { Button } from "./styles/Button.style";
import { Flex } from "./styles/flex.style";
export default function Header() {
  return (
    <StyledHeader back='#ebfbff'>
      <Container last = "#ebfbff">
        <Nav>
          <Logo src="./mages/logo.svg"></Logo>
          <Button>Try It for free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Build the community Your fans will love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <Button bg='#ff0099' color="#fff">
                Get Started For Free
            </Button>
          </div>
          <Image src='public\images\illustration-mockups.svg'></Image>
        </Flex>
      </Container>
    </StyledHeader>
  );
}
