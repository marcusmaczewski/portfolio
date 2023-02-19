import Container from "../container";
import SectionTitle from "../section-title";
import styles from '../../styles/experience.module.scss'
import SingleExperience from "./single";

const ExperienceArchive = (props: any) => {


    /* STATES & VARIABLES
    ------------------------------------------------------------------------ */


    /* FUNCTIONS
    ------------------------------------------------------------------------ */


    /* RENDER
    ------------------------------------------------------------------------ */


    return (
        <Container>
            <SectionTitle title="Experience" />
            <div className={styles.experience_list}>
                <SingleExperience year="2018" sub_year="Employed" range="2018 - NOW" company="dreamlike.dk" title="Frontend & Backend Developer" description="I am a freelance web developer. I have been working on various projects for clients." />
                <SingleExperience year="2022" sub_year="Graduated" range="2017 - 2022 (5,5 years total)" company="tec.dk" title="Computer Engineer" description="I am a freelance web developer. I have been working on various projects for clients." />
            </div>
        </Container>
    );
}
export default ExperienceArchive;