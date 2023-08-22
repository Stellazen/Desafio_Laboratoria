import React from "react";
import style from './Header.module.css';


function Header(){
    return(
      <header className={style.header}>
      <p>Versão não oficial</p>  
      </header>
    )
}

export default Header;