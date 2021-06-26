import axios from "axios";
import { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const efetuarLogin = (evento) => {
        evento.preventDefault();
        const usuario = {
            email: email,
            senha: senha
        }


        axios.post(`http://localhost:8000/auth/login`, usuario)
            .then((resposta) => {
                console.log(resposta.data)
                localStorage.setItem('token', resposta.data.access_token)
                setEmail('');
                setSenha('');

            })
            .catch((erro => console.log(erro)))



    }

    return <div className="form">
        <h1>Login</h1>
        <form onSubmit={efetuarLogin}>
            <div>
                <label>E-mail</label>
                <input required value={email} type="email" onChange={(evento) => setEmail(evento.target.value)} />
            </div>
            <div>
                <label>Senha</label>
                <input required value={senha} type="password" onChange={(evento) => setSenha(evento.target.value)} />
            </div>
            <button>LOGIN</button>
        </form>
    </div>
}

export default Login;