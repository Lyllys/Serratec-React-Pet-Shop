import { useState } from 'react';
import axios from 'axios';

const Cadastro = () => {
    
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const efetuarCadastro = (evento) => {
        evento.preventDefault();
        // if(senha.length < 8 ){
        //     alert('A senha deve conter no minímo 8 dígitos')
        //     return 
        // }
        const usuario = {
            nome: nome,
            email: email,
            senha: senha
        }

        axios.post('http://localhost:8000/auth/register' , usuario)
        .then((resposta) => {
            console.log(resposta.data)
            setNome('');
            setEmail('');
            setSenha('');

        })
        .catch(erro => console.log(erro))
     
    }

    return <div className="form">
        <h1>Cadastre-se</h1>
    <form onSubmit={efetuarCadastro}>
        <div>
            <label>Nome</label>
            <input required value={nome} onChange={(evento) => setNome(evento.target.value)} />
        </div>
        <div>
            <label>E-mail</label>
            <input required type="email" value={email} onChange={(evento) => setEmail(evento.target.value)}/>
        </div>
        <div>
            <label>Senha</label>
            <input  required minLength="8" type="password" value={senha} onChange={(evento) => setSenha(evento.target.value)}/>
        </div>
        <button>CADASTRAR</button>
    </form>
</div>
}

export default Cadastro;
