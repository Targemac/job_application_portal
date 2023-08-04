import React from "react";

const Footer = ({
  stepCount,
  handleNextClick,
  handleBackClick,
  handleSubmit,
}) => {
  return (
    <>
      {stepCount > 3 ? (
        ""
      ) : (
        <div className="footer">
          <div className="leftBtns">
            <button className="cancelBtn">Cancel</button>
            <button className="saveBtn">Save</button>
          </div>
          <div className="rightBtns">
            {stepCount === 1 ? (
              ""
            ) : (
              <button className="backBtn" onClick={handleBackClick}>
                Back
              </button>
            )}

            {stepCount === 3 ? (
              ""
            ) : (
              <button className="nextBtn" onClick={handleNextClick}>
                Next
              </button>
            )}

            {stepCount === 3 ? (
              <button
                type="submit"
                className="submitBtn"
                onClick={handleSubmit}
              >
                Submit
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
