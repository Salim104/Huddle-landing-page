import  Header from './Components/Header'
import  Card from './Components/Card'
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Components/styles/Global'
import {Container} from './Components/styles/Container.style'
import Content from './Components/Content'
// import Footer from './Components/Footer'
const theme = {
  colors:{
    header:'#ebfbff',
    body:'#fff',
  },
  mobile:'768px'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles/>
     <Header/>
    <Container>
      {Content.map((item,index) => {
        return <Card key={index}  item={item} ></Card>
        
       
      })}
    </Container>
    {/* <Footer></Footer> */}
     </>
     </ThemeProvider>
  );
 
}

export default App;
