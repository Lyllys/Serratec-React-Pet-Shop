import './estilos.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
    
    return <nav className="navbar">
        <ul className="navbar-lista" >
            <li className="navbar-item-lista"> 
                <Link className="navbar-link" to="/">Home</Link>
            </li>
            <li className="navbar-item-lista"> 
                <Link className="navbar-link" to="/produtos">Produtos</Link>
            </li>
            <li className="navbar-item-lista"> 
                <Link className="navbar-link" to="/servicos">Serviços</Link>
            </li>
            <li className="navbar-item-lista"> 
                <Link className="navbar-link" to="/login">Login</Link>
            </li>
            <li className="navbar-item-lista"> 
                <Link className="navbar-link" to="/cadastro">Cadastre-se</Link>
            </li>
           
        </ul>
    </nav>

}

export default Navbar;