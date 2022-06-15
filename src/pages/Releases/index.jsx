import {useState} from 'react'

import { books } from '../../Data/books'
import { Card } from '../../components/Card'

import { ModalBook } from './ModalBook'

import styles from './styles.module.scss'

export function Releases() {
    const [expand, setExpand] = useState(false)
    const [layoutId, setLayoutId] = useState(0)
    const [isNewModalOpen, setIsNewModalOpen] = useState(false)
    
    function handleOpenModal() {
        setIsNewModalOpen(true)
    }

    function handleCloseModal() {
        setIsNewModalOpen(false)
    }

    const expander = (id) => {
        if(expand !== true) {
            setLayoutId(id)
            setExpand(true)
        } else {
            setExpand(false)
            setLayoutId(null)
        }

        return handleOpenModal()
    }

    return (
        <div className={styles.releases}>
            <div className={styles.releases__container}>
                <div className={styles.title}>
                    <h1>Lançamentos</h1>
                </div>
                <div className={styles.films}>
                    <div className={styles.films__container}>
                        <div className={styles.cards}>
                            {
                                books.map((book,index) => {
                                    return (
                                        <Card 
                                            key={index}
                                            name={book.name}
                                            author={book.author}
                                            description={book.description}
                                            year={book.year}
                                            price={book.price}
                                            category={book.category}
                                            star={book.star}
                                            comment={book.comment}
                                            age={book.age}
                                            expander={expander}
                                            id={book.id}
                                        />
                                    )
                                })
                            }
                        </div>
                        {   
                            expand &&
                            <ModalBook 
                                expander={expander}
                                id={layoutId}
                                isOpen={isNewModalOpen}
                                onRequesteClose={handleCloseModal}
                            />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}