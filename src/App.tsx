import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { DefaultLayout } from './components/templates/DefaultLayout';
import { Router } from './router/Router';
import theme from './theme/theme';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <DefaultLayout>
          <Router />
        </DefaultLayout>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
