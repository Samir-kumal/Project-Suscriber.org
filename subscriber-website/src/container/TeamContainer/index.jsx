import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import img1 from "../../assets/team/01.png";
import img2 from "../../assets/team/02.png";
import img3 from "../../assets/team/03.png";
import img4 from "../../assets/team/04.png";
import img5 from "../../assets/team/05.png";
import "./index.css";
const TeamContainer = () => {
  return (
    <div className="main_team">
      <Header />

      <div className="wrapper_container">
        <div className="team_intro">
          <div className="left">
            <div className="left-r1">
              <div className="line-dash"></div>
              <h1>Let's meet</h1>
            </div>
            <span className="left-r2">Our Team</span>
          </div>
          <div className="line"></div>
          <div className="right">
            <div className="r1-desc">
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available. It
                is also used to temporarily replace
              </p>
            </div>
          </div>
        </div>
        <div className="team_info">
          <div className="team-r1">
            <div className="profileInfo">
              <div className="ImageBox">
                <img src={img1} alt="usr-1" />
              </div>
              <div className="profileDesc">
                <div className="profileDesc-r1">
                  <p className="usrname">Ashim Shrestha</p>
                  <span className="entitle">Digital Marketing</span>
                </div>
                <div className="profileDesc-r2">
                  <p>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without relying on
                    meaningful content.
                  </p>
                </div>
                <div className="profileDesc-r3">
                  <div className="socialMedia-links">
                    <FaInstagram />
                    <FaFacebookSquare />
                  </div>
                </div>
              </div>
            </div>
            <div className="profileInfo">
              <div className="ImageBox">
                <img src={img2} alt="usr-1" />
              </div>
              <div className="profileDesc">
                <div className="profileDesc">
                  <div className="profileDesc-r1">
                    <p className="usrname">Anjali Shrestha</p>
                    <span className="entitle">Content Creator</span>
                  </div>
                  <div className="profileDesc-r2">
                    <p>
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document or a typeface without relying on
                      meaningful content.
                    </p>
                  </div>
                  <div className="profileDesc-r3">
                    <div className="socialMedia-links">
                      <FaInstagram />
                      <FaFacebookSquare />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profileInfo">
              <div className="ImageBox">
                <img src={img3} alt="usr-1" />
              </div>
              <div className="profileDesc">
                <div className="profileDesc">
                  <div className="profileDesc-r1">
                    <p className="usrname">Samir Kumal</p>
                    <span className="entitle">React Developer</span>
                  </div>
                  <div className="profileDesc-r2">
                    <p>
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document or a typeface without relying on
                      meaningful content.
                    </p>
                  </div>
                  <div className="profileDesc-r3">
                    <div className="socialMedia-links">
                      <FaInstagram />
                      <FaFacebookSquare />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profileInfo">
              <div className="ImageBox">
                <img src={img4} alt="usr-1" />
              </div>
              <div className="profileDesc">
                <div className="profileDesc">
                  <div className="profileDesc-r1">
                    <p className="usrname">Shreeya Shrestha</p>
                    <span className="entitle">UI/UX Design</span>
                  </div>
                  <div className="profileDesc-r2">
                    <p>
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document or a typeface without relying on
                      meaningful content.
                    </p>
                  </div>
                  <div className="profileDesc-r3">
                    <div className="socialMedia-links">
                      <FaInstagram />
                      <FaFacebookSquare />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="profileInfo">
              <div className="ImageBox">
                <img src={img5} alt="usr-1" />
              </div>
              <div className="profileDesc">
                <div className="profileDesc">
                  <div className="profileDesc-r1">
                    <p className="usrname">Chhatra Rana</p>
                    <span className="entitle">Nodejs Developer</span>
                  </div>
                  <div className="profileDesc-r2">
                    <p>
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document or a typeface without relying on
                      meaningful content.
                    </p>
                  </div>
                  <div className="profileDesc-r3">
                    <div className="socialMedia-links">
                      <FaInstagram />
                      <FaFacebookSquare />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TeamContainer;
