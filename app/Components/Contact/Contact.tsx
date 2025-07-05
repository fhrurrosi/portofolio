import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen items-center justify-center px-6 py-12 gap-10 bg-[#f0eded]">
      {/* Foto di kiri */}
      <div className="w-full md:w-1/2 flex justify-center">
            
      </div>

      {/* Form di kanan */}
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-3xl font-bold text-black mb-4">Contact</h1>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your name"
            className="w-full border-b-2 border-gray-400 bg-transparent text-black placeholder-[#8c8a89] text-lg focus:outline-none focus:border-black py-2"
            required
          />
          <input
            type="email"
            placeholder="Your email"
            className="w-full border-b-2 border-gray-400 bg-transparent text-black placeholder-[#8c8a89] text-lg focus:outline-none focus:border-black py-2"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full border-b-2 border-gray-400 bg-transparent text-black placeholder-[#8c8a89] text-lg focus:outline-none focus:border-black py-2"
            required
          />
          <textarea
            rows={5}
            placeholder="Your message"
            className="w-full border-b-2 border-gray-400 bg-transparent text-black placeholder-[#8c8a89] text-lg focus:outline-none focus:border-black py-2 resize-none"
            required
          />

          <button
            type="submit"
            className="bg-black hover:bg-neutral-800 text-white text-lg font-semibold px-6 py-3 rounded-md transition-all duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
