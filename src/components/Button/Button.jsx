import React from "react";
import style from './Button.module.css'

function Button(props){
    return(
        <div>
            <button className={style.principalButton} style={{ backgroundColor: props.color }}>{props.children}</button>
        </div>
    )
}

export default Button;