import Image from 'next/image';
import styles from '../../styles/archive_projects.module.scss'

const SingleProject = (props: any) => {


    /* STATES & VARIABLES
    ------------------------------------------------------------------------ */


    /* FUNCTIONS
    ------------------------------------------------------------------------ */


    /* RENDER
    ------------------------------------------------------------------------ */


    return (
        <div className={styles.single_project}>
            <div className={styles.inner}>
                <div className={styles.logo}>
                    <img src={`/cases/${props.customer}/logo.png`} alt={props.customer} />
                </div>
                <div className={styles.content}>
                    <h3>{props.title}</h3>
                    <p>{props.content}</p>
                </div>
            </div>
        </div>
    );
}
export default SingleProject;