
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { Route, Routes } from 'react-router-dom'

import CustomTheme from './theme';

import Header from './components/Header';
import Home from './pages/Home'
import Development from './pages/Development';
import CV from './pages/CV'
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={CustomTheme()}>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dev" element={<Development />}/>
        <Route path="/cv" element={<CV />}/>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
