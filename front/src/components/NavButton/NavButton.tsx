import styles from './NavButton.module.css';

export default function NavButton (props:any){
    return (
        <li className={styles.li}>
            {props.name}    
        </li>
    )
}