import style from './home.module.css'
import CardInfo from "../../components/CardInfo/CardInfo.tsx";
import imgHome from '../../assets/home2.jpg';
import Nav from '../../components/Nav/Nav.js';
export default function Home (){
    
    const info = {
        title: "Bienvenido",
        description: `¡Bienvenido a nuestra plataforma de consultas médicas en línea! En nuestro sitio, encontrarás un equipo de profesionales de la salud dedicados a brindarte atención médica de calidad desde la comodidad de tu hogar. `,
        description2: "Nuestro objetivo es proporcionarte un servicio personalizado y confiable para resolver tus inquietudes de salud de manera rápida y segura. ¡Empieza hoy mismo a cuidar de tu bienestar con nosotros!",
        img: imgHome
    }

    return(
        <>
        <Nav></Nav>
        <div className={style.Home}>
            <h1>{info.title}</h1>
            <CardInfo info={info}/>

        </div>
        </>
    )
}