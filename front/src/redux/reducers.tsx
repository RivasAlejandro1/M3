import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: "",
    userAppointments: []
};

export const userSlice = createSlice({
        initialState: initialState,
        name: "user",
        reducers: {
            addInfoUser: (state, action) => {
                state.user = action.payload;
            },
            addInfoUserAppointment: (state, action)=>{
                state.userAppointments = action.payload;
            },
           /*  cancelUserAppointment: (state, action) => {
                const {id} = action.payload
                const findedIndex  = state.userAppointments.findIndex( appointment => appointment.id == id);
                state.userAppointments[findedIndex].state = "cancelled";
            } */
           updateInfoUserAppointment: (state, action) =>  {
                const { URL }= action.payload;
                state.userAppointments
           }
        }
});

export const { addInfoUser, addInfoUserAppointment, cancelUserAppointment } = userSlice.actions;
