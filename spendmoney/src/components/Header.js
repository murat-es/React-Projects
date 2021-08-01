import React from 'react'
import {moneyFormat} from '../utils.js'
import'./header.css'

export default function Header({money,total}) {
    
    return (
        <div className="header">
            
           You have ₺{moneyFormat(money-total)}   
        </div>
    )
}
