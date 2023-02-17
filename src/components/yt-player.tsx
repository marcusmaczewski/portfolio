import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/page.module.scss'

const YoutubePlayer = (props: any) => {


    /* STATES & VARIABLES
    ------------------------------------------------------------------------ */

    let song_id = 'N7M36Azy0i0';


    /* FUNCTIONS
    ------------------------------------------------------------------------ */


    /* RENDER
    ------------------------------------------------------------------------ */


    return (
        <div className={`${styles.ytplayer} ${styles.box}`}>
            <Link href={`https://www.youtube.com/watch?v=${song_id}`}>
                <div className={styles.icon}>
                    <Image src="/yt.png" alt="YouTube Icon" width={45} height={45} />
                </div>
            </Link>
            <div className={styles.content}>
                <div className={styles.label}>Currently Playing</div>
                <div className={styles.value}>Alive (feat. The Moth & The Flame)</div>
            </div>
        </div>
    );
}
export default YoutubePlayer;