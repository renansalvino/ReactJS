import React from 'react';
import './style.css';

interface ButtonProps{
    value:string;
    onClick: any;
}

const Button: React.FC<ButtonProps> = ({onClick, value})=>{
    return(
        <div className="btn">
            <button onClick={onClick}>{value}</button>
        </div>
    )
}
export default Button;