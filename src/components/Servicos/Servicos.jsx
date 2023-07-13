import { Container, Row, Col } from 'react-bootstrap';
import styles from './index.module.scss'
import { useState } from 'react';
import clsx from 'clsx/dist/clsx.m';
import { GiPunch, GiPrisoner, GiAges, GiDuality, GiHandcuffs, GiShakingHands, GiSherlockHolmes, GiPapers, GiMagnifyingGlass, GiMedicalPack, GiHearts, GiHouse, GiPc, GiLovers, GiWorld } from 'react-icons/gi'

const Servicos = () => {

    const [psicoterapiaAtivo, setPsicoterapiaAtivo] = useState(true)

    const trocaParaPsicoterapia = () => {
        setPsicoterapiaAtivo(true)
    }

    const trocaParaForense = () => {
        setPsicoterapiaAtivo(false)
    }

    return (
        <>
            <section id='servicos' className={styles.s_servicos}>
                <Container>
                    <div className={styles.header}>
                        <h2 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" className={styles.title}>Serviços ofertados</h2>
                        <nav data-aos="fade-right" data-aos-duration="1000" data-aos-delay="50" className={styles.tabs}>
                            <button onClick={trocaParaPsicoterapia} className={clsx(styles.tabs__button, `${psicoterapiaAtivo ? styles.tabs__buttonIsActive : ""}`)}>
                                Psicoterapia
                            </button>
                            <button onClick={trocaParaForense} className={clsx(styles.tabs__button, `${!psicoterapiaAtivo ? styles.tabs__buttonIsActive : ""}`, styles.tabs__button_forense)}>
                                Psicologia Forense
                            </button>
                        </nav>
                    </div>

                    <div className="psicoterapia">
                        <Row id='psicoterapia' className={clsx(styles.list__psicoterapia, 'text-center mt-5 ps-5 pe-5')} hidden={!psicoterapiaAtivo}>
                            <Col>
                                <Row data-aos="fade-out" data-aos-duration="1000" data-aos-delay="50" className={clsx(styles.itemDiv)}>
                                    <Col xl={3} md={2}>
                                        <GiLovers size={"3.125rem"} className={styles.itemDiv__icon} color='black' />
                                    </Col>
                                    <Col className='text-start m-auto' lg={9}>
                                        <span>TERAPIA DE CASAL</span>
                                    </Col>
                                </Row>
                                <Row data-aos="fade-out" data-aos-duration="1000" data-aos-delay="950" className={clsx(styles.itemDiv)}>
                                    <Col xl={3} md={2}>
                                        <GiMedicalPack size={"3.125rem"} className={styles.itemDiv__icon} color='black' />
                                    </Col>
                                    <Col className='text-start m-auto' lg={9}>
                                        <span>ATENDIMENTO EMERG. RESIDENCIAL</span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row data-aos="fade-out" data-aos-duration="1000" data-aos-delay="350" className={clsx(styles.itemDiv)}>
                                    <Col xl={3} md={2}>
                                        <GiPc size={"3.125rem"} className={styles.itemDiv__icon} color='black' />
                                    </Col>
                                    <Col className='text-start m-auto' lg={9}>
                                        <span>TERAPIA ONLINE</span>
                                    </Col>
                                </Row>
                                <Row data-aos="fade-out" data-aos-duration="1000" data-aos-delay="1250" className={clsx(styles.itemDiv)}>
                                    <Col xl={3} md={2}>
                                        <GiHouse size={"3.125rem"} className={styles.itemDiv__icon} color='black' />
                                    </Col>
                                    <Col className='text-start m-auto' lg={9}>
                                        <span>ATENDIMENTO PSICOLÓGICO EM CASA</span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row data-aos="fade-out" data-aos-duration="1000" data-aos-delay="650" className={clsx(styles.itemDiv)}>
                                    <Col xl={3} md={2}>
                                        <GiHearts size={"3.125rem"} className={styles.itemDiv__icon} color='black' />
                                    </Col>
                                    <Col className='text-start m-auto' lg={9}>
                                        <span>TERAPIA PARA ADOLESCENTES</span>
                                    </Col>
                                </Row>
                                <Row data-aos="fade-out" data-aos-duration="1000" data-aos-delay="1550" className={clsx(styles.itemDiv)}>
                                    <Col xl={3} md={2}>
                                        <GiWorld size={"3.125rem"} className={styles.itemDiv__icon} color='black' />
                                    </Col>
                                    <Col className='text-start m-auto' lg={9}>
                                        <span>ATENDIMENTO P/PESSOAS NO EXTERIOR</span>
                                    </Col>
                                </Row>
                            </Col>
                            {/* FIM DOS SERVICOS PSICOTERAPIA */}

                            {/* Tratamentos Individuais PSICOTERAPIA */}

                            <h2 data-aos="fade-out" data-aos-duration="1000" data-aos-delay="1850" className={clsx(styles.title, 'mt-2 mb-3', styles.tratamentosInd)}>Tratamentos individuais</h2>
                            <Col data-aos="fade-out" data-aos-duration="1000" data-aos-delay="2150">
                                <Row className={clsx(styles.itemDiv)}>
                                    <Col>
                                        <span>STRESS PÓS-TRAUMÁTICO</span>
                                    </Col>
                                </Row>
                                <Row className={clsx(styles.itemDiv)}>
                                    <Col>
                                        <span>RECUPERAÇÃO PÓS-DIVÓRCIO</span>
                                    </Col>
                                </Row>
                                <Row className={clsx(styles.itemDiv)}>
                                    <Col>
                                        <span>TOC, OBSESSIVO COMPULSIVO, BIPOLARIDADE, ETC</span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col data-aos="fade-out" data-aos-duration="1000" data-aos-delay="2450">
                                <Row className={clsx(styles.itemDiv)}>
                                    <Col>
                                        <span>ANSIEDADE</span>
                                    </Col>
                                </Row>
                                <Row className={clsx(styles.itemDiv)}>
                                    <Col>
                                        <span>ATENDIMENTO PERINATAL</span>
                                    </Col>
                                </Row>
                                <Row className={clsx(styles.itemDiv)}>
                                    <Col>
                                        <span>TDAH (TRANSTORNO DO DÉFICIT DE ATENÇÃO COM HIPERATIVIDADE)</span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col data-aos="fade-out" data-aos-duration="1000" data-aos-delay="2750">
                                <Row className={clsx(styles.itemDiv)}>
                                    <Col>
                                        <span>DEPRESSÃO</span>
                                    </Col>
                                </Row>
                                <Row className={clsx(styles.itemDiv)}>
                                    <Col>
                                        <span>TANATOLOGIA</span>
                                    </Col>
                                </Row>
                                <Row className={clsx(styles.itemDiv)}>
                                    <Col>
                                        <span>ANOREXIA NERVOSA E OUTROS TRANSTORNOS ALIMENTARES</span>
                                    </Col>
                                </Row>
                            </Col>
                            {/* FIM DOS TRATAMENTOS INDIVIDUAIS PSICOTERAPIA */}
                        </Row>
                        {/* FIM SERVICOS PSICOTERAPIA AO TODO (SERVICOS E INDIVIDUAIS) */}
                    </div>

                    <div className="forense">
                        <Row id='forense' className={clsx(styles.list__psicoterapia, 'text-center mt-5 ps-5 pe-5')} hidden={psicoterapiaAtivo}>
                            <Col>
                                <Row className={clsx(styles.itemDiv)}>
                                    <Col lg={3} md={4}>
                                        <GiPunch size={"3.125rem"} className={styles.itemDiv__icon} color='black' />
                                    </Col>
                                    <Col className='text-start m-auto'>
                                        <span>VIOLÊNCIA DE GÊNERO</span>
                                    </Col>
                                </Row>
                                <Row className={clsx(styles.itemDiv)}>
                                    <Col lg={3} md={4}>
                                        <GiPrisoner size={"3.125rem"} className={styles.itemDiv__icon} color='black' />
                                    </Col>
                                    <Col className='text-start m-auto'>
                                        <span>VIOLÊNCIA SEXUAL</span>
                                    </Col>
                                </Row>
                                <Row className={clsx(styles.itemDiv)}>
                                    <Col lg={3} md={4}>
                                        <GiAges size={"3.125rem"} className={styles.itemDiv__icon} color='black' />
                                    </Col>
                                    <Col className='text-start m-auto'>
                                        <span>FALSA ACUSAÇÃO DE VIOLÊNCIA SEXUAL</span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row className={clsx(styles.itemDiv)}>
                                    <Col lg={3} md={4}>
                                        <GiDuality size={"3.125rem"} className={styles.itemDiv__icon} color='black' />
                                    </Col>
                                    <Col className='text-start m-auto'>
                                        <span>ALIENAÇÃO PARENTAL</span>
                                    </Col>
                                </Row>
                                <Row className={clsx(styles.itemDiv)}>
                                    <Col lg={3} md={4}>
                                        <GiHandcuffs size={"3.125rem"} className={styles.itemDiv__icon} color='black' />
                                    </Col>
                                    <Col className='text-start m-auto'>
                                        <span>CRIME PASSIONAL</span>
                                    </Col>
                                </Row>
                                <Row className={clsx(styles.itemDiv)}>
                                    <Col lg={3} md={4}>
                                        <GiShakingHands size={"3.125rem"} className={styles.itemDiv__icon} color='black' />
                                    </Col>
                                    <Col className='text-start m-auto'>
                                        <span>ADOÇÃO</span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Row className={clsx(styles.itemDiv)}>
                                    <Col lg={3} md={4}>
                                        <GiSherlockHolmes size={"3.125rem"} className={styles.itemDiv__icon} color='black' />
                                    </Col>
                                    <Col className='text-start m-auto'>
                                        <span>PERÍCIA TÉCNICA</span>
                                    </Col>
                                </Row>
                                <Row className={clsx(styles.itemDiv)}>
                                    <Col lg={3} md={4}>
                                        <GiPapers size={"3.125rem"} className={styles.itemDiv__icon} color='black' />
                                    </Col>
                                    <Col className='text-start m-auto'>
                                        <span>LAUDO PSICOLÓGICO</span>
                                    </Col>
                                </Row>
                                <Row className={clsx(styles.itemDiv)}>
                                    <Col lg={3} md={4}>
                                        <GiMagnifyingGlass size={"3.125rem"} className={styles.itemDiv__icon} color='black' />
                                    </Col>
                                    <Col className='text-start m-auto'>
                                        <span>PERÍCIA PSICOLÓGICA</span>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section >
        </>
    )
}

export default Servicos