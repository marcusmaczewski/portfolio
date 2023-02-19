import styles from '../styles/section.module.scss'

const SectionTitle = (props: any) => {


    /* STATES & VARIABLES
    ------------------------------------------------------------------------ */


    /* FUNCTIONS
    ------------------------------------------------------------------------ */


    /* RENDER
    ------------------------------------------------------------------------ */


    return (
        <div className={styles.section_title}>
            <div className={styles.upper}>
                <h2>{props.title}</h2>
                <div className={styles.line}></div>
            </div>
            <div className={styles.lower}>
                <p>{props.subtitle}</p>
            </div>
        </div>
    );
}
export default SectionTitle;