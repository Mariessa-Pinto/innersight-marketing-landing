import styles from './Benefit.module.css'
import Image from 'next/image';



export default function BenefitBlob({
    header,
    imgSrc,
    description,
    key
}) {
    return (
        <>
            <main className={styles.main}>
                {
                    header === "Discover the Benefit\nof AI Insights" ?
                        <Image src='/benefitBlob_flip.png'
                            width={383}
                            height={553} />
                        :
                        <Image src='/benefitBlob.png'
                            width={383}
                            height={553} />
                }

                <div className={styles.content}>
                    <h3>{header}</h3>
                    <Image src={imgSrc} alt="image" className={styles.benefitImg} width={150} height={150} />
                    <p>{description}</p>

                </div>
            </main>
        </>

    )
}