import { useState, useEffect } from "react";
import { TotalBalance } from "../ui/realtime/TotalBalance";
import { BettingStatistics } from "../ui/realtime/BettingStatistics";
import { OddsDistrubution } from "../ui/realtime/OddsDistrubution";
import { JanSummary } from "../ui/realtime/JanSummary";
import { ProfitLossbyDay } from "../ui/realtime/ProfitLossbyDay";
import { AnimatePresence, motion } from "framer-motion";

export const RealTimeBoard = () => {
  const dashboardComponents = [
    <TotalBalance key="total-balance" />,
    <JanSummary key="jan-summary" />,
    <BettingStatistics key="betting-stats" />,
    <OddsDistrubution key="odds-distribution" />,
    <ProfitLossbyDay key="profit-loss" />,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % dashboardComponents.length
    );
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dashboardComponents.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <div className="py-8 px-[5%] md:py-16 md:px-[10%] bg-black">
      <h2 className="text-[2.5rem] font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
        Real-Time Analytics Dashboards
      </h2>

      <div className="relative flex sm:flex-row flex-col items-center gap-4 container mx-auto">
        <button
          className="border-none bg-white/10 text-white rounded-full cursor-pointer text-xl w-12 h-12 flex items-center justify-center transition-colors duration-200 hover:bg-white/20"
          onClick={handlePrevious}
          aria-label="Previous dashboard"
        >
          ←
        </button>

        <div className="flex-1 overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 flex-1 mt-8"
            >
              {dashboardComponents[currentIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          className="border-none bg-white/10 text-white rounded-full cursor-pointer text-xl w-12 h-12 flex items-center justify-center transition-colors duration-200 hover:bg-white/20"
          onClick={handleNext}
          aria-label="Next dashboard"
        >
          →
        </button>
      </div>
    </div>
  );
};
