'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../styles/page.module.scss'

const BackToTop = (props: any) => {


    /* STATES & VARIABLES
    ------------------------------------------------------------------------ */

    const [show, setShow] = useState<boolean>(false);


    /* FUNCTIONS
    ------------------------------------------------------------------------ */

    useEffect(() => {

        // Show only if scrolled down
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                setShow(true);
            } else {
                setShow(false);
            }
        });

    }, []);


    /* RENDER
    ------------------------------------------------------------------------ */


    return (
        <div className={`${styles.backtotop} ${styles.box} ${show ? styles.show : ''}`} onClick={() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }}>
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