import styles from './Footer.module.css';
import Image from 'next/image';



export default function Footer() {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.logo}>
                    <Image
                        src='/nav_logo.png'
                        alt="Innersight Logo"
                        width={224}
                        height={50} />
                    <h3>©innersight 2023</h3>
                </div>
                <div className={styles.links}>
                    <h3>About</h3>
                    <h3>Cookie Policy</h3>
                    <h3>Privacy Policy</h3>
                    <h3>User Agreement</h3>
                </div>

            </main>
        </>

    )
}

