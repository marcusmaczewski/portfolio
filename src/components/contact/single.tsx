import styles from '../../styles/contact.module.scss'

const SingleContact = (props: any) => {


    /* STATES & VARIABLES
    ------------------------------------------------------------------------ */


    /* FUNCTIONS
    ------------------------------------------------------------------------ */


    /* RENDER
    ------------------------------------------------------------------------ */


    return (
        <>
            <div className={styles.single_contact}>
                <div className={styles.label}>
                    {props.label}
                </div>
                <div className={styles.value}>
                    <input type="text" value={props.value} readOnly />
                </div>
            </div>
        </>
    );
}
export default SingleContact;