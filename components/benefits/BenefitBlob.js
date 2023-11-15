import styles from './Benefit.module.css'
import Image from 'next/image';



export default function BenefitBlob({
    header,
    imgSrc,
    description
}) {
    return (
        <>
            <main className={styles.main}>
                <Image src='/benefitBlob.png'  width={383}
                        height={553} />
                <div className={styles.content}>
                    <h3>{header}</h3>
                    <Image src={imgSrc} alt="image" className={styles.benefitImg} width={50} height={50} />
                    <p>{description}</p>

                </div>
            </main>
        </>

    )
}