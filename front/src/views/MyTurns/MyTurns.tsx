import style from './MyTurns.module.css';
import myAppointments from '../../helpers/myAppointments';
import Turn from '../../components/Turn/Turn'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addInfoUserAppointment } from '../../redux/reducers';

export default function MyTurns (){
    
    const URL = `http://localhost:3000/appointment/cancel/`

    //? All about Redux
    const currentUser = useSelector(state => state.user);
    const currentAppointments = useSelector(state => state.userAppointments);
    const dispatch = useDispatch();



    const handleAppointmentCancel =  async (id:string)=>{
        await axios.put(`${URL}${id}`)
        .then(res => res.data)
        .then(data => updateUserAppointments(currentUser.id))
        .catch( error => console.log(error.message));
    } 

    const updateUserAppointments = async (id:string) => {
        axios.get(`http://localhost:3000/appointment/user/${id}`)
        .then(({data}) => {
            dispatch(addInfoUserAppointment(data));
        })
        .catch((error) =>{
            console.log(error);
        })

    }
    useEffect( ()=>{
        if(currentUser?.id) updateUserAppointments(currentUser.id);
    }, [])

    return(
        <div className={style.MyTurns}>
            {
                currentAppointments?.length ? 
                currentAppointments?.map((turn, index)=> {
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