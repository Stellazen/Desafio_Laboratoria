import React from "react";
import style from './Header.module.css';
import Logo from '../../images/socarrao.webp'

function Header(){
    return(
        <header className={style.header}>
        <img src={Logo} className={style.imgLogo} alt='imagem logo sóCarrão' />
      </header>
    )
}

export default Header;