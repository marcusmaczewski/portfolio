import Image from 'next/image';
import Link from 'next/link';
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
                        <Link href="https://github.com/marcusmaczewski" target="_blank">
                            <div className={styles.someitem}>
                                <Image src="/icons/github.svg" alt="Github" width={32} height={32} />
                            </div>
                        </Link>
                        <Link href="https://steamcommunity.com/profiles/76561198120440666" target="_blank">
                            <div className={styles.someitem}>
                                <Image src="/icons/steam.svg" alt="Steam" width={32} height={32} />
                            </div>
                        </Link>
                        <Link href="https://www.instagram.com/marcusmaczewski/" target="_blank">
                            <div className={styles.someitem}>
                                <Image src="/icons/instagram.svg" alt="Instagram" width={32} height={32} />
                            </div>
                        </Link>
                    </div>
                    <div className={styles.lower}>
                        <div className={styles.scrolldown}>
                            DOWN
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Hero;