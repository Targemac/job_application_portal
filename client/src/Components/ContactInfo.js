import React from "react";
import { FaUpload} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="contactInfo">
      <h2>Contac Information</h2>

      <div className="grp1">
        <label htmlFor="firstName">
          First name <span className="required">*</span>
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="first name"
        />
        <label htmlFor="lastName">
          Last name <span className="required">*</span>
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="last name"
        />
        <label htmlFor="firstName">
          Email <span className="required">*</span>
        </label>
        <input type="email" id="email" name="email" placeholder="Email" />
      </div>

      <div className="grp2">
        <h2>
          Upload Resume and Cover Letter<span className="required">*</span>
        </h2>
        <p>Please upload your CV and an optional cover letter</p>
        <input type="file" name="cv" id="" hidden />
        <button>
          <FaUpload /> Upload resume/CV
        </button>

        <h2>Cover Letter</h2>
        <input type="file" name="cv" id="" hidden />
        <button>
          <FaUpload /> Upload cover letter
        </button>
        {/* <div className="div">or</div>
        <button>
          <FaPen /> Type it manually
        </button> */}

        <h2>Additional attachment</h2>
        <input type="file" name="cv" id="" hidden />
        <button>
          <FaUpload /> Upload Document
        </button>
      </div>

      <div className="grp3">
        <h2>Where did you hear about us ?</h2>
        <div className="hearAboutusOptions">
          <label htmlFor="opt1">
            <input type="radio" name="hearAboutUsOptions" id="opt1" /> xyz
            company
          </label>
          <label htmlFor="opt2">
            <input type="radio" name="hearAboutUsOptions" id="opt2" /> LinkedIn
          </label>
          <label htmlFor="opt3">
            <input type="radio" name="hearAboutUsOptions" id="opt3" /> Referral
          </label>
          <label htmlFor="opt4">
            <input type="radio" name="hearAboutUsOptions" id="opt4" /> Facebook
          </label>
          <label htmlFor="opt5">
            <input type="radio" name="hearAboutUsOptions" id="opt5" /> Google
            Adds
          </label>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
