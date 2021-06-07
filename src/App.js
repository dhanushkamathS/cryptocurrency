import React ,{useState , useEffect}from 'react';
import './App.css';
import NavbarCustom from './NavbarCustom';
import CardList from './CardList';
import Scroll from './Scroll';


async function cryptoDataGetter(){
  var resp = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
  resp = await resp.json();
  var cleanData = resp.map((coin,i)=>({coinName:resp[i].name,image:resp[i].image,current_price:resp[i].current_price}))
  
  return cleanData;
  
}

function App() {

 var [cryptoDatas ,setCryptoDatas]=useState([]);
 var [searchfield , setSearchfield] = useState('');

useEffect(()=>{
        cryptoDataGetter()
        .then(resp=>setCryptoDatas(()=>(resp)));
 },[])

function searchChange(event){
    setSearchfield(event.target.value)
}

var filteredCoin = cryptoDatas.filter(
    robot =>{
        return robot.coinName.toLowerCase().includes(searchfield.toLowerCase())
    });

  return (     
    <div className="App">
    <NavbarCustom searchChange ={searchChange}/>
    <Scroll>
      <CardList cryptoData ={filteredCoin}/>
    </Scroll>
    </div>
  )
}

export default App;

