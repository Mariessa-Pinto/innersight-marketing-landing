import CTABtn from '../buttons/CTABtn';
import styles from './Form.module.css';



export default function Form() {
    return (
        <>
            <main className={styles.main}>
                <h3>Start your journey today.</h3>
                <form className={styles.ctaForm}>
                    <div className={styles.nameInput}>
                        <label>Name</label>
                        <input type="text" name="name" placeholder='Enter your name' />
                    </div>
                    <div className={styles.emailInput}>
                        <label>Email</label>
                        <input type="text" name="email" />
                    </div>
                    <div className={styles.agreeInput}>
                        <input type="checkbox" name="agree" />
                        <label className={styles.agreeLabel}>I agree to recieve emails from <i>innersight</i></label>
                    </div>
                    
                    <CTABtn/>

                </form>

            </main>
        </>

    )
}
