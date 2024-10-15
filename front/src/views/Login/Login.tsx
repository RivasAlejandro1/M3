import { ErrorMessage, Field, Form, Formik } from "formik";
import style from './Login.module.css';
import validateLogin from "../../helpers/validateLogin";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addInfoUser } from "../../redux/reducers";


const URL = "http://localhost:3000/user/login";

export default function Login(){
    const user = useSelector((state) => state.userAppointments);
    const dispatch = useDispatch();

    const handleSubmit = (values, {resetForm}) =>{


        console.log("Before",user);
        
        axios.post(URL, values)
        .then(({data}) => dispatch(addInfoUser(data)))
        .then( () => resetForm() )
        .catch((error) =>{
            console.log(error.message)
        })

        
        console.log("After",user);
        
    }

    return(
        <div className={style.form__container}>
            <h1>Login</h1>
            <Formik
                initialValues={
                    {
                        username: "",
                        password: ""
                    }
                }
                onSubmit={handleSubmit}
                validate={validateLogin}
            >
                {
                    ({isValid})=>(
                        <Form  className={style.form__form}>
                            <div className={style.form__field}>
                                <label htmlFor="username" >username</label>
                                <Field className={style.form__input}  type="text" name="username" placeholder="Ingrese su username"></Field>
                                <ErrorMessage name="username" component="p"></ErrorMessage>
                            </div>
                            <div className={style.form__field}>
                                <label htmlFor="password" >password</label>
                                <Field  className={style.form__input} type="password" name="password" placeholder="Ingrese su password"></Field>
                                <ErrorMessage className={style.form__errorsText} name="password" component="p"></ErrorMessage>
                            </div>
                            <button 
                                type="submit" 
                                disabled={!isValid}
                                className={isValid ? style.form__submit : style.form__submitDisabled}
                            > Enviar</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}