import { ErrorMessage, Field, Form, Formik } from "formik";
import validateLogin from "../../helpers/validateLogin";
import axios from "axios";


const URL = "http://localhost:3000/user/login"

export default function Login(){

    const handleSubmit = (values, {resetForm}) =>{

        axios.post(URL, values)
        .then((res) => console.log(res))
        .then( () => resetForm() )
        .catch((error) =>{
            console.log(error.message)
        })
    }

    return(
        <div>
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
                    ({errors})=>(
                        <Form >
                            <div>
                                <label htmlFor="username">username</label>
                                <Field  type="text" name="username" placeholder="Ingrese su username"></Field>
                                <ErrorMessage name="username" component="p"></ErrorMessage>
                            </div>
                            <div>
                                <label htmlFor="password">password</label>
                                <Field type="password" name="password" placeholder="Ingrese su password"></Field>
                                <ErrorMessage name="password" component="p"></ErrorMessage>
                            </div>
                            <button type="submit" disabled={ errors == {} ? false : true }> Login</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}