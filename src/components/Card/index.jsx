import imgCapa from '../../images/image_book.png'
import imgStar from '../../images/icon-star.svg'
import imgEllipse from '../../images/ellipse.svg'
import imgAdd from '../../images/icon-add.png'
import imgClose from '../../images/icon-close.svg'
import imgComment from '../../images/icon-comment.svg'
import imgAge from '../../images/icon-age.svg'

import styles from './styles.module.scss'

export function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.card__container}>
                <div className={styles.img__container}>
                    <img src={imgCapa} alt="Image Book" />
                </div>
                <div className={styles.category__container}>
                    <div className={styles.star}>
                        <img src={imgStar} alt="star" />
                        <p>
                            {props.star}
                        </p>
                    </div>
                    <div className={styles.nameCategory}>
                        <img src={imgEllipse} alt="" />
                        <p>{props.category}</p>
                    </div>
                </div>
                <div className={styles.description}>
                    <div className={styles.description_name}>
                        <div>
                            <h2>{props.name}</h2>
                            <p>{props.author}</p>
                        </div>
                        <div>
                            <img src={imgAdd} alt="Add" />
                            <img src={imgClose} alt="Close" />
                        </div>
                    </div>
                    <div className={styles.description_text}>
                        <p>
                            {props.description}
                        </p>
                    </div>
                </div>
                <div className={styles.book_details}>
                    <p className={styles.year}>{props.year}</p>
                    <div>
                        <img src={imgComment} alt="Comment" />
                        <p>{props.comment}</p>
                    </div>
                    <div>
                        <img src={imgAge} alt="Age" />
                        <span>{props.age}</span>
                    </div>
                </div>
                <div className={styles.readNow}>
                    <button >
                        Leia Agora
                    </button>
                    <div className={styles.price}>
                       <p>R$ {props.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}