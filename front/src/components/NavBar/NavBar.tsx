import ButtonNavBar from "../ButtonNavbar";
import styles from './NavBar.module.css';


export default function NavBar (){
    return(
        <div className={styles.NavBar}>
            <ButtonNavBar name="aaaaa"></ButtonNavBar>
            <ButtonNavBar name="About"></ButtonNavBar>
            <ButtonNavBar name="Home"></ButtonNavBar>
            <ButtonNavBar name="Log in"></ButtonNavBar>
        </div>
    )
}