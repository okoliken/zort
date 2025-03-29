export const TotalBalance = () => {
  return (
    <>
      <div
        className="rounded-2xl dashboard-card stats p-8"
      >
        <h3 className="text-[1.2rem] font-medium" style={{ color: "#666666" }}>
          Total Balance
        </h3>
        <div>
          <span
            style={{
              fontSize: "4rem",
              fontWeight: "700",
              color: "white",
              margin: "1.5rem 0",
            }}
          >
            £420.96
          </span>
        </div>
        <div
          className="chart-container"
          style={{ position: "relative", height: "150px", marginTop: "2rem" }}
        >
          <svg
            width="100%"
            height="100%"
            style={{ position: "absolute", bottom: "0" }}
          >
            <defs>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.2"></stop>
                <stop offset="100%" stopColor="#22c55e" stopOpacity="0"></stop>
              </linearGradient>
            </defs>
            <path
              d="M0,100 L20,90 L40,95 L60,85 L80,80 L100,75 L120,70 L140,65 L160,55 L180,50 L200,40 L220,35 L240,25 L260,20 L280,15 L300,10 L300,150 L0,150Z"
              fill="url(#areaGradient)"
            ></path>
            <path
              d="M0,100 L20,90 L40,95 L60,85 L80,80 L100,75 L120,70 L140,65 L160,55 L180,50 L200,40 L220,35 L240,25 L260,20 L280,15 L300,10"
              stroke="#22c55e"
              stroke-width="2"
              fill="none"
            ></path>
          </svg>
        </div>
      </div>
      <div className="rounded-2xl p-8 dashboard-card grid gap-8">
        <div className="flex gap-8">
          <div className="flex flex-col flex-1 gap-[0.75rem]">
            <h4 className="text-[#888] text-base font-medium">
              This Month
            </h4>
            <div className="flex items-center gap-2">
              <span className="text-white text-2xl font-medium">£309.15</span>
              <span className="text-[#34C759] rounded-sm py-[0.2rem] px-[0.4rem]"
              style={{ background: "rgba(52, 199, 89, 0.1)" }}
              >↑</span>
            </div>
          </div>
          <div className="flex-1">
            <h4 className="text-[#888] text-base font-medium">Win Rate</h4>
            <div className="flex items-center gap-2">
              <span className="text-white text-2xl font-medium">15.7%</span>
              <span
                className="text-[#FF3B30] rounded-sm py-[0.2rem] px-[0.4rem]"
                style={{ background: "rgba(255, 59, 48, 0.1)" }}
              >
                ↓
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-8 mb-8">
          <div className="flex flex-col flex-1 gap-[0.75rem]">
            <h4 className="text-[#888] text-base font-medium">
              Average Win
            </h4>
            <span className="text-white text-2xl font-medium">£37.80</span>
          </div>
          <div className="flex flex-col flex-1 gap-[0.75rem]">
            <h4 className="text-[#888] text-base font-medium">
              Average Loss
            </h4>
            <span className="text-white text-2xl font-medium">£8.28</span>
          </div>
        </div>
      </div>
    </>
  );
};
