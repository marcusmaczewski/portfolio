'use client'
import BackToTop from '@/components/back-to-top'
import ArchiveContact from '@/components/contact/archive'
import ExperienceArchive from '@/components/experience/archive'

import Hero from '@/components/hero'
import MyStatus from '@/components/my-status'
import ArchiveProjects from '@/components/projects/archive'
import ArchiveTools from '@/components/tools/archive'
import YoutubePlayer from '@/components/yt-player'
import { Inter } from '@next/font/google'
import { useEffect } from 'react'
import '../styles/globals.scss'
import styles from '../styles/page.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    useEffect(() => {

        let window_center_y = window.innerHeight / 2;
        let window_center_x = window.innerWidth / 2;

        let cursor_y_pos = 0;
        let cursor_x_pos = 0;

        // Move the BLOB position to where the cursor is, align cursor to center of BLOB
        document.addEventListener('mousemove', (e) => {

            const blob = document.querySelector(`.${styles.blob}`) as HTMLElement;
            // get the width of the circle
            if (document.querySelector(`.${styles.blob}`) === null) return;


            // @ts-ignore
            let circle_width = document.querySelector(`.${styles.blob}`).clientWidth;

            cursor_y_pos = e.clientY - (circle_width / 2);
            cursor_x_pos = e.clientX - (circle_width / 2);

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
