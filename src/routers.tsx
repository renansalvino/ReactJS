import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home/index';
import Login from './pages/Login/index';
import Cadastro from './pages/Cadastro/index';

function routers() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/Cadastro" component={Cadastro}/>
        </BrowserRouter>
    )
}
export default routers;