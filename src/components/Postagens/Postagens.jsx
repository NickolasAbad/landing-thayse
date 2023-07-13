import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import clsx from 'clsx/dist/clsx.m'
import styles from './index.module.scss'
import mae from './assets/mae.png'
import pai from './assets/pai.jpg'
import talk from './assets/talk.png'
import mother from './assets/mother.jpeg'
import ansiedade from './assets/ansiedade.jpeg'
import OIP from './assets/OIP.jpeg'

const Postagens = () => {
    return (
        <section id='postagens' className={clsx(styles.s_postagens)}>
            <Container>
                <h1 data-aos="slide-down" data-aos-duration="1000" className={clsx(styles.titulo, 'pt-3 pb-3 text-center')}>Postagens</h1>
                <div className={styles.posts}>
                    <Row className='justify-content-center'>
                        <Col data-aos="fade-out" data-aos-duration="1000" data-aos-delay="350" className={styles.postsItem} lg={3} md={4} sm={8}>
                            <Card>
                                <Card.Img className={styles.cardImage} variant="top" src={OIP} />
                                <Card.Body>
                                    <Card.Title>Precisamos nos revisitar constantemente e sair do "modo automático"</Card.Title>
                                    <Card.Text>
                                        Reflexões sobre a perda de contato com nós mesmos devido à tecnologia e a falta do autoconhecimento.
                                    </Card.Text>
                                    <Button variant="primary" href='https://www.instagram.com/p/Cna3weptS5_/?igshid=YjgzMjc4YjcwZQ=='>Ler mais</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col data-aos="fade-out" data-aos-duration="1000" data-aos-delay="650" className={styles.postsItem} lg={3} md={4} sm={8}>
                            <Card>
                                <Card.Img className={styles.cardImage} variant="top" src={mae} />
                                <Card.Body>
                                    <Card.Title>Desmistificando a culpa materna: o peso das cobranças e o acolhimento</Card.Title>
                                    <Card.Text>
                                        Desvende a complexidade da maternidade, a culpa e a busca por acolhimento em casos de neuroatipia.
                                    </Card.Text>
                                    <Button variant="primary" href='https://www.instagram.com/p/CfedKmAuglI/?igshid=YjgzMjc4YjcwZQ=='>Ler mais</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col data-aos="fade-out" data-aos-duration="1000" data-aos-delay="950" className={styles.postsItem} lg={3} md={4} sm={8}>
                            <Card>
                                <Card.Img className={styles.cardImage} variant="top" src={pai} />
                                <Card.Body>
                                    <Card.Title>Desvendando o Arquétipo PAI: Autoconhecimento</Card.Title>
                                    <Card.Text>
                                        Tornando-se consciente do arquétipo pai: liberando-se das feridas da infância para o crescimento pessoal e emocional.
                                    </Card.Text>
                                    <Button variant="primary" href='https://www.instagram.com/p/Ch8U5oFsFO9/?igshid=YjgzMjc4YjcwZQ=='>Ler mais</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className='justify-content-center mt-4 pb-5'>
                        <Col data-aos="fade-out" data-aos-duration="1000" data-aos-delay="1350" className={styles.postsItem} lg={3} md={4} sm={8}>
                            <Card>
                                <Card.Img className={styles.cardImage} variant="top" src={talk} />
                                <Card.Body>
                                    <Card.Title>Ouvindo os Sinais do Corpo: Reconectando-se com a Saúde Plena</Card.Title>
                                    <Card.Text>
                                        Trazendo consciência para a conexão mente-corpo: a importância de ouvir os sinais do seu corpo para uma saúde plena. Como as dores e doenças podem estar relacionadas ao estado emocional.
                                    </Card.Text>
                                    <Button href='https://www.instagram.com/p/ChOOXMJsRTB/?igshid=YjgzMjc4YjcwZQ==' variant="primary">Ler mais</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col data-aos="fade-out" data-aos-duration="1000" data-aos-delay="1650" className={styles.postsItem} lg={3} md={4} sm={8}>
                            <Card>
                                <Card.Img className={styles.cardImage} variant="top" src={mother} />
                                <Card.Body>
                                    <Card.Title>Desromantizando a Maternidade: Revelando Verdades e Libertando as Mulheres</Card.Title>
                                    <Card.Text>
                                        Um chamado para desconstruir idealizações e promover a conscientização sobre a realidade da maternidade. Uma jornada de aprendizado, transformação e reencontro com o eu.
                                    </Card.Text>
                                    <Button variant="primary" href='https://www.instagram.com/p/Cg0u4uBs7dM/?igshid=YjgzMjc4YjcwZQ=='>Ler mais</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col data-aos="fade-out" data-aos-duration="1000" data-aos-delay="1950" className={styles.postsItem} lg={3} md={4} sm={8}>
                            <Card>
                                <Card.Img className={styles.cardImage} variant="top" src={ansiedade} />
                                <Card.Body>
                                    <Card.Title>Lidando com a Ansiedade: Descubra o Caminho para o Bem-Estar</Card.Title>
                                    <Card.Text>
                                        Sintomas, Impactos e Caminhos para o Tratamento. Descubra como a psicoterapia pode ajudar a lidar com a ansiedade e viver de forma mais saudável e adaptativa. Marque uma sessão conosco para obter apoio.
                                    </Card.Text>
                                    <Button variant="primary" href='https://www.instagram.com/p/CfruxtTuePG/?igshid=YjgzMjc4YjcwZQ=='>Ler mais</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section >
    )
}

export default Postagens