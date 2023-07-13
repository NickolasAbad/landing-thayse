import clsx from "clsx/dist/clsx.m"
import { Container } from "react-bootstrap"
import styles from './index.module.scss'

const Footer = () => {
    return (

        <footer className={styles.footer}>
            <Container>
                <div className="d-flex justify-content-between py-2">
                    <small className={clsx("py - 4")}>
                        Todos os Direitos Reservados &copy; 2023 Thayse Labanca
                    </small>
                    <small>Desenvolvido por Nickolas Abad ❤️ |
                        <a href="https://linkedin.com/in/nickolas-desenvolvedor" className="ms-1 text-decoration-none">LinkedIn</a>  &
                        <a href="https://github.com/NickolasAbad" className="ms-1 text-decoration-none">GitHub</a></small>
                </div>
            </Container>
        </footer >
    )
}

export default Footer