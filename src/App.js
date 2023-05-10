import './App.css';
import Header from './components/jsx/Header';
import Home from './components/jsx/Home';
import Info from './components/jsx/Info';
import Invest from './components/jsx/Invest';
import Marcas from './components/jsx/Marcas';
import SejaBank from './components/jsx/SejaBank';
import Footer from './components/jsx/Footer';
import BelowFooter from './components/jsx/BelowFooter';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Info />
      <Invest />
      <Marcas />
      <SejaBank />
      <Footer />
      <BelowFooter />
    </div>
  );
}

export default App;
