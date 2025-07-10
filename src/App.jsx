
import Weathers from './components/weathers';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  #root{
    width: 100vw;
    height: 100vh;

  }
`

function App() {

  return (
    <>
      <GlobalStyle />
      <Weathers />
    </>
  )
}

export default App
