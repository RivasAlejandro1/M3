import Nav from "../../components/Nav/Nav";
import style from "./Home.module.css";

export default function Home () {
    return(
        <>
            <Nav/>
            <div className={style.Home}>
                <h1>Home</h1>
            </div>
        </>
    )
}