import { Link } from 'react-router-dom';
import styles from './NavButton.module.css';

export default function NavButton (props:any){
    return (
        <li className={styles.li}>
        <Link to={props.path}>
            {props.name}    
        </Link>
        </li>
    )
}