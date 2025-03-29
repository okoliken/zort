export const JanSummary = () => {
  return (
    <>
      <div className="rounded-2xl dashboard-card stats p-8 h-full">
        <h3
          className="text-[1.2rem] font-medium mb-4"
          style={{ color: "#666666" }}
        >
          Jan 2025 Summary
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="summary-item">
            <div className="summary-label">
              <span className="icon">📈</span>
              Total Profit
            </div>
            <div className="summary-value positive">£309.15</div>
          </div>
          <div className="summary-item">
            <div className="summary-label">
              <span className="icon">%</span>
              Win Rate
            </div>
            <div className="summary-value">32.0%</div>
          </div>
          <div className="summary-item">
            <div className="summary-label">
              <span className="icon green">↑</span>
              Biggest Win
            </div>
            <div className="summary-value">£262.50</div>
          </div>
          <div className="summary-item">
            <div className="summary-label">
              <span className="icon red">↓</span>
              Biggest Loss
            </div>
            <div className="summary-value negative">-£145.50</div>
          </div>
          <div className="summary-item">
            <div className="summary-label">
              <span className="icon">💰</span>
              Average Stake
            </div>
            <div className="summary-value">£16.92</div>
          </div>
          <div className="summary-item">
            <div className="summary-label">
              <span className="icon">%</span>
              Average Odds
            </div>
            <div className="summary-value">71.11</div>
          </div>
        </div>
      </div>
    </>
  );
};
