import React from 'react'
import './basket.css'
import {moneyFormat} from '../utils.js'

function Basket({basket, total,reset}) {
    
    return (
        <div className="basket">
             <h3 className="left" >Details</h3> 
            <hr/>
             {basket.map(item => (
                 <p style={{textAlign:"left",paddingLeft:"50px"}}><span >{item.name} x {item.amount}</span> 
                     <span className="right">${moneyFormat(item.amount*item.price)}</span>
                 </p>
             ))}
             
             <hr/>
             
             <button className="reset" style={{marginLeft:"50px"}} onClick={reset}>Reset Basket</button>
             <span className="right">Total: ${moneyFormat(total)}</span>
             
      
           
           
        </div>
    )
}

export default Basket
