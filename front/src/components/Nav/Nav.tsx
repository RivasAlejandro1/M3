import NavButton from "../NavButton/NavButton";
import style from './Nav.module.css';


export default function Nav (){
    return(
        <nav className={style.Nav}>
            
            <div className={style.logo}>CMB</div>
            <ul>
                <NavButton name="aaaaa"></NavButton>
                <NavButton name="About"></NavButton>
                <NavButton name="Home"></NavButton>
                <NavButton name="Log in"></NavButton>

            </ul>
        </nav>
    )
}