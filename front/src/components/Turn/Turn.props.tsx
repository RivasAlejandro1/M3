
export default interface ITurnProps {
    status: string
    date: Date 
    time: number
    details: string  
    id:  string
    handleAppointmentCancel: (id:string) => any
}