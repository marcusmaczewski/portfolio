import Image from 'next/image';
import styles from '../styles/page.module.scss'
import dayjs from 'dayjs';

const MyStatus = (props: any) => {


    /* STATES & VARIABLES
    ------------------------------------------------------------------------ */

    

    let likely_status = [
        {
            day: 'Monday',
            daynum: 1,
            times: [
                {
                    from: 6,
                    to: 16,
                    status: 'At work'
                },
                {
                    from: 16,
                    to: 18,
                    status: 'Working out'
                },
                {
                    from: 18,
                    to: 23,
                    status: 'At home'
                },
                {
                    from: 23,
                    to: 6,
                    status: 'Sleeping'
                }
            ],
        },
        {
            day: 'Tuesday',
            daynum: 2,
            times: [
                {
                    from: 6,
                    to: 16,
                    status: 'At work'
                },
                {
                    from: 16,
                    to: 18,
                    status: 'Working out'
                },
                {
                    from: 18,
                    to: 23,
                    status: 'At home'
                },
                {
                    from: 23,
                    to: 6,
                    status: 'Sleeping'
                }
            ],
        },
        {
            day: 'Wednesday',
            daynum: 3,
            times: [
                {
                    from: 6,
                    to: 16,
                    status: 'At work'
                },
                {
                    from: 16,
                    to: 22,
                    status: 'Fun at work'
                },
                {
                    from: 22,
                    to: 23,
                    status: 'At home'
                },
                {
                    from: 23,
                    to: 6,
                    status: 'Sleeping'
                }
            ],
        },
        {
            day: 'Thursday',
            daynum: 4,
            times: [
                {
                    from: 6,
                    to: 16,
                    status: 'At work'
                },
                {
                    from: 16,
                    to: 18,
                    status: 'Working out'
                },
                {
                    from: 18,
                    to: 23,
                    status: 'At home'
                },
                {
                    from: 23,
                    to: 6,
                    status: 'Sleeping'
                }
            ],
        },
        {
            day: 'Friday',
            daynum: 5,
            times: [
                {
                    from: 6,
                    to: 16,
                    status: 'At work'
                },
                {
                    from: 16,
                    to: 18,
                    status: 'Working out'
                },
                {
                    from: 18,
                    to: 23,
                    status: 'At home'
                },
                {
                    from: 23,
                    to: 6,
                    status: 'Sleeping'
                }
            ],
        },
        {
            day: 'Saturday',
            daynum: 6,
            times: [
                {
                    from: 10,
                    to: 22,
                    status: 'Enjoying the day'
                },
                {
                    from: 22,
                    to: 2,
                    status: 'Horror movies'
                },
                {
                    from: 2,
                    to: 10,
                    status: 'Sleeping'
                }
            ],
        },
        {
            day: 'Sunday',
            daynum: 0,
            times: [
                {
                    from: 11,
                    to: 22,
                    status: 'Enjoying the day'
                },
                {
                    from: 22,
                    to: 0,
                    status: 'Off to bed'
                },
                {
                    from: 0,
                    to: 6,
                    status: 'Sleeping'
                }
            ],
        }
    ]


    /* FUNCTIONS
    ------------------------------------------------------------------------ */


    function get_status_from_current_time(){
        
        var now = dayjs();

        var day = now.day();
        var hour = now.hour();

        var current_status = 'Unknown';

        likely_status.forEach(function(day_status){
            if(day_status.daynum == day){
                day_status.times.forEach(function(time_status){
                    if(hour >= time_status.from && hour < time_status.to){
                        current_status = time_status.status;
                    }
                });
            }
        });

        return current_status;

    }


    /* RENDER
    ------------------------------------------------------------------------ */


    return (
        <div className={`${styles.mystatus} ${styles.box}`}>
            <div className={styles.icon}>
                <Image src="/pb.png" alt="My Icon" width={45} height={45} />
            </div>
            <div className={styles.content}>
                <div className={styles.label}>Most likely</div>
                <div className={styles.value}>{ get_status_from_current_time() }</div>
            </div>
        </div>
    );
}
export default MyStatus;