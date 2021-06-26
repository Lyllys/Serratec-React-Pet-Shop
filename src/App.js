import './App.css';
import { BrowserRouter , Route , Switch } from 'react-router-dom';

import Home from './paginas/Home';
import Servicos from './paginas/Servicos';
import DetalheProduto from './paginas/Produtos/DetalheProduto';
import DetalheServico from './paginas/Servicos/DetalheServico';
import Navbar from './Componentes/NavBar';
import Produtos from './paginas/Produtos';
import Cadastro from './paginas/Cadastro';
import Login from './paginas/Login';
import Pagina404 from './paginas/404';


function App() {
  
  return (
    <BrowserRouter>
    <Navbar />
    <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/servicos">
      <Servicos />
    </Route>
    <Route path="/servicos/:id">
      <DetalheServico />
    </Route>
    <Route exact path="/produtos">
      <Produtos />
    </Route>
    <Route path="/produtos/:id">
      <DetalheProduto />
    </Route>
    <Route path="/cadastro">
      <Cadastro />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route>
      <Pagina404 />
    </Route>
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
