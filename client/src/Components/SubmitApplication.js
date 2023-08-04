import React from "react";

const SubmitApplication = () => {
  return (
    <div className="submitApplication">
      <h2>Submit Application</h2>

      <label htmlFor="submitApplication">
        <input
          type="checkbox"
          name="submitApplication"
          id="submitApplication"
        />{" "}
        Consider me for other positions and allow my information to be
        searchable
      </label>
    </div>
  );
};

export default SubmitApplication;
