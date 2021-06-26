import '../../App.css'
import imagem from './padrao.jpg'
const CardDetalhes = ({ nome, preco, id }) => {
    return (
        <div className="container-card">
            <div className="card">
                <img className="imagem-produto" src={imagem} alt="" />
                <div>
                    <h3>
                        {nome}

                    </h3>
                    <p>
                        R$ {preco}
                    </p>
                    <button className="botao-adicionar-carrinho">Adicionar ao carrinho</button>
                </div>
                <div className="detalhes">
            <h2>Detalhes do Produto</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis laudantium distinctio modi porro minus eveniet error similique itaque? Tempore nobis excepturi corporis, praesentium vitae ullam itaque neque officiis non placeat.</p>
         
            </div>
            </div>
        
           
          
        </div>

    )
}

export default CardDetalhes;