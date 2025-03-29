export const BettingStatistics = () => {
  return (
    <>
    <div className="rounded-2xl dashboard-card stats p-8">
      <h3 className="text-[1.2rem] font-medium mb-4" style={{ color: "#666666" }}>Betting Statistics</h3>

      <div className="flex gap-8 mb-8">
        <div className="flex flex-col flex-1 gap-[0.75rem]">
          <h4 className="text-[#888] text-base font-medium">
          Total Bets
          </h4>
          <span className="text-white text-2xl font-medium">47</span>
        </div>
        <div className="flex flex-col flex-1 gap-[0.75rem]">
          <h4 className="text-[#888] text-base font-medium">
          Win Rate
          </h4>
          <span className="text-white text-2xl font-medium">15.7%</span>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="flex flex-col flex-1 gap-[0.75rem]">
          <h4 className="text-[#888] text-base font-medium">
          Biggest Win
          </h4>
          <span className="text-2xl font-medium text-[#34C759]">£145.50</span>
        </div>

        <div className="flex flex-col flex-1 gap-[0.75rem]">
          <h4 className="text-[#888] text-base font-medium">
          Biggest Loss
          </h4>
          <span className="text-2xl font-medium text-[#FF3B30]">-£50.00</span>
        </div>
      </div>
    </div>
    <div className="rounded-2xl dashboard-card stats p-8 h-full">
      <h3 className="text-[1.2rem] font-medium mb-4" style={{ color: "#666666" }}>Sport Distribution</h3>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between p-3 activity-item rounded-lg">
          <h4 className="text-[#8A8A9E] text-base font-medium">
            Football
          </h4>
          <span className="text-white font-bold">45%</span>
        </div>
        <div className="flex items-center justify-between p-3 activity-item rounded-lg">
          <h4 className="text-[#8A8A9E] text-base font-medium">
          Basketball
          </h4>
          <span className="text-white font-bold">30%</span>
        </div>
        <div className="flex items-center justify-between p-3 activity-item rounded-lg">
          <h4 className="text-[#8A8A9E] text-base font-medium">
            F1
          </h4>
          <span className="text-white font-bold">25%</span>
        </div>
      </div>
    </div>
    </>
  );
};