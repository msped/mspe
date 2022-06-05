
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { Route, Routes } from 'react-router-dom'

import CustomTheme from './theme';

import Header from './components/Header';
import Home from './pages/Home'
import Development from './pages/Development';
import CV from './pages/CV'
import Contact from './pages/Contact'
import Footer from './components/Footer';
import NotFound from './pages/NotFound'

function App() {
  return (
    <ThemeProvider theme={CustomTheme()}>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/dev" element={<Development />}/>
        <Route path="/cv" element={<CV />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
