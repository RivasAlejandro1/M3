import { ErrorMessage, Field, Form, Formik } from "formik";
import validarRegister from "../../helpers/validarRegister";
import axios from 'axios'

import style from './Register.module.css'



export default function Register(){
    
    const handleSubmit = async (values:any) => {

        console.log(values)

         await axios.post("http://localhost:3000/user/register", values)
        .then((info) =>{
            console.log(values)
            console.log(info)
        })  
    }

    return(
        <div className={style.form__container}>
            <h2>Register</h2>
            <Formik
                initialValues={
                    {
                        username: "", 
                        name: "",
                        email: "",
                        password:"",
                        nDni:"",
                        birthdate:"",
                        confirmPassword: ""
                    }
                }
                validate={validarRegister}
                onSubmit={handleSubmit}
            >
                {()=> (

                    <Form 
                        className={style.form__form}
                    >
                        <div className={style.form__field}>
                            <label htmlFor="name" >NAME</label>
                            <Field  type="text" name="name" placeholder="Ingrese su nombre completo" className={style.form__input}></Field>
                            <ErrorMessage component="p" name="name"></ErrorMessage>
                        </div>
                        <div className={style.form__field}>
                            <label htmlFor="birthdate" >Birthdate</label>
                            <Field  type="date" name="birthdate" placeholder="Ingrese su fecha de nacimiento" className={style.form__input}></Field>
                            <ErrorMessage component="p" name="birthdate"></ErrorMessage>
                        </div>
                        <div className={style.form__field}>
                            <label htmlFor="nDni" >nDni</label>
                            <Field  type="number" name="nDni" placeholder="Ingrese su nDni" className={style.form__input}></Field>
                            <ErrorMessage component="p" name="nDni"></ErrorMessage>
                        </div>
                        <div className={style.form__field}>
                            <label htmlFor="email">EMAIL</label>
                            <Field type="text" name="email" placeholder="ejemplo@correo.com" className={style.form__input}></Field>
                            <ErrorMessage component="p" name="email"></ErrorMessage>
                        </div>
                        <div className={style.form__field}>
                            <label htmlFor="username" >USERNAME</label>
                            <Field type="text" name="username" placeholder="Ingrese un username" className={style.form__input}></Field>
                            <ErrorMessage component="p" name="username"></ErrorMessage>
                        </div>

                        
                        <div className={style.form__field}>
                            <label htmlFor="password" >PASSWORD</label>
                            <Field type="password" name="password" placeholder="Ingrese una contraseña" className={style.form__input}></Field>
                            <ErrorMessage component="p" name="password"></ErrorMessage>
                        </div>
                        
                        <div className={style.form__field}>
                            <label htmlFor="confirm password">CONFIRM PASSWORD</label>
                            <Field type="password" name="confirmPassword" placeholder="Repita la contraseña" className={style.form__input}></Field>
                            <ErrorMessage component="p" name="confirmPassword"></ErrorMessage>

                        </div>
                        
                        <button type="submit"   className={style.form__submit}>SUBMIT</button>
                    </Form>
                )}
            </Formik>
        </div>
    )

}