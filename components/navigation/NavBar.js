import styles from './Nav.module.css';
import Image from 'next/image';

export default function NavBar() {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.logoImg}>
                    <Image
                        src='/nav_logo.png'
                        alt="Innersight Logo"
                        width={380}
                        height={85}
                        className={styles.logo} />
                </div>
            </main>
        </>

    )
}

