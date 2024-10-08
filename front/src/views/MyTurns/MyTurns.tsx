import style from './MyTurns.module.css';
import myAppointments from '../../helpers/myAppointments';
import Turn from '../../components/Turn/Turn'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function MyTurns (){

    const [myAppointmentsState, setMyAppointmentsState ] = useState([]);
    const handleAppointmentCancel = ()=>{
        console.log("handleAppointmentCancel")

    } 

    useEffect( ()=>{
        axios.get("http://localhost:3000/appointment/")
        .then(({data}) => {
            setMyAppointmentsState(data);
        })
        .catch((error) =>{
            console.log(error)
        })
    }, [])
    return(
        <div className={style.MyTurns}>
            {
                myAppointmentsState.length ? 
                myAppointmentsState?.map((turn, index)=> {
                    const { status, date, time, details, id} = turn;
                    return( 
                        <Turn 
                            status={status}
                            date= {new Date(date)} 
                            time= {time}
                            details = {details}
                            id= {id}
                            handleAppointmentCancel={handleAppointmentCancel}
                            key={index} 
                        />
                    )

                })
                : <div className={style.noTurns}>No tienes aun turnos</div>
            }
        </div>    
    )
}