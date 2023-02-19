import SectionTitle from "../section-title";
import SingleProject from "./single";
import styles from '../../styles/archive_projects.module.scss'
import Container from "../container";

const ArchiveProjects = (props: any) => {


    /* STATES & VARIABLES
    ------------------------------------------------------------------------ */


    /* FUNCTIONS
    ------------------------------------------------------------------------ */


    /* RENDER
    ------------------------------------------------------------------------ */


    return (
        <Container>
            <SectionTitle title="Projects" subtitle="A picked selection of cases I've been a part of." />
            <div className={styles.archive_list}>
                <SingleProject title="Esportligaen.dk" content="Design & Development" customer="esportligaen"/>
                <SingleProject title="Esportligaen.dk" content="Design & Development" customer="esportligaen"/>
                <SingleProject title="Esportligaen.dk" content="Design & Development" customer="esportligaen"/>
                <SingleProject title="Esportligaen.dk" content="Design & Development" customer="esportligaen"/>
            </div>
        </Container>
    );
}
export default ArchiveProjects;