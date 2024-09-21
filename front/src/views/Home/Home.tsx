import NavBar from "../../components/NavBar/NavBar";
import style from "./Home.module.css";

export default function Home () {
    return(
        <>
            <NavBar/>
            <div className={style.Home}>
                <h1>Home</h1>
            </div>
        </>
    )
}