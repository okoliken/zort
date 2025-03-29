export const Features = () => {
  return (
    <div className="py-32 px-[10%] bg-[#1A1A24]">
      <h2 className="text-[2.5rem] font-bold text-[#00A3FF] mb-12 text-center bg-[linear-gradient(45deg,#00F2FE,#6C63FF)] realtime-text">
      Smart Features for Smart Betting
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-10">
        <div className="p-10 rounded-[20px] backdrop-blur-[10px] service-card hover:translate-y-[-5px] transition-all ease-in-out duration-150">
          <div className="text-[2.5rem] mb-6 bg-[linear-gradient(45deg,#00F2FE,#6C63FF)] realtime-text">🔍</div>
          <h3 className="text-2xl font-bold text-white mb-6">
            AI Bet Slip Scanner
          </h3>
          <p className="text-[#8A8A9E] mb-6">
            Instantly scan and analyze any bet slip. Our AI extracts odds,
            stakes, and potential returns with incredible accuracy.
          </p>
        </div>
        <div className="p-10 rounded-[20px] backdrop-blur-[10px] service-card hover:translate-y-[-5px] transition-all ease-in-out duration-150">
          <div className="text-[2.5rem] mb-6 bg-[linear-gradient(45deg,#00F2FE,#6C63FF)] realtime-text">📊</div>
          <h3 className="text-2xl font-bold text-white mb-6">
            Interactive Dashboard
          </h3>
          <p className="text-[#8A8A9E] mb-6">
            Track your performance with beautiful visualizations. Monitor win
            rates, ROI, and betting patterns in real-time.
          </p>
        </div>
        <div className="p-10 rounded-[20px] backdrop-blur-[10px] service-card hover:translate-y-[-5px]  transition-all ease-in-out duration-150">
          <div className="text-[2.5rem] mb-6 bg-[linear-gradient(45deg,#00F2FE,#6C63FF)] realtime-text">🎯</div>
          <h3 className="text-2xl font-bold text-white mb-6">
            Smart Analytics
          </h3>
          <p className="text-[#8A8A9E] mb-6">
            Get intelligent insights about your betting behavior. Identify
            winning strategies and optimize your approach.
          </p>
        </div>
        <div className="p-10 rounded-[20px] backdrop-blur-[10px] service-card hover:translate-y-[-5px]  transition-all ease-in-out duration-150">
          <div className="text-[2.5rem] mb-6 bg-[linear-gradient(45deg,#00F2FE,#6C63FF)] realtime-text">🔐</div>
          <h3 className="text-2xl font-bold text-white mb-6">
            Secure & Private
          </h3>
          <p className="text-[#8A8A9E] mb-6">
            Your data is encrypted and protected. We prioritize your privacy and
            security above everything.
          </p>
        </div>
      </div>
    </div>
  );
};
