import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import Button from 'components/Button';

interface IPosts {

    post: {
        id: number;
        titulo: string;
        texto: string;
    };

}

const Card = ({ post }: IPosts) => {

    return (
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img
                    className={styles.capa}
                    src={`assets/posts/${post.id}/capa.png`}
                    alt={'Capa da matéria'}
                />
                <h2 className={styles.title}>{post.titulo}</h2>
                <Button size='n'>Ler</Button>
            </div>
        </Link>
    );

}

export default Card;
