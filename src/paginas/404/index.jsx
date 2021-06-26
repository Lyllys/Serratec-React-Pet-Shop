import imagem from './pagina404.jpg'
import './estilos.css'

const Pagina404 = () => {

    return (
        <div className="container-404">

        <div className="container-box-404">
           <div className="container-h1">
           <h1>
               PÁGINA NÃO ENCONTRADA!
               <p>
               Mas não fique triste. Navegue pelo nosso menu e boas compras!
               </p>   
            </h1>
               </div>
            <div>
                <img className="img-404" src={imagem} alt="imagem de um cachorro triste" />
            </div>
        </div>
    </div>

    )
}

export default Pagina404;