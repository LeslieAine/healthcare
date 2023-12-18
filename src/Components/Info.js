import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand home care services tailored to your needs. 
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Elderly Care"
          description = {
            <ul>
                <li>Companionship</li>
                <li>Meal Planning and Preparation</li>
                <li>Medication Management and Administration</li>
                <li>Assistance with Activities of Daily Living (ADLs)</li>
                <li>Bathing and Grooming Assistance</li>
                <li>Mobility Assistance</li>
                <li>Transportation Services</li>
                <li>Doctor Appointments Escort</li>
                <li>Physical Therapy Support</li>
                <li>Memory Care for Alzheimer's and Dementia</li>
                <li>Respite Care for Family Caregivers</li>
                <li>Light Housekeeping</li>
                <li>24/7 Home Health Care</li>
                <li>Fall Prevention and Safety</li>
                <li>Palliative Care</li>
                <li>Hospice Support</li>
                <li>Grocery Shopping Assistance</li>
                <li>Social and Recreational Activities</li>
                <li>Assistance with Technology (e.g., video calls)</li>
            </ul>
          }
          icon={faTruckMedical}
        />

        <InformationCard
          title="Home Health Care"
          description={
            <ul>
                <li>Pre-Operative care</li>
                <li>Post-Operative Care</li>
                <li>Orthopedic care</li>
                <li>Medication Management and Administration</li>
                <li>Wound Care</li>
                <li>Diabetic care</li>
                <li>Blood Draws</li>
                <li>Wound care</li>
                <li>Catheter changes</li>
                <li>Diabetic care</li>
                <li>Providing IV therapy</li>
                <li>Colostomy care</li>
                <li>Medication set-up</li>
                <li>Skilled skin care</li>
                <li>Skilled transfer</li>
                <li>Dressing, bathing, and grooming</li>
            </ul>
          }
          icon={faHeartPulse}
        />

        <InformationCard
          title="Home Care"
          description={
            <ul>
                <li>Meal planning and preparation</li>
                <li>Light housekeeping and laundry</li>
                <li>Bathing and grooming</li>
                <li>Errands</li>
                <li>Transportation</li>
                <li>Companionship</li>
                <li>Respite care</li>
                <li>Alzheimer’s and Dementia care</li>
                <li>Hospital to home care</li>
            </ul>
          }
          icon={faHeartPulse}
        />
      </div>
    </div>
  );
}

export default Info;