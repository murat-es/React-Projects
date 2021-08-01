import './App.css';
import Header from './components/Header.js'
import { useState, useEffect } from "react";
import products from './products.json'
import Product from './components/Product.js'
import Basket from './components/Basket';

function App() {
  const money=5000000;
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    setTotal(basket.reduce((total, productItem) => {
     
      return total + (productItem.amount * productItem.price)},0))
     
    }
      , [basket]);


  const reset = () => {
    setBasket([]);
  } 

  

  return (
    <div className="App">
      <Header money={money} total={total}/>
      {products.map(
        product => <Product key={product.id} product={product}
          basket={basket} setBasket={setBasket} money={money-total}/>
      )}
      {total>0 &&  <Basket basket={basket} total={total} reset={reset}/>}
      
    </div>
  );
}

export default App;
