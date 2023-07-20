import React from 'react';
import './HorizontalCard.css';
import Button from '../Button/Button';

function horizontalCard(props) {
    return (
        <div className={ `principalContainer ${props.layout === 'horizontal' ? 'horizontal' : 'vertical'}`}>

          <div className={ `carImage ${props.layout === 'horizontal' ? 'horizontal' : 'vertical'}`} style={{ backgroundImage: `url(${props.imagem})` }}>
            <p className={ `cidade ${props.layout === 'horizontal' ? 'horizontal' : 'vertical'}`}>{props.cidade}</p>
          </div>
    
          <div className='description'>
            <h1 className='title'>{props.marca}</h1>
    
            <div className='carModel'>
              <h2 className='modelTitle'>{props.modelo}</h2>
            </div>
    
            <p className='paragrafo'>{props.cambio}</p>
            <p className='paragrafo'>{props.ano}</p>
            <h3 className='valor'>{Number(props.valor).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h3>
            <p className='paragrafo'>{props.km} km</p>

            <div className='buttons'>
                <Button>Simular Financiamento</Button>
                <Button>Entrar em Contato</Button>
            </div>          
          </div>

          
        </div>
      );
    };

export default horizontalCard;