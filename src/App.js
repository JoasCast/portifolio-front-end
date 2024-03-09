import './App.css';
import Footer from './components/foother/footer';
import Nav from './components/nav';
import Diferencias from './pages/diferenciais/diferenciais';
import Home from './pages/home/home';
import Projetos from './pages/projetos/projetos';
import Skills from './pages/skills/skills';
import Sobre from './pages/sobre/sobre';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Home/>
      <hr className='linha' />
      <Sobre/>
      <hr className='linha' />
      <Skills/>
      <hr className='linha' />
      <Diferencias/>
      <hr className='linha' />
      <Projetos/>
      <hr className='linha' />
      <Footer/>
    </div>
  );
}

export default App;
