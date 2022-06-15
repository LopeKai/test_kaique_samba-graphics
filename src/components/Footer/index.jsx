import { Link } from 'react-router-dom'

import {IoMdSend} from 'react-icons/io' 

import imgLogo from '../../images/Group1.svg'
import iconTwitter from '../../images/icon_social-network/twitter.svg'
import iconInstagram from '../../images/icon_social-network/instagram.svg'
import iconFacebook from '../../images/icon_social-network/facebook.svg'
import imageAppStore from '../../images/stores/app-store.png'
import imageGooglePlay from '../../images/stores/google-play.png'

import styles from './styles.module.scss'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <div className={styles.row}>
                    <img className={styles.imgLogo} src={imgLogo} alt="" />
                    <div className={styles.navegation}>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="">Home</Link>
                                </li>
                                <li>
                                    <Link to="">Gêneros</Link>
                                </li>
                                <li>
                                    <Link to="">Favoritos</Link>
                                </li>
                                <li>
                                    <Link to="">Perfil</Link>
                                </li>
                                <li>
                                    <Link to="">Termos de uso</Link>
                                </li>
                                <li>
                                    <Link to="">Política de privacidade</Link>
                                </li>
                                <li>
                                    <Link to="">Quem somos</Link>
                                </li>
                                <li>
                                    <Link to="">Enviar HQ</Link>
                                </li>
                            </ul>
                        </nav>

                        <div className={styles.social_network}>
                            <div>
                                <p>Siga-nos nas redes sociais</p>
                                <nav>
                                    <ul>
                                        <li>
                                            <a href="https://twitter.com/login?lang=pt" target="_blank">
                                                <img src={iconTwitter} alt="Twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <img src={iconInstagram} alt="Facebook" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://web.facebook.com/" target="_blank">
                                                <img src={iconFacebook} alt="Instagram" />
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                                <div className={styles.input}>
                                    <p>Assine a nossa Newsletter</p>
                                    <div className={styles.input_container}>
                                        <input type="text" />
                                        <button>
                                            <IoMdSend />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.stores}>
                            <p>Baixe o App</p>
                            <ul>
                                <li>
                                    <a href="https://www.apple.com/store" target="_blank">
                                        <img src={imageAppStore} alt="App store"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://play.google.com/store/apps?hl=pt&utm_source=latam_Med&utm_medium=hasem&utm_content=Jul1520&utm_campaign=Evergreen&pcampaignid=MKT-FDR-latam-br-1002290-Med-hasem-ap-Evergreen-Jul1520-Text_Search_SKWS-53972587&gclid=Cj0KCQjwhqaVBhCxARIsAHK1tiNhfbazq2XuGKvUeda4MYp9lM2cc7ARNUBvBRl980Bvf9ReotstWi4aAt6LEALw_wcB&gclsrc=aw.ds" target="_blank">
                                        <img src={imageGooglePlay} alt="Google play"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
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