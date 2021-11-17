

import React, { useState } from 'react';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import './modal.css'
import Swal from 'sweetalert2';
import moment from 'moment';



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const value = moment();
const valueEnd = value.clone();





const CalendarModal = () => {

    //Manejo del modal
    const [isOpen, setisOpen] = useState(true);

    const [dateStart, setdateStart] = useState(value.toDate());
    const [dateEnd, setdateEnd] = useState(valueEnd.toDate());
    const [formValues, setformValues] = useState({
        title: 'Evento del Calendario',
        description: 'Descripcion del evento',
        start: value.toDate(),
        end: valueEnd.toDate(),
    });

    const {title, description, start, end} = formValues;

    //console.log(dateStart);
    //console.log(dateEnd);

    const closeModal = () => {
        setisOpen(false);
        console.log('Estamos cerrando el Modal');
    }

    const onChange = (e) => {
        setdateStart(e);
        console.log(e);
    }

    const onEnd = (e) => {
        setdateEnd(e);
        console.log(e);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Estamos enviando los datos');
        console.log(dateStart);
        console.log(dateEnd);

        //Variables que corresponden al alert de Swal
        const momentStart = moment(dateStart);
        const momentEnd = moment(dateEnd);


        //Es un alert que realiza el mismo trabajo que el minDate 
      /*   if(momentStart.isSameOrAfter(momentEnd)){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'La fecha de inicio no puede ser mayor o igual a la fecha de fin'
            })
        } */

        setisOpen(false);
    }








    return (
        <Modal
            isOpen={isOpen}
            //onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >

            <hr></hr>
            <h1> Nuevo evento </h1>
            <hr />
            
            <form 
                className="container"
                onSubmit={handleSubmit}               
            >

                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    {/* <input className="form-control" placeholder="Fecha inicio" /> */}
                    <DateTimePicker
                        onChange={ onChange }
                        value={ dateStart }
                        className="form-control"
                        minDate={ value.toDate() }//comentar si usamos Swal
                    />
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    {/* <input className="form-control" placeholder="Fecha inicio" /> */}
                    <DateTimePicker
                        onChange={ onEnd }
                        value={ dateEnd }
                        className="form-control"
                        minDate={ dateStart }//comentar si usamos Swal
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={ title }
                        onChange={ handleSubmit }
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={ description }
                        onChange={ handleSubmit }
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block w-100"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar </span>
                </button>

            </form>
        
        </Modal>
    )
}

export default CalendarModal; 
