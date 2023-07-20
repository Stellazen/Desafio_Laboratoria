import { React, useEffect, useState } from 'react';
import './App.css';
import dados from './data.json';
import HorizontalCard from './components/HorizontalCard/HorizontalCard';
import Header from './components/Header/Header';


function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(5);
  const [allCards, setAllCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver( (entries) => {
      if(entries.some((entry) => entry.isIntersecting)){
         console.log("elemento visível")
         setCurrentPage((currentPageInsideState) => currentPageInsideState + 1)
      }
    });
    observer.observe(document.querySelector('#finalPagina'))
    return() => observer.disconnect();
  }, []);

  useEffect(() => {
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const newCards = dados.slice(indexOfFirstCard, indexOfLastCard);
    setAllCards((prevCards) => [...prevCards, ...newCards]);
  }, [currentPage]);


  const [layout, setLayout] = useState('horizontal');

  const layoutChange = (event) => {
    const buttonClicked = event.target.className;
  
    if (buttonClicked === 'verticalButton') {
      setLayout('vertical');
    } else if (buttonClicked === 'horizontalButton') {
      setLayout('horizontal');
    }
  }


  return(
    <div>
      <Header />
      <div className='fundo'>
        <p className='paragrafo'>Visualização:</p>
        <div className='optionsCards'> 
          <button
           onClick={layoutChange} className='verticalButton'>
           </button>
          <button
          onClick={layoutChange} className='horizontalButton'>
          </button>
        </div>
        <div className={ `bodyPrincipal ${layout === 'horizontal' ? 'horizontal' : 'vertical'}`}>
          {allCards.map((item) => (
            <HorizontalCard key={item.id} item={item}
            cardClass={layout === 'horizontal' ? 'horizontal' : 'vertical'}
            layout={layout} // Passe o valor do estado layout aqui
            imagem={item.veiculo_foto[0]}
            cidade={item.veiculo_cidade}
            marca={item.veiculo_marca}
            modelo={item.veiculo_modelo}
            cambio={item.veiculo_cambio}
            ano={item.ano_modelo}
            valor={item.veiculo_valor}
            km={item.veiculo_km}
            />
          ))}
        </div>

        <div className='finalPagina' id='finalPagina'> </div> 
      </div>
    </div>
  )
}

export default App;
