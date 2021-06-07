import React from 'react';
import './App.css';


function CardComponent({coinName , currentPrice , img}) {
  
  return (
   <article className="mw5  bg-white fl w-25 br3 pa3 pa4-ns marg grow">
  <div className="tc">
    <img src={img} className="br-100 h4 w4 dib pa2 " alt ={coinName}/>
    <h1 className="f5 mb2">{coinName}</h1>
    <h2 className="f5 fw4 gray mt0"> price : ${currentPrice}</h2>
  </div>
	</article>
  )
}



export default CardComponent;

