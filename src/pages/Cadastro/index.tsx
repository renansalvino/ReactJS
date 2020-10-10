import React from 'react';
import Header from '../../Components/header/index'
import Footer from '../../Components/Footer/index'
import './style.css';
import '../../assets/images/styles/global.css';
import Input from '../../Components/Input';
import Button from '../../Components/button';

function Cadastro() {
    return (
        <div className='App'>
            <Header description="Faça o seu cadastro para ter acesso á sua coletânea" />
            <div className="centro">
                <div className="Cadastro">
                    <h1>Cadastro</h1>
                    <Input type="name" name="Nome" id="nome" label="Nome" />
                    
                    <Input type="email" name="email" id="email" label="Email" />
                    
                        <label htmlFor="permissao">Permissão</label>
                        <br/>
                        <select name="permissao" id="permissao">
                        <option value="Opc1">Opção 1</option>
                        <option value="Opc1">Opção 2</option>
                    </select>
                    <Input type="password" name="Email" id="senha"  label="Senha"/>
                    <Button onClick="" value="Cadastrar"/>
                </div>
                </div>
                <Footer />
            </div>
    )
}
export default Cadastro;