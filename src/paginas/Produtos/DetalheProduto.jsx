import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetalhes from '../../Componentes/CardDetalheProduto';
import http from "../../HTTP";

const DetalheProduto = () => {
    const { id } = useParams();

    const [produto, setProduto] = useState({});

    useEffect(() => {
        http.get(`produtos/` + id)
            .then(resposta => {
                setProduto(resposta.data)
            }).catch(erro =>
                console.log(erro))
    }, [id])

    return (
       <CardDetalhes nome={produto.nome} preco={produto.preco} id={produto.id}/>

    )
}

export default DetalheProduto;