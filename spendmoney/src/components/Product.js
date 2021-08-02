import React from 'react'
import './product.css'
import { moneyFormat } from '../utils.js'


function Product({ product, basket, setBasket, money }) {

    const basketItem = basket.find(item => item.id === product.id);

    const addToBasket = () => {
        const checkBasket = basket.find(
            item => item.id === product.id
        )
        if (checkBasket) {
            checkBasket.amount += 1;
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        }
        else {
            setBasket([...basket, {
                id: product.id, name: product.name, price: product.price, amount: 1
            }]);
        }

    }

    const removeFromBasket = () => {
        const checkBasket = basket.find(
            item => item.id === product.id
        )
        checkBasket.amount -= 1;

        if (checkBasket.amount === 0) {
            setBasket([...basket.filter(item => item.id !== product.id)])

        } else {
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        }



    }


    return (
        <div className="productList">

            <div className="container">
                <img src={product.image} alt="" width="200px" height="200px" />
                <h3>{product.name}</h3>
                <p>${moneyFormat(product.price)}</p>
                <button className="buttonMoney red" id="sellB"
                    disabled={!basketItem} onClick={removeFromBasket}>sell</button>
                <span style={{pointerEvents: "none"}}> &nbsp; {(basketItem && basketItem.amount) || 0}  &nbsp;</span>
                <button disabled={product.price > money} className="buttonMoney" onClick={addToBasket}>buy</button>

            </div>


        </div>
    )
}

export default Product
