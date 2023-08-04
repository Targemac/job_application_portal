import "./App.css";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";
import ContactInfo from "./Components/ContactInfo";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import BackgroundCheck from "./Components/BackgroundCheck";
import SubmitApplication from "./Components/SubmitApplication";
import { useState } from "react";
import ThankYou from "./Components/ThankYou";

function App() {
  const [stepCount, setStepCount] = useState(1);
  const [showStepCount, setShowStepCount] = useState(true);
  // const [currentStepCount, setCurrentStepCount] = useState("");

  const [contactInfo, setContactInfo] = useState(true);
  const [backgroundCheck, setBackgroundCheck] = useState(false);
  const [submitApplication, setSubmitApplication] = useState(false);
  const [thankYou, setThankYou] = useState(false);

  const handleNextClick = () => {
    if (stepCount === 1) {
      setStepCount(2);
      setContactInfo(false);
      setBackgroundCheck(true);
      toast.info("Progress Saved");
    } else if (stepCount === 2) {
      setStepCount(3);
      setBackgroundCheck(false);
      setSubmitApplication(true);
      toast.info("Progress Saved");
    }
  };
  const handleBackClick = () => {
    if (stepCount === 3) {
      setStepCount(2);
      setThankYou(false);
      setSubmitApplication(false);
      setBackgroundCheck(true);
    } else if (stepCount === 2) {
      setStepCount(1);
      setBackgroundCheck(false);
      setContactInfo(true);
    }
  };

  const handleSubmit = () => {
    let res = window.confirm("You are about to submit application");

    if (stepCount === 3 && res === true) {
      setStepCount(4);
      setShowStepCount(false);
      setSubmitApplication(false);
      setThankYou(true);
    }
  };

  return (
    <BrowserRouter>
      {/* <div className="App"> */}
      <Header />
      <div className="titleBox">Fullstack Web Developer</div>
      {showStepCount && <div className="stepsBox">Step {stepCount} of 3</div>}

      {contactInfo && <ContactInfo />}
      {backgroundCheck && <BackgroundCheck />}
      {submitApplication && <SubmitApplication />}
      {thankYou && <ThankYou />}

      <Footer
        stepCount={stepCount}
        handleNextClick={handleNextClick}
        handleBackClick={handleBackClick}
        handleSubmit={handleSubmit}
      />
      {/* </div> */}
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
