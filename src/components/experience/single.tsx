import styles from '../../styles/experience.module.scss'

const SingleExperience = (props: any) => {


    /* STATES & VARIABLES
    ------------------------------------------------------------------------ */

    const year = props.year;
    // split year into two parts
    const year_first = year.substring(0, 2);
    const year_second = year.substring(2, 4);
    


    /* FUNCTIONS
    ------------------------------------------------------------------------ */


    /* RENDER
    ------------------------------------------------------------------------ */


    return (
        <div className={styles.single_experience}>
            <div className={styles.year}>
                <div className={styles.year_wrapper}>
                    <div className={styles.year_num}>
                        <div className={styles.year_num_upper}>{year_first}</div>
                        <div className={styles.year_num_lower}>{year_second}</div>
                    </div>
                    <div className={styles.year_text}>
                        {props.sub_year}
                    </div>
                </div>
            </div>
            <div className={styles.experience}>
                <div className={styles.experience_upper}>
                    <div className={styles.experience_subtitle}>
                        <div className={styles.range}>
                            {props.range}
                        </div>
                        <div className={styles.company}>
                            {props.company}
                        </div>
                    </div>
                    <div className={styles.experience_title}>
                        {props.title}
                    </div>
                </div>
                <div className={styles.experience_lower}>
                    <div className={styles.experience_description}>
                        {props.description}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SingleExperience;