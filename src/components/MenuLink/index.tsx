import { NavLink } from 'react-router-dom';
import styles from './MenuLink.module.css';

interface IProps {

    path: string;
    content: string;

}

const MenuLink = ({ path, content }: IProps) => {
    
    return (
        <NavLink to={`${path}`} className={({ isActive, isPending }) => {
            if (isActive) return (styles.link, styles.highlighted );
            if (isPending) return styles.link;
        }}>
            {content}
        </NavLink>
    );

}

export default MenuLink;
