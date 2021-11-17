

import React from 'react'

const CalendarEvent = ({event}) => {

    console.log(event);

    const {title, user} = event;


    return (
        <div>
            <span>{title}</span>
            <span> - Usuario: {user.name}</span>            
        </div>
    )
}

export default CalendarEvent;
