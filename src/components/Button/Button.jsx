import React from "react";
import style from './Button.module.css'

function Button(props){
    return(
        <div>
            <button className={style.principalButton}>{props.children}</button>
        </div>
    )
}

export default Button;