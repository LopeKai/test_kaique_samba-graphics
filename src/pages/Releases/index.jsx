import { books } from '../../Data/books'
import { Card } from '../../components/Card'

import styles from './styles.module.scss'

export function Releases() {
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
                                books.map((book) => {
                                    return (
                                        <Card 
                                            name={book.name}
                                            author={book.author}
                                            description={book.description}
                                            year={book.year}
                                            price={book.price}
                                            category={book.category}
                                            star={book.star}
                                            comment={book.comment}
                                            age={book.age}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}