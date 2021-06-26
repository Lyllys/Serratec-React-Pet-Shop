import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetalhes from "../../Componentes/CardDetalheServico";
import http from "../../HTTP";

const DetalheServico = () => {
    const { id } = useParams();

    const [servico, setServico] = useState({});

    useEffect(() => {
       http.get(`servicos/` + id)
            .then(resposta => {
                setServico(resposta.data)
            }).catch(erro =>
                console.log(erro))
    }, [id])

    return (
       <CardDetalhes nome={servico.nome} preco={servico.preco} id={servico.id}/>

    )
}

export default DetalheServico;