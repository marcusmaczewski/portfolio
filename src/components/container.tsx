import styles from '../styles/container.module.scss'

const Container = (props: any) => {


    /* STATES & VARIABLES
    ------------------------------------------------------------------------ */


    /* FUNCTIONS
    ------------------------------------------------------------------------ */


    /* RENDER
    ------------------------------------------------------------------------ */


    return (
        <div className={styles.container}>
            {props.children}
        </div>
    );
}
export default Container;