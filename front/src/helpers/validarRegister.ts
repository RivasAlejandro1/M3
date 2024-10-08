

let errors = {
    name: "", 
    password: "",
    email: "",
    username: "",
    confirmPassword: "",
    nDni: "",
    birthdate: ""
}

const ItsAName = /^.{4,28}$/
const ItsOnlyNumber = /^\d+$/
const ItHasANumber  = /[0-9]/
const ItHasAString = /[a-z]/
const ItHasACapitalLetter = /[A-Z]/
const ItHasASpecialCharater = /[!@#$%^&*(),.?":{}|<>]/
const ItHasALongitud = /^.{5,24}$/
const ItHasAMinLongitudNumber = /^.{6,9}$/
const ItsAEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/




export default function validarRegister(valuesRegister:any){
    
    errors = {
        name: "", 
        password: "",
        email: "",
        username: "",
        confirmPassword: "",
        nDni: "",
        birthdate: ""
    }

    const {
        name, 
        username, 
        password, 
        email,  
        confirmPassword,
        nDni,
        birthdate
    } = valuesRegister;

    if(!ItsAName.test(name)) errors.name ="Debe tener entre 4 a 28 caracteres";
        
    
    if(!ItsOnlyNumber.test(nDni)) errors.nDni = "Solo puede contener numeros";
    if(!ItHasAMinLongitudNumber.test(nDni)) errors.nDni = "Debe tener entre 6 a 9 caracteres";
    
    
    if(!ItHasALongitud.test(username)) errors.username = "Debe tener minimo 5 caracteres y un maximo 25 caracteres";
    if(!ItHasANumber.test(username)) errors.username = "Debe tener almenos un numero";
    
    if(!ItsAEmail.test(email)) errors.email = "Debe ser un Email";

    if(!ItHasACapitalLetter.test(password)) errors.password = "Debe tener almenos una Mayúscula";
    if(!ItHasANumber.test(password)) errors.password = "Debe tener almenos un numero";
    if(!ItHasALongitud.test(password)) errors.password = "Debe tener minimo 5 caracteres y un maximo 25 caracteres";
    if(!ItHasAString.test(password)) errors.password = "Debe tener al menos una letra minuscula";
    if(!ItHasASpecialCharater.test(password)) errors.password = "Debe tener almenos una caracter especial";
    
    if(!ItHasACapitalLetter.test(confirmPassword)) errors.confirmPassword = "Debe tener almenos una Mayúscula";
    if(!ItHasANumber.test(confirmPassword)) errors.confirmPassword = "Debe tener almenos un numero";
    if(!ItHasALongitud.test(confirmPassword)) errors.confirmPassword = "Debe tener minimo 5 caracteres y un maximo 25 caracteres";
    if(!ItHasAString.test(confirmPassword)) errors.confirmPassword = "Debe tener al menos una letra minuscula";
    if(!ItHasASpecialCharater.test(confirmPassword)) errors.confirmPassword = "Debe tener almenos una caracter especial";

    if (
        errors.name == "" &&
        errors.username == "" &&
        errors.email == "" &&
        errors.password == "" &&
        errors.nDni == "" &&
        errors.birthdate == "" &&
        errors.confirmPassword == "" 
    ) return {}
    return errors;
}