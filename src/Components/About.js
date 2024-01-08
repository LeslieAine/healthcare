import React from "react";
import Doctor from "../Assets/care.jpeg";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to All In One Care, your trusted partner for accessible and
          personalized caregivers.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Choose a Caregiver"
          description="Find your perfect care provider and book with ease at Health Plus. Expert caregivers prioritize your health, offering tailored care."
        />

        <SolutionStep
          title="Make a Schedule"
          description="Choose the date and time that suits you best, and let our dedicated team of professionals ensure your well-being with personalized care."
        />

        <SolutionStep
          title="Get Your Solutions"
          description="Our experienced caregivers are here to provide expert advice and personalized care plans, help you follow the medical professional advice, helping you achieve your best possible health."
        />
      </div>
    </div>
  );
}

export default About;