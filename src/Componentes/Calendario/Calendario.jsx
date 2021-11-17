

import React from 'react'
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import {messages} from './traducir';
import moment from 'moment';
import "moment/locale/es";
import Navbar from '../UI/Navbar';
import CalendarEvent from './CalendarEvent';
import CalendarModal from './CalendarModal';


moment.locale('es');

const events = [{
    title: 'Cumpleaños de Berni',
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    user: {
        id: '1',
        name: 'Berni'
    }
}]


export const Calendario = () => {

    const localizer = momentLocalizer(moment);

    const onDoubleClick = (e) => {//doble click para editar los eventos
    console.log(e);
    }

    const onSelectEvent = (e) => {//doble click para editar los eventos
    console.log('Hizo click una sóla vez - Seleccion{o el evento');
    }

    const onViewChange = (e) => {//doble click para editar los eventos
    console.log('Hubo un cambio en el calendario y lo imprimo');
    } 

    return (
        <div className="container calendario">
            
            <Navbar />

            <Calendar
                localizer={ localizer }
                events={ events }
                startAccessor="start"
                onDoubleClickEvent={ onDoubleClick }
                message={ messages }
                onSelectEvent={ onSelectEvent }
                onView={ onViewChange }
                endAccessor="end"
                style={{ height: 900 }}
                components={{
                    event: CalendarEvent
                }}
            />

            <CalendarModal /> 
        
        </div>
    )
}
