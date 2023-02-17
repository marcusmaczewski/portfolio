import Image from 'next/image';
import styles from '../styles/page.module.scss'

const MyStatus = (props: any) => {


    /* STATES & VARIABLES
    ------------------------------------------------------------------------ */


    /* FUNCTIONS
    ------------------------------------------------------------------------ */


    /* RENDER
    ------------------------------------------------------------------------ */


    return (
        <div className={`${styles.mystatus} ${styles.box}`}>
            <div className={styles.icon}>
                <Image src="/me.png" alt="My Icon" width={45} height={45} />
            </div>
            <div className={styles.content}>
                <div className={styles.label}>Most likely</div>
                <div className={styles.value}>At work</div>
            </div>
        </div>
    );
}
export default MyStatus;