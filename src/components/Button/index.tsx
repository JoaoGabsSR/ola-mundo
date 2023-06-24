import { Link } from 'react-router-dom';
import styles from './Button.module.css';

interface IProps {

    size: string
    children: React.ReactNode;

}

const Button = ({ children, size }: IProps) => {

    return (
        <button className={`${styles.button} ${styles[size]}`}>
            {children}
        </button>
    );

}

export default Button;
