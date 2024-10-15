import { useSelector } from "react-redux";
import NavButton from "../NavButton/NavButton";
import style from './Nav.module.css';


export default function Nav (){
    const currentUser = useSelector(state => state.user);


    return(
        <nav className={style.Nav}>
            
            <div className={style.logo}>CMB</div>
            <ul>

                {  
                    currentUser ?              
                    <NavButton path="myTurns" name="myTurns"></NavButton>
                    : <></>
                }  
                <NavButton path="register" name="Register"></NavButton>
                <NavButton path="about" name="About"></NavButton>
                <NavButton path="home" name="Home"></NavButton>
                <NavButton path="/" name="Log in"></NavButton>
            </ul>
        </nav>
    )
}