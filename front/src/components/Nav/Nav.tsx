import NavButton from "../NavButton/NavButton";
import style from './Nav.module.css';


export default function Nav (){
    return(
        <nav className={style.Nav}>
            
            <div className={style.logo}>CMB</div>
            <ul>
                <NavButton path="register" name="Regiter"></NavButton>
                <NavButton path="about" name="About"></NavButton>
                <NavButton path="home" name="Home"></NavButton>
                <NavButton path="/" name="Log in"></NavButton>
            </ul>
        </nav>
    )
}