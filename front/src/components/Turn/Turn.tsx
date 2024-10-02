import React from 'react';
import style from './Turn.module.css';
import ITurnProps from './Turn.props';


const Turn:React.FC<ITurnProps> = ({ status, date, time, details, id, handleAppointmentCancel}) => {
    const active = (status === "active");   
    const cancelAppointment = ()=>{
        if (window.confirm(`¿Desea cancelar la reserva del dia ${date} en la hora ${time}?`)){
            handleAppointmentCancel(id)
        }
    }
    
    return(
        <div className={ active ? style.turn__container :  style.turn__containerCancelled}>
            <div className={style.turn__status}>
                Estado: <span className={style.status}>{status.toUpperCase()}</span><br/>
            </div>
            <div className={style.turn__info}>
                <span>{date.toLocaleDateString()}</span> <span>{time}Hrs</span> <span>{details}</span> 
                <button className={style.turn__button} onClick={cancelAppointment}>
                </button> 

            </div>
           
        </div>
    )
}

export default Turn;