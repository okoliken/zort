export const HowItWorks = () => {
  return (
    <div className="py-32 px-[10%] bg-[#0A0A0F]">
      <h2 className="text-[2.5rem] font-bold text-[#00A3FF] mb-12 text-center bg-[linear-gradient(45deg,#00F2FE,#6C63FF)] realtime-text">
        How It Works
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-10">
        <div className="p-10 rounded-[20px] backdrop-blur-[10px] service-card hover:translate-y-[-5px] transition-all ease-in-out duration-150">
          <div className="text-[2.5rem] mb-6 bg-[linear-gradient(45deg,#00F2FE,#6C63FF)] realtime-text">
          📱
          </div>
          <h3 className="text-2xl font-bold text-white mb-6">Open ZORT</h3>
          <p className="text-[#8A8A9E] mb-6">
            Launch the app and point your camera at any bet slip - no sign up
            required.
          </p>
        </div>
        <div className="p-10 rounded-[20px] backdrop-blur-[10px] service-card hover:translate-y-[-5px] transition-all ease-in-out duration-150">
          <div className="text-[2.5rem] mb-6 bg-[linear-gradient(45deg,#00F2FE,#6C63FF)] realtime-text">
          📸
          </div>
          <h3 className="text-2xl font-bold text-white mb-6">Take a Photo</h3>
          <p className="text-[#8A8A9E] mb-6">
            Capture your bet slip with your phone's camera. Works with both
            physical and digital slips.
          </p>
        </div>
        <div className="p-10 rounded-[20px] backdrop-blur-[10px] service-card hover:translate-y-[-5px] transition-all ease-in-out duration-150">
          <div className="text-[2.5rem] mb-6 bg-[linear-gradient(45deg,#00F2FE,#6C63FF)] realtime-text">
          ⚡
          </div>
          <h3 className="text-2xl font-bold text-white mb-6">
            Instant Processing
          </h3>
          <p className="text-[#8A8A9E] mb-6">
            Our AI immediately extracts all bet details including odds, stakes,
            and potential returns.
          </p>
        </div>
        <div className="p-10 rounded-[20px] backdrop-blur-[10px] service-card hover:translate-y-[-5px] transition-all ease-in-out duration-150">
          <div className="text-[2.5rem] mb-6 bg-[linear-gradient(45deg,#00F2FE,#6C63FF)] realtime-text">
          📊
          </div>
          <h3 className="text-2xl font-bold text-white mb-6">View Results</h3>
          <p className="text-[#8A8A9E] mb-6">
            See your organized bets and track your performance over time through
            the interactive dashboard.
          </p>
        </div>
      </div>
    </div>
  );
};
