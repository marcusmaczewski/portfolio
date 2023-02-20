import Container from "../container";
import SectionTitle from "../section-title";
import styles from '../../styles/contact.module.scss'
import SingleContact from "./single";

const ArchiveContact = (props: any) => {


    /* STATES & VARIABLES
    ------------------------------------------------------------------------ */


    /* FUNCTIONS
    ------------------------------------------------------------------------ */


    /* RENDER
    ------------------------------------------------------------------------ */


    return (
        <Container>
            <SectionTitle title="Contact" />
            <div className={styles.contact_list}>
                <SingleContact label="Email" value="marcusm@outlook.dk" />
                <SingleContact label="Discord" value="polak#1234" />
            </div>
        </Container>
    );
}
export default ArchiveContact;