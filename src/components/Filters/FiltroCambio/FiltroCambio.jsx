import React from "react";
import style from './FiltroCambio.module.css';

function FiltroCambio(props){
    return(
        <div>
                <label  for="filtroCambio">Câmbio: </label>
                <select className={style.selecionar} name='filtro' id='filtroCambio' onChange={props.onChange} value={props.filtro}>
                <option value=""></option>
                <option value="Automático">Automático</option>
                <option value="Manual">Manual</option>
                </select>
            </div>
    )
}

// <select name='filtro' id='filtroCambio' onChange={filtrarPorCambio} value={cambioFiltrado}></select>

export default FiltroCambio;