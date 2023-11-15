import styles from './Nav.module.css';
import Image from 'next/image';
import logoImg from '../../assets/nav_logo.png'


export default function NavBar() {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.logoImg}>
                    <Image
                        src={logoImg}
                        alt="Innersight Logo" />
                </div>

            </main>
        </>

    )
}

