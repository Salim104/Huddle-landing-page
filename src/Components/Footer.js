import { Flex } from "./styles/flex.style";
import { Container } from "./styles/Container.style";

function Footer() {
  return (
    
        <Container last='green'>
            <img src="./images/logo_white.svg"/>
            <Flex>
                <p>
                    lorem anl more of the all somehere wieh thema the guy all
                    moss ilite lorem anl more of the all somehere wieh thema the guy all moss ilite.
                </p>

                <ul>
                    <li>About Us</li>
                    <li>What We do</li>
                    <li>FAQ</li>
                </ul>
                <ul>
                    <li>Career</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
            </Flex>
        </Container>
    
  )
}

export default Footer