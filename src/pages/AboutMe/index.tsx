import styles from './AboutMe.module.css';
import CardModel from 'components/CardModel';
import capaPicture from 'assets/images/sobre_mim_capa.png';
import aboutMePicture from 'assets/images/about_me_picture.png';

const AboutMe = () => {

    return (
        <CardModel title='Sobre Mim' capaPicture={capaPicture}>
            <h3 className={styles.subtitle}>
                Olá, meu nome é João Gabriel
            </h3>

            <img 
                src={aboutMePicture}
                className={styles.pictureAboutMe}
            />

            <p className={styles.paragraph}></p>
        </CardModel>
    );
    
}

export default AboutMe;
