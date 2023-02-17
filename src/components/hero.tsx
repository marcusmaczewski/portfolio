import styles from '../styles/page.module.scss'

const Hero = (props: any) => {


    /* STATES & VARIABLES
    ------------------------------------------------------------------------ */


    /* FUNCTIONS
    ------------------------------------------------------------------------ */


    /* RENDER
    ------------------------------------------------------------------------ */


    return (
        <div className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.upper}>
                        <h1>ZEWSK</h1>
                        <h2>Developer in Copenhagen, Denmark.</h2>
                    </div>
                    <div className={styles.middle}>
                        Facebook twitter instagram
                    </div>
                    <div className={styles.lower}>
                        Scroll down
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Hero;