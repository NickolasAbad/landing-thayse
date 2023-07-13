import styles from './index.module.scss'
import clsx from 'clsx/dist/clsx.m'
import foto from './assets/thayse.png'
import Container from 'react-bootstrap/Container';

function Home() {

    return (
        <>
            <section id='home' className={clsx(styles.s_hero, styles.row)}>
                <Container id='container'>
                    <div className={styles.quoteDiv}>
                        <p className={styles.quote}>&quot;Conheça todas as teorias, domine todas as técnicas, mas ao tocar uma alma humana, seja apenas outra alma humana.&quot; - Carl Jung</p>
                    </div>
                    <ul className={styles.ul}>
                        <li className={clsx(styles.li, styles.items)}>
                            <div className={clsx(styles.hero_texts)}>
                                <h1>Thayse Labanca</h1>
                                <p className={styles.desc}>Promovendo o bem-estar emocional, cultivando o equilíbrio interior e guiando você rumo a uma vida plena e significativa.</p>
                            </div>
                            <div className={clsx(styles.hero_buttonsQuote)}>
                                <div className={styles.button}>
                                    <a href="#infos" className={clsx(styles.hero_buttonS, styles.button)}>Saiba mais</a>
                                    <a href="#contato" className={clsx(styles.hero_buttonC, styles.button)}>Contato</a>
                                </div>
                            </div>
                        </li>
                        <li className={clsx(styles.li, styles.img)}>
                            <div className={clsx(styles.hero_imgContent)}>
                                <img src={foto} alt="Foto Thayse" />
                            </div>
                        </li>
                    </ul>
                </Container>
            </section>
        </>
    );
}
export default Home