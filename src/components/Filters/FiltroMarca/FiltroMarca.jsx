import React from "react";
import style from './FiltroMarca.module.css'

function FiltroMarca(props){
    return(
<div>
<div>
                <label  for="filtroMarca">Marca: </label>
                <select className={style.selecionar} name="filtro" id="filtroMarca" onChange={props.onChange} value={props.filtro}>
                <option value=""></option>
                <option value="Citroen">Citroen</option>
                <option value="Peugeot">Peugeot</option>
                <option value="Renault">Renault</option>
                <option value="Volkswagen">Volkswagen</option>
                <option value="Fiat">Fiat</option>
                <option value="Mitsubishi">Mitsubishi</option>
                <option value="GM - Chevrolet">GM - Chevrolet</option>
                <option value="Hyundai">Hyundai</option>
                <option value="BMW">BMW</option>
                <option value="Ford">Ford</option>
                <option value="Honda">Honda</option>
                <option value="Land Rover">Land Rover</option>
            </select>
            </div>
</div>
    )
}


export default FiltroMarca;