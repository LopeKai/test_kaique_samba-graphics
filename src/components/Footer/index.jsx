import imgLogo from '../../images/Group1.svg'

import styles from './styles.module.scss'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <div className={styles.row}>
                    <img src={imgLogo} alt="" />
                    <div className={styles.navegation}>
                        <nav>
                            <ul>
                                <li>
                                    <a href="#"></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <div className={styles.row}>
                    <p>Termos e aviso de privacidade. Envie-nos seu feedback. Ajuda. © 2022, Samba Graphics</p>
                </div>
            </div>
        </footer>
    )
}