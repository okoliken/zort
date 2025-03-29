export const OddsDistrubution = () => {
  return (
    <div className="rounded-2xl dashboard-card stats p-8 h-full">
      <h3
        className="text-[1.2rem] font-medium mb-4"
        style={{ color: "#666666" }}
      >
        Odds Distribution
      </h3>
      <div className="odds-chart">
        <div className="odds-bar-container">
          <div className="odds-bar" style={{ height: "35%" }}>
            <span className="odds-value">35%</span>
            <span className="odds-label">1.5-2.0</span>
          </div>
        </div>
        <div className="odds-bar-container">
          <div className="odds-bar" style={{ height: "45%" }}>
            <span className="odds-value">45%</span>
            <span className="odds-label">2.0-3.0</span>
          </div>
        </div>
        <div className="odds-bar-container">
          <div className="odds-bar" style={{ height: "15%" }}>
            <span className="odds-value">15%</span>
            <span className="odds-label">3.0-5.0</span>
          </div>
        </div>
        <div className="odds-bar-container">
          <div className="odds-bar" style={{ height: "5%" }}>
            <span className="odds-value">5%</span>
            <span className="odds-label">5.0+</span>
          </div>
        </div>
      </div>
    </div>
  );
};
