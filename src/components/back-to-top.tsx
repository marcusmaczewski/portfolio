import Image from 'next/image';
import styles from '../styles/page.module.scss'

const BackToTop = (props: any) => {


    /* STATES & VARIABLES
    ------------------------------------------------------------------------ */


    /* FUNCTIONS
    ------------------------------------------------------------------------ */


    /* RENDER
    ------------------------------------------------------------------------ */


    return (
        <div className={`${styles.backtotop} ${styles.box}`}>
            <div className={styles.icon}>
                <Image src="/top.png" alt="Arrow up icon" width={45} height={45} />
            </div>
            <div className={styles.content}>
                <div className={styles.label}>Seen it all?</div>
                <div className={styles.value}>Back to top</div>
            </div>
        </div>
    );
}
export default BackToTop;