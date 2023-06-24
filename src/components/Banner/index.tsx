import styles from './Banner.module.css';
import multicolorCircle from 'assets/images/circulo_colorido.png';
import myPicture from 'assets/images/question-symbol.png';

const Banner = () => {
    
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.title}>
                    Olá Mundo!
                </h1>

                <p className={styles.paragraph}>
                    Olá, eu sou João Gabriel, desenvolvedor fullstack que está em início de carreira,
                    estou construindo esse pequeno site usando recursos do ReactJS, e estou sendo tutorado pelo Antônio Evaldo, 
                    que é um estrutor da Alura. Neste curso aprendemos o uso do controle de rotas das nossas aplicações React,
                    dando assim mais um passo dentro da formação React da Alura.
                </p>
            </div>

            <div className={styles.multicolorCircle}>
                <img 
                    className={styles.multicolorCircleImage}
                    src={multicolorCircle} 
                    alt="Círculo Multicolorido"
                    aria-hidden={true}
                />

                <img 
                    className={styles.myPicture}
                    src={myPicture} 
                    alt="Minha Foto" 
                />
            </div>
        </div>
    );

}

export default Banner;
