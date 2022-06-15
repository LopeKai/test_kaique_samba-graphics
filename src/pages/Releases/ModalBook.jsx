import Modal from 'react-modal'

import { books } from '../../Data/books'

import imageBook from '../../images/image_book.png'
import {MdOutlineDriveFileRenameOutline} from 'react-icons/md'
import {BsVectorPen} from 'react-icons/bs'
import {BiFolderOpen} from 'react-icons/bi'
import {BiMessageAltCheck} from 'react-icons/bi'
import {BiMessageAltDetail} from 'react-icons/bi'
import {AiFillStar} from 'react-icons/ai'
import {MdPriceCheck} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'

import styles from './styles.module.scss'

export function ModalBook({ id, isOpen, onRequesteClose, expander }) {
    const book = books.find(item => item.id === parseInt(id))
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequesteClose}
            overlayClassName="react_modal_overlay"
            className={styles.modal}
        >
            <div className={styles.expander__card} key={id} >
                <div className={styles.expander__content}>
                    <div className={styles.details}>
                        <div className={styles.details__container}>
                            <img src={imageBook} alt="" />
                            <div className={styles.data}>
                                <div>
                                    <BsVectorPen/>
                                    <p>Name: <span>{book.name}</span></p>
                                    
                                </div>
                                <div>
                                    <MdOutlineDriveFileRenameOutline/>
                                    <p>Author: <span>{book.author}</span></p>
                                </div>
                                <div>
                                    <BiFolderOpen/>
                                    <p>Categoria: <span>{book.category}</span></p>
                                </div>
                                <div>
                                    <BiMessageAltCheck/>
                                    <p>Idade: <span>{book.age}</span></p>
                                </div>
                                <div>
                                    <BiMessageAltDetail/>
                                    <p>Ano do lançamento: <span>{book.year}</span></p>
                                </div>
                                <div>
                                    <AiFillStar/>
                                    <p>Estrelas: <span>{book.star}</span></p>
                                </div>
                                <div>
                                    <MdPriceCheck/>
                                    <p>Preço: <span> R$ {book.price}</span></p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className={styles.description}>
                        <div className={styles.description__container}>
                            <button className={styles.close} onClick={expander}>
                                <AiFillCloseCircle />
                            </button>

                            <h1 className={styles.title}>{book.title}</h1>

                            <div className={styles.text}>
                                <p>{book.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}