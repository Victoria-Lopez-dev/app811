import React from 'react'
import AppRouter from './Router/AppRouter'
import'./style.css';
const appCalendar =()=>{
    return(
        <div>
            <div>
                <h1>Soy la Aplicacion Principal del Calendario</h1>
            </div>

            <AppRouter />
        </div>
  
    )
}

export default appCalendar