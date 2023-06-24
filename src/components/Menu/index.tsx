import MenuLink from '../MenuLink';
import styles from './Menu.module.css';

const Menu = () => {
    
    return (
    <header>
        <nav className={styles.navigation}>
            <MenuLink path='/' content='Início' />
            <MenuLink path='/sobre-mim' content='Sobre Mim' />
        </nav>
    </header>
    );

}

export default Menu;
