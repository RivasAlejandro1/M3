


const ItHasALongitud = /^.{5,24}$/
const ItHasANumber  = /[0-9]/

export default function validateLogin (values){
    const errors = {
        username: "",
        password: ""
    }
    const {
        username,
        password
    } = values;

    if(!ItHasALongitud.test(username)) errors.username = "Debe tener minimo 5 caracteres y un maximo 25 caracteres";
    if(!ItHasALongitud.test(password)) errors.password = "Debe tener minimo 5 caracteres y un maximo 25 caracteres";

    if(errors.username == "" && errors.password == "" ) return {};
    
    return errors;

    
}