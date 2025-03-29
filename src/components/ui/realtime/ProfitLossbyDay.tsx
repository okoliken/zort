export const ProfitLossbyDay = () => {
  return (
    <>
      <div className="rounded-2xl dashboard-card stats p-8">
        <h3
          className="text-[1.2rem] font-medium mb-4"
          style={{ color: "#666666" }}
        >
          Profit/Loss by Day
        </h3>

        <div className="pl-chart">
          <div className="pl-day positive" style={{ height: "60%" }}>
            <span className="pl-value">+£45</span>
            <span className="pl-label">Mon</span>
          </div>
          <div className="pl-day negative" style={{ height: "30%" }}>
            <span className="pl-value">-£20</span>
            <span className="pl-label">Tue</span>
          </div>
          <div className="pl-day positive" style={{ height: "80%" }}>
            <span className="pl-value">+£65</span>
            <span className="pl-label">Wed</span>
          </div>
          <div className="pl-day positive" style={{ height: "40%" }}>
            <span className="pl-value">+£30</span>
            <span className="pl-label">Thu</span>
          </div>
          <div className="pl-day negative" style={{ height: "20%" }}>
            <span className="pl-value">-£15</span>
            <span className="pl-label">Fri</span>
          </div>
        </div>
      </div>

      <div className="rounded-2xl dashboard-card stats p-8">
        <h3
          className="text-[1.2rem] font-medium mb-4"
          style={{ color: "#666666" }}
        >
          Daily Summary
        </h3>
        <div className="flex gap-8 mb-8">
          <div className="flex flex-col flex-1 gap-[0.75rem]">
            <h4 className="text-[#888] text-base font-medium">Best Day</h4>
            <span className="text-2xl font-medium text-[#34C759]">+£65</span>
          </div>
          <div className="flex flex-col flex-1 gap-[0.75rem]">
            <h4 className="text-[#888] text-base font-medium">Worst Day</h4>
            <span className="text-2xl font-medium text-[#FF3B30]">-£20</span>
          </div>
        </div>
      </div>
    </>
  );
};
