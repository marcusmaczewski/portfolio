'use client'
import BackToTop from '@/components/back-to-top'
import ArchiveContact from '@/components/contact/archive'
import ExperienceArchive from '@/components/experience/archive'

import Hero from '@/components/hero'
import MyStatus from '@/components/my-status'
import ArchiveProjects from '@/components/projects/archive'
import ArchiveTools from '@/components/tools/archive'
import YoutubePlayer from '@/components/yt-player'
import { Raleway } from '@next/font/google'
import { useEffect, useState } from 'react'
import '../styles/globals.scss'
import styles from '../styles/page.module.scss'

const inter = Raleway({ subsets: ['latin'] })

export default function Home() {

    const [yPos , setYPos] = useState<number>(0);
    const [xPos , setXPos] = useState<number>(0);
    

    useEffect(() => {

        let cursor_y_pos = yPos;
        let cursor_x_pos = xPos;
        

        // Move the BLOB position to where the cursor is, align cursor to center of BLOB
        document.addEventListener('mousemove', (e) => {

            const blob = document.querySelector(`.${styles.blob}`) as HTMLElement;
            // get the width of the circle
            if (document.querySelector(`.${styles.blob}`) === null) return;


            // @ts-ignore
            let circle_width = document.querySelector(`.${styles.blob}`).clientWidth;

            cursor_y_pos = e.clientY - (circle_width / 2);
            cursor_x_pos = e.clientX - (circle_width / 2);

            // Save last position
            setYPos(cursor_y_pos);
            setXPos(cursor_x_pos);


            blob.animate({
                left: [cursor_x_pos + 'px'],
                top: [cursor_y_pos + 'px']

            }, {
                duration: 2000,
            })

        });
        
        
    }, [])



  return (
    <main className={`${styles.main} ${inter.className}`}>
      <div className={styles.blob}></div>
      <div className={styles.blur}></div>
      <div className={styles.alwaystop}>
        <YoutubePlayer />
        <MyStatus />
        <BackToTop />
      </div>
        <Hero />
        <ArchiveProjects />
        <ArchiveTools />
        <ExperienceArchive />
        <ArchiveContact />
    </main>
  )
}
