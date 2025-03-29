export const Support = () => {
  return (
    <div className="w-full max-w-[500px] mx-auto">
      <div className="bg-[#0A0A0F] min-h-screen flex flex-col items-center justify-center py-8 px-4 w-full">
        <h3 className="text-[2.5rem] font-bold text-[#00A3FF] mb-12 text-center bg-[linear-gradient(45deg,#00F2FE,#6C63FF)] realtime-text">
          Support
        </h3>
        <form className="bg-[#1F1F1F80] p-8 rounded-xl flex flex-col gap-3 w-full">
          <div className="flex flex-col gap-3">
            <label className="text-[#8A8A9E] text-base mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="inputs p-3 rounded-lg text-white"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-[#8A8A9E] text-base mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="inputs p-3 rounded-lg text-white"
            />
          </div>
          <div className="flex flex-col gap-3 mb-6">
            <label className="text-[#8A8A9E] text-base mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="inputs p-3 rounded-lg text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#4169E1] text-white py-3 px-6 rounded-lg mt-4"
          >
            Send Message
          </button>
        </form>
        <div className="text-center mt-6">
          <p className="text-[#8A8A9E] text-[0.9rem] mb-2">
            Terms & Conditions
          </p>
          <p className="text-[#8A8A9E] text-[0.8rem] mb-2">
            A GIS Analytics App
          </p>
        </div>
      </div>
    </div>
  );
};
