import { StrictMode } from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import App  from 'components/App';


ReactDom.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={"/goit-react-hw-05-movies"}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>  
    </BrowserRouter>
  </StrictMode>
);
