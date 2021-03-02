import React from 'react';
import './App.css';
import Card from './CardComponent';


// async function cryptoDataGetter(){
// 	var resp = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
// 	resp = await resp.json();
// 	var cleanData = resp.map((coin,i)=>({coinName:resp[i].name,image:resp[i].image,current_price:resp[i].current_price}))
	
// 	return cleanData;
	
// }


function CardList({cryptoData}) {
 //    var [cryptoData ,setCryptoData]=useState([]);
 // useEffect(()=>{
 	
 // 	cryptoDataGetter()
 // 	.then(resp=>setCryptoData(()=>(resp)));

 // },[])


  return (
   <div className = 'cf ml'>
   {
   	 cryptoData.map(user=>(<Card key ={user.coinName} coinName ={user.coinName} currentPrice={user.current_price} img={user.image}/>))
   }
   </div>
  )
}

export default CardList;

