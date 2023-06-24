import styles from './CardModel.module.css';

interface IProps {

    title: string;
    capaPicture: string;
    children: React.ReactNode;

}

const CardModel: React.FC<IProps> = ({ title, capaPicture, children }) => {

    return (
        <article className={styles.postModelContainer}>
            <div
                className={styles.capaPicture}
                style={{ backgroundImage: `url(${capaPicture})` }}
            ></div>

            <h2 className={styles.title}>
                {title}
            </h2>

            <div className={styles.postContentContainer}>
                {children}
            </div>
        </article>
    );

}

export default CardModel;
