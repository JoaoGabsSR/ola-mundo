import styles from './Footer.module.css';
import { ReactComponent as MarcaRegistrada } from 'assets/images/marca_registrada.svg';

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <MarcaRegistrada />

            Desenvolvido por Alura
        </footer>
    );

}

export default Footer;
