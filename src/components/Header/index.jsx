import {useState} from 'react'

import Logo from '../../images/Group3.svg'
import { FiSearch } from 'react-icons/fi'

import styles from './styles.module.scss'

export function Header() {

    const [active, setActive] = useState(false)

    function buttonToggle() {
        setActive(!active)
    }

    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.logotipo}>
                    <img src={Logo} alt="" />
                </div>

                <div className={active ? 'hamburguer active' : 'hamburguer notActive'} onClick={buttonToggle}></div>

                <div className={active ? styles.navegation__container : styles.navegation__container_notActive}>
                    <nav>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Gêneros</a>
                            </li><li>
                                <a href="#">Alterar idioma</a>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.buttons__container}>
                        <button>Criar Conta</button>
                        <button>Login</button>
                    </div>
                </div>

                <div className={styles.input__container}>
                    <input type="text" />
                    <button type="submit">
                        <FiSearch />
                    </button>
                </div>
            </div>
        </header>
    )
}