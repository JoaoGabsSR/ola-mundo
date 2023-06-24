import Button from 'components/Button';
import styles from './NotFound.module.css';
import erro404 from 'assets/images/erro_404.png';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    const navigation = useNavigate();

    return (
        <>
            <div className={styles.contentContainer}>
                <span className={styles.text404}>404</span>

                <h1 className={styles.title}>Ops! Página não encontrada</h1>

                <p className={styles.paragraph}>
                    Tem certeza que era isso que estava procurando?
                </p>

                <p className={styles.paragraph}>
                    Aguarde alguns instantes ou então retorno a página inicial
                </p>

                <div className={styles.buttonContainer} onClick={() => { navigation('/') }}>
                    <Button size='lg' >
                        Voltar
                    </Button>
                </div>

                <img
                    className={styles.dogImage}
                    src={erro404}
                    alt="Cachorro de óculos e vestido com humano"
                />
            </div>
            <div className={styles.whiteSpace}>

            </div>
        </>
    );

}

export default NotFound;
