import styles from './Testimonials.module.css'
import Image from 'next/image';


export default function Testimonials({
    description,
    name
}) {
    return (
        <main className={styles.main}>
            <Image src='/stars.png' height={28} width={140} />
            <p>{description}</p>
            <div className={styles.nameContainer}>
            <Image src='/nameRectangle.png' height={5} width={80} />
            <h3>{name}</h3>
            </div>

        </main>
    )
}