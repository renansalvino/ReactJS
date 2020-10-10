import React from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/header';
import Input from '../../Components/Input/index';
import './style.css';
import '../../assets/images/styles/global.css';
import Button from '../../Components/button/index';


function Login() {
    return (
        <div>
		<Header description="Faça o login e acesse a coletânea"/>
        <div className="centro">
            <div className="login">
                <h1>Login</h1>
                <Input type="email" name="email" id="email" label="E-mail"/>
                <Input type="password" name="senha" id="senha" label="Senha"/>
                <Button onClick="" value="Enviar"/>
            </div>
        </div>
        <Footer/>
    </div>
    )
}

export default Login;