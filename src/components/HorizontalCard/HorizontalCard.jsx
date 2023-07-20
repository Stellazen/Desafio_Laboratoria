import React from 'react';
import style from './HorizontalCard.module.css';
import Button from '../Button/Button';

function horizontalCard(props) {
    return (
        <div className={style.principalContainer}>

          <div className={style.carImage} style={{ backgroundImage: `url(${props.imagem})` }}>
            <p className={style.cidade}>{props.cidade}</p>
          </div>
    
          <div className={style.description}>
            <h1 className={style.title}>{props.marca}</h1>
    
            <div className={style.carModel}>
              <h2 className={style.modelTitle}>{props.modelo}</h2>
            </div>
    
            <p className={style.paragraph}>{props.cambio}</p>
            <p className={style.paragraph}>{props.ano}</p>
            <h3>{Number(props.valor).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h3>
            <p className={style.paragraph}>{props.km} km</p>

            <div className={style.buttons}>
                <Button>Simular Financiamento</Button>
                <Button>Entrar em Contato</Button>
            </div>          
          </div>

          
        </div>
      );
    };

export default horizontalCard;