import './App.css';

import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import CadastroReserva from './pages/CadastroReserva';
import PaginaInicial from './pages/PaginaInicial';
import ListaReservas from './pages/ListaReservas';
import DetalhesReserva from './pages/DetalhesReserva';
import AlteracaoReserva from './pages/AlteracaoReserva';
import Dependentes from './pages/Dependentes';
import AlteracaoDependente from './pages/AlteracaoDependente';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<PaginaInicial />} />
          <Route exact path="/cadastro" element={<CadastroReserva />} />
          <Route exact path="/listar" element={<ListaReservas />} />
          <Route exact path="/detalhes/:id" element={<DetalhesReserva />} />
          <Route exact path="/alteracao/:id" element={<AlteracaoReserva />} />
          <Route exact path="/dependentes/:id" element={<Dependentes />} />
          <Route exact path="/alteracaoDependentes/:id" element={<AlteracaoDependente />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;