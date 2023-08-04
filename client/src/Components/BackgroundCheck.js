import React from "react";

const BackgroundCheck = () => {
  return (
    <div className="backgroundCheck">
      <h2>Background Check</h2>
      <p>
        By submitting an application with xyz company I agree to submit to or
        provide information relating to police/background checks which may be
        conducted as applicable .
      </p>

      <div className="backgroundCheckOptions">
        <label htmlFor="bgyes">
          <input type="radio" name="backgroundCheckOption" id="bgyes" /> Yes
        </label>
        <label htmlFor="bgno">
          <input type="radio" name="backgroundCheckOption" id="bgno" /> No
        </label>
      </div>

      <h2>Data Disclaimer</h2>
      <p>I accept the data collection policy below;</p>
      <p>
        By submitting an application for this position you are agreeing to
        submit to or provide information relating to police/background checks
        which may be conducted as applicable.
      </p>
      <p>
        xyz-company is committed to the protection of personal information and
        compliance with relevant data protection and privacy laws. The
        information requested as part of your application is collected directly
        from you to assess your suitability to provide services to xyz-company,
        its clients and/or any of its projects. Any information that you provide
        will be recorded and maintained in a confidential way. Applicants are
        considered for employment without regard to race, colour, religion, sex,
        sexual orientation, gender identity, national origin, age, disability or
        protected veteran status, or any other legally protected basis, in
        accordance with applicable law. xyz-company is a child-safe organisation
        and screens applicants for suitability to work with children. Our checks
        may include a police check. If this applies to your position, this will
        be discussed directly with you by our recruiter. We collect the
        information outlined in this form on the legal basis of your consent and
        then may later use it for compliance with relevant laws (e.g. taxation),
        the performance of any contract we have with you or any contract we have
        with our client. This contract performance management includes managing
        your employment, your performance and/or engagement with us. The
        information you supply may be provided to our related companies and
        offices overseas, subject to such overseas offices/related companies
        being bound by the same data protection standards as the office/related
        company to which you provide the information and provided also that such
        transfer of information is required as part of fulfilling the purpose of
        or the reasons forthe provision of the information, or for the
        performance of any subsequent contract. An example of this might be that
        the hiring managing or an individual involved in the decision is based
        in another location. Further details on overseas transfers are available
        at http://xyz-company.com/legal/our-policies. If you do not provide your
        data or consent to processing by us then we cannot assess your
        suitability to enter into a contract with you. Depending on your country
        of residence, you may have certain data protection or privacy rights.
        You can find details, including our retention guidelines, at
        http://xyz-company.com/legal/our-policies. Data protection or privacy
        queries can be directed to Privacy@thexyz-companygroup.com.
      </p>
      <div className="dataDisclaimer">
        <label htmlFor="ddyes">
          <input type="checkbox" name="dataDisclaimeroption" id="ddyes"  />
          Yes
        </label>
      </div>
    </div>
  );
};

export default BackgroundCheck;
