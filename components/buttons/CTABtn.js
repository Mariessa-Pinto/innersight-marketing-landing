import styles from './Cta.module.css';

export default function CTABtn() {
    return (
        <main className={styles.main}>
            <button type="submit" className={styles.btn}>
                Get Notified
            </button>
        </main>

    )
}