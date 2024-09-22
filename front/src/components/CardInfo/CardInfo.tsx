import style from './cardInfo.module.css';
export default function CardInfo({info}){

    
    return(
        <article className={style.card__container}>
            <img  alt="img of card" src={info.img}></img>
            <div>    
                {info.subtitle? <h2>{info.subtitle}</h2> : ""}
                <p>{info.description}</p>
                {info.description2? <p>{info.description2}</p> : ""}
            </div>
        </article>
    )
}