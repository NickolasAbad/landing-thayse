import styles from './index.module.scss';
import foto from './assets/thayse_livro.jpg';
import clsx from 'clsx/dist/clsx.m';
import { Row, Col, Container } from 'react-bootstrap';

const Sobre = () => {
    return (
        <section id='sobre' className={clsx(styles.s_sobre)}>
            <Container>
                <h2 data-aos="slide-down" data-aos-duration="1000" className={clsx(styles.titulo, 'text-center pt-4 pb-4')}>Sobre a Dra. Thayse Labanca</h2>
                <Row className='my-auto'>
                    <Col data-aos="fade-right" data-aos-duration="1000" data-aos-delay="350" lg={7}>
                        <p className={styles.desc}>
                            Thayse Labanca é psicóloga clínica e tem como principal ferramenta de trabalho a Terapia Cognitivo Comportamental, uma abordagem que permeia e transita por outras como a psicanálise e Gestalt terapia. A TCC é considerada por médicos do mundo todo como sendo padrão ouro na melhora de casos clínicos graves, por ser uma abordagem mais objetiva e estruturada, possuindo caráter científico e ótima aceitação em tratamento conjunto com a psiquiatria.
                            <br />
                            <br />
                            Mas antes de chegar a Psicologia, Thayse formou-se em Direito pela Universidade Estadual do Sudoeste da Bahia – UESB, sempre voltada e interessada em atuações sociais, medidas protetivas, perfil psicológico de presos, já tendo atuado na prática com adolescentes infratores, crianças vítimas de abuso sexual, presidiários, dentre outras formas de violência criminosa, sexual e parental. Num determinado momento, percebeu que de nada valia buscar a liberdade física, se a dor carregada no peito por alguém o limitava da própria vida.
                            <br />
                            <br />
                            Com formações acadêmicas tão ricas e complementares, o Direito e a Psicologia, atua buscando trazer ao ser humano a saúde no âmbito Biopsicossocial e acredita ser esta a única forma de se alcançar uma sociedade mais justa e saudável. E é através desse pensamento humano, associado a estudos profundos na compreensão dessa complexidade que é o ser humano e a vida em sociedade, que a Dra Thayse oferece aos seus pacientes e clientes um cuidado estendido e feito com muito respeito e entrega, sendo preparada cientificamente para atuar com maestria nos âmbitos da Psicoterapia Clínica e Psicologia Forense.
                        </p>
                    </Col>
                    <Col data-aos="fade-out" data-aos-duration="1000" data-aos-delay="350" lg={5}>
                        <img className={clsx(styles.image)} src={foto} alt="Foto Dra. Thayse" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Sobre