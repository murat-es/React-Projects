import React from 'react'
import {moneyFormat} from '../utils.js'
import'./header.css'

export default function Header({money,total}) {
    
    return (
        <div className="head" >
            {money-total>0 ? <div className="header1">You have ₺{moneyFormat(money-total)}</div>    :
             <div className="header2">You spent all the money</div> }
           
        </div>
    )
}
