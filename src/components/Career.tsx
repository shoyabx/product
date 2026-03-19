import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Manager IT</h4>
                <h5>Religare Health Insurance, Noida</h5>
              </div>
              <h3>2018</h3>
            </div>
            <p>
              Delivered L1 support for CRM, Proparo DB, Email View & Claim Live.
              Ensured quality control for insurance operations, maintained tech standards,
              and led business requirement discussions for system enhancements.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Financial Analyst</h4>
                <h5>American Express, Gurgaon</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Delivered ITIL-aligned Incident & Change Management for enterprise
              finance platforms, resolving 1,700+ tickets. Led release validation,
              pre/post-testing, and RCA to eliminate recurring defects and ensure
              zero-disruption deployments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Analyst – ERP Expert</h4>
                <h5>American Express, Gurgaon</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Owned the P2P platform roadmap across SAP Concur, SAP Ariba, Oracle
              R12 EBS & Payment Portal for 3,000+ global users. Led UAT for 15+
              deployments achieving zero-disruption go-lives. Built observability
              dashboards via SQL, Power BI & IBM Cognos 11.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
