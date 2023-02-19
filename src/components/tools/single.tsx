import Image from 'next/image'
import styles from '../../styles/tools.module.scss'

const SingleTool = (props: any) => {


    /* STATES & VARIABLES
    ------------------------------------------------------------------------ */


    /* FUNCTIONS
    ------------------------------------------------------------------------ */


    /* RENDER
    ------------------------------------------------------------------------ */


    return (
        <div className={styles.single_tool}>
            <div className={styles.tool_icon}>
                <Image src={`/tools/${props.icon}.png`} alt={props.title} width={50} height={50} />
            </div>
            <div className={styles.tool_title}>
                <h3>{props.title}</h3>
            </div>
        </div>
    );
}
export default SingleTool;