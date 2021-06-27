import http from "../../HTTP";
import { useEffect, useState } from "react";
import CardProduto from '../../Componentes/CardProdutos'

const Produtos  = () => {
   
    const [produtos , setProdutos] = useState([]);

    useEffect(() =>{
        http.get('produtos')
        .then (resposta => {
            setProdutos(resposta.data)
        }).catch(erro => {
            console.log(erro);
        })
    }
    ,[])

    return (
        <div className="container-informacoes">
          {produtos.map((item) => <CardProduto
            key={item.id}
            id={item.id}
            nome={item.nome}
           preco={item.preco}          
          
          />)}
        </div>    )
}

export default Produtos;