import { useState,useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/HomePage";
import Err404page from "./pages/Err404page";
import Contact from "./pages/ContactPage";
import "./index.css";
import "./container/PortfolioContainer/index.css";
import "./container/AboutUsContainer/index.css";
import Portfolio_section from "./pages/Portfolio_section";
import AboutUsPage from "./pages/AboutUsPage";
import TeamPage from "./pages/TeamPage";
import CareerPage from "./pages/CareerPage";
import PricingPage from "./pages/PricingPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsAndConditionPage from "./pages/TermsAndConditionPage";
import CookieConsent from "react-cookie-consent";
import { useCookies } from "react-cookie";
function App() {

  const [cookies] = useCookies(["myCookieConsent"]);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    if (cookies.myCookieConsent) {
      setShowBanner(false);
    }
  }, [cookies]);
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/career" element={<CareerPage />} />

          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/portfolio" element={<Portfolio_section />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicyPage />} />
          <Route path="/Terms&condition" element={<TermsAndConditionPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/*" element={<Err404page />} />
        </Routes>
      </BrowserRouter>
      {showBanner && (
        <CookieConsent
          location="bottom"
          buttonText="I understand"
          cookieName="myCookieConsent"
          expires={365}
          style={{ background: "#fff", color: "#000" }}
        >
          This site uses cookies. See our{" "}
          <a style={{ fontWeight: "bold" }} href="/PrivacyPolicy">
            Privacy Policy
          </a>{" "}
          for more Details{" "}
        </CookieConsent>
      )}
    </>
  );
}

export default App;
