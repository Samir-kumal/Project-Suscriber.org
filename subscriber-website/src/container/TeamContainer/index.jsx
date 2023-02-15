import Footer from "../../components/Footer";
import Header from "../../components/Header";
import img from '../../assets/025.jpg'
import './index.css'
const TeamContainer = () => {
    return(
        <div className="main_team">
            <Header/>
            <div className="wrapper_container">
                    <div className="team_intro">
                                <div className="left"></div>
                                <div className="line"></div>
                                <div className="right"></div>

                    </div>
                    <div className="team_info">
                            <div className="team-r1">
                                    <div className="profileInfo">
                                        <div className="ImageBox">
                                            <img src={img} alt="usr-1"/>
                                        </div>
                                        <div className="profileDesc">

                                        </div>
                                    </div>
                                    <div className="profileInfo">
                                        <div className="ImageBox">

                                        </div>
                                        <div className="profileDesc">

                                        </div>
                                    </div>
                                    <div className="profileInfo">
                                        <div className="ImageBox">

                                        </div>
                                        <div className="profileDesc">

                                        </div>
                                    </div>
                                    <div className="profileInfo">
                                        <div className="ImageBox">

                                        </div>
                                        <div className="profileDesc">

                                        </div>
                                    </div>
                                    
                                    
                            </div>
                    </div>
            </div>
            <Footer/>
        </div>
    );
}

export default TeamContainer;