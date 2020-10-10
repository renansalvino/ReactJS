import React from 'react';
import logo from '../../assets/images/logo.png';
import './style.css';
import '../../assets/images/styles/global.css'
import { Link } from 'react-router-dom';
interface HeaderProps {
    description: string;
    text?: string;
}


const Header: React.FC<HeaderProps> = (props) => {
    return (
        <div className="principal">
            <div className="header">
                <div className="align">
                    <nav>
                        <div id="Logo">
                        <Link to="/">
                        <img src={logo} alt="Logo da coletânea irmão" />
                        </Link>
                        </div>
                        <ul className="menu">
                            <li><Link className="link" to="/">Home</Link></li>
                            <li><Link className="link" to="/login">Login</Link></li>
                            <li><Link className="link" to="/cadastro">Cadastro</Link></li>
                        </ul>
                    </nav>
                    <h3>{props.description}</h3>
                    <p>{props.text && <p>props.text</p>}</p>
                </div>
            </div>
        </div>
    )

}
export default Header;
