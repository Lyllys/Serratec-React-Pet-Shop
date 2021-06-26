import { Link } from "react-router-dom";
import '../../App.css'
const CardServico = ({ nome, preco, id }) => {
    return (
        <div className="container">
            <div className="container box-container">

                <div className="box">
                    <h3>
                        {nome}
                    </h3>
                    <p>
                        R$ {preco}
                    </p>
                    <Link className="button" to={`/servicos/${id}`}>Ver Detalhes</Link>
                </div>
            </div>

        </div>
    )
}

export default CardServico;