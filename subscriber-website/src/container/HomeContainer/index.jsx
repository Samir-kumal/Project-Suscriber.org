import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Section1 from './Section_1';
import Section2 from './Section_2';
import Section_3 from "./Section_3";
import Section_4 from "./Section_4";
import Section_5 from './Language_slider';
import Recent_projects from "./Recent_projects";
import Language_slider from "./Language_slider";
const HomeContainer = ( ) => {
    return(
        <>
            <Header/>
            <main>
                    <Section1/>
                    <Section2/>
                    {/* <Section_3/> */}
                    <Recent_projects/>
                    <Language_slider/>
                    <Section_4/>

            </main>
            <Footer/>
        </>
    );
}


export default HomeContainer;