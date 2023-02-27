'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../styles/page.module.scss'
import axios from 'axios';

const YoutubePlayer = (props: any) => {


    /* STATES & VARIABLES
    ------------------------------------------------------------------------ */

    const [isLoading, setIsLoading] = useState(false);
    const [isListening, setIsListening] = useState(true);

    let song_id = 'N7M36Azy0i0';


    /* FUNCTIONS
    ------------------------------------------------------------------------ */

    useEffect(() => {

        // Send axios to fetch recent or current song
        // axios.get('/api/yt/getCurrentSong').then((res) => {
        //     console.log(res.data);
        //     song_id = res.data;
        // }).catch((err) => {
        //     console.log(err);
        // });

    }, []);


    /* RENDER
    ------------------------------------------------------------------------ */


    return (
        
        isListening ? (

            <div className={`${styles.ytplayer} ${styles.box}`}>
                <Link href={`https://music.youtube.com/watch?v=6CHs4x2uqcQ&feature=share`} target="_blank">
                    <div className={`${styles.icon} ${isLoading ? styles.loading : ''}`}>
                        <Image src="/yt.png" alt="YouTube Icon" width={45} height={45} />
                    </div>
                </Link>
                <div className={styles.content}>
                    <div className={styles.label}>Current Favorite</div>
                    <div className={styles.value}>Good Morning (by Kanye West)</div>
                </div>
            </div>

        ) : null
        
    );
}
export default YoutubePlayer;