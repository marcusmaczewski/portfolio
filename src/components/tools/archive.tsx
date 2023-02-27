import Container from "../container";
import SectionTitle from "../section-title";
import styles from '../../styles/tools.module.scss'
import SingleTool from "./single";

const ArchiveTools = (props: any) => {


    /* STATES & VARIABLES
    ------------------------------------------------------------------------ */


    /* FUNCTIONS
    ------------------------------------------------------------------------ */


    /* RENDER
    ------------------------------------------------------------------------ */


    return (
        <Container>
            <SectionTitle title="Tools & Languages" />
            <div className={styles.tools_list}>
                <SingleTool icon="js" title="Javascript" />
                <SingleTool icon="ts" title="Typescript" />
                <SingleTool icon="php" title="PHP" />
                {/* <SingleTool icon="laravel" title="Laravel" /> */}
                <SingleTool icon="mysql" title="MySQL" />
                <SingleTool icon="nodejs" title="NodeJS" />
                <SingleTool icon="reactjs" title="React" />
                <SingleTool icon="nextjs" title="NextJS" />
                <SingleTool icon="wordpress" title="WordPress" />
                <SingleTool icon="mamppro" title="mamp Pro" />
                <SingleTool icon="adobexd" title="AdobeXD" />
                <SingleTool icon="photoshop" title="Photoshop" />
                <SingleTool icon="cloudflare" title="Cloudflare" />
            </div>
        </Container>
    );
}
export default ArchiveTools;