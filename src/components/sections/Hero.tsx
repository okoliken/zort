import Image from "../../assets/images/screen1.png";
import Image2 from "../../assets/images/screen2.png";
import Image3 from "../../assets/images/screen3.png";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="bg-[radial-gradient(circle_at_50%_50%,_#1A1A24_0%,_#0A0A0F_100%)] min-h-screen flex items-center justify-between relative overflow-hidden px-[10%]">
      <div className="max-w-[600px] z-10 flex-1 mx-auto xl:mx-0">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="text-5xl md:text-[4.5rem] leading-[1.1] mb-6 gradient-text bg-[linear-gradient(45deg,white,#00F2FE)] font-bold text-center xl:text-left"
        >
          Transform Your Betting Game
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.2,
          }}
          className="text-[#8A8A9E] mb-10 text-xl text-center xl:text-left"
        >
          Harness the power of AI to track, analyze, and optimize your sports
          betting. Instant bet slip scanning, real-time analytics, and
          intelligent insights at your fingertips.
        </motion.p>

        <div className="text-center xl:text-left">
          <motion.a
            href="https://apps.apple.com/gb/app/zort/id6740245454"
            className="bg-[#4169E1] inline-flex items-center py-2 px-4 md:py-3 md:px-6 text-white rounded-lg text-[0.9rem] font-medium md:text-base hover:bg-[#3154c4] transition-all ease-linear duration-[0.3s]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: 0.4,
            }}
          >
            <svg
              style={{ width: "24px", height: "24px", marginRight: "8px" }}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"
              ></path>
            </svg>
            Download on App Store
          </motion.a>
        </div>
      </div>

      <div className="flex-1 hidden xl:flex items-center justify-center z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.6,
          }}
          className="relative"
        >
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              delay: 0.6,
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            src={Image3}
            alt="ZORT App Analytics"
            className="h-[500px] w-auto z-10 rounded-3xl rotate-[-15deg] bottom-[-30px] left-[-160px] absolute opacity-[0.7] shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              delay: 0.8,
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            src={Image}
            alt="ZORT App Interface"
            className="h-[600px] w-auto relative z-50 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              delay: 1,
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            src={Image2}
            alt="ZORT App Features"
            className="h-[500px] w-auto absolute z-10 rounded-3xl rotate-[15deg] top-[-30px] right-[-180px] opacity-[0.7] shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
          />
        </motion.div>
      </div>
    </div>
  );
};
