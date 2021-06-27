import { useState , useEffect } from "react";
import http from "../../HTTP";
import CardServico from "../../Componentes/CardServicos";

const Servicos = () => {
    
    const [servicos, setServicos] = useState([]);
        useEffect(() => {
            http.get('servicos')
            .then(resposta => {
                setServicos(resposta.data);
            }).catch (erro => {
                console.log(erro);
            })
        }, []);
    
    return (
        <div  className="container-informacoes">
           
            {servicos.map((item) =>  <CardServico  key={item.id} 
                id={item.id} 
                nome={item.nome}
                preco={item.preco}

                />

                )}
        </div>
    )
}

export default Servicos;