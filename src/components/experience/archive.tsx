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
                <SingleExperience year="2018" sub_year="Employed" range="2018 - NOW" company="dreamlike.dk" title="Frontend & Backend Developer" description="Currently employed by Dreamlike where I do multiple roles. Have been here since 2018 where I started and internship that then evolved into an employment after I finished my education. I work with frontend, backend and design at Dreamlike. I like the responsibility and the freedom I have here. The primary stuff we work with here are WordPress and or custom projects." />
                <SingleExperience year="2022" sub_year="Graduated" range="2017 - 2022 (5,5 years total)" company="tec.dk" title="Computer Engineer" description="Started studying computer engineering after finishing 10th grade. I've always been interested in computers and technology and this was a natural choice for me." />
            </div>
        </Container>
    );
}
export default ExperienceArchive;