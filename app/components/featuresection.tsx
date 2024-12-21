import React from "react";

const FeaturesSection = () => {
  return (
    <div className="w-[1440px] h-[476px] mx-auto bg-white flex flex-col items-center justify-center">
      {/* Heading */}
      <h2 className="text-[24px] font-medium text-center mb-8 text-[#22202E]">
        What makes our brand different
      </h2>

      {/* Feature Boxes */}
      <div className="grid grid-cols-4 gap-6">
        {/* Card 1 */}
        <div
          className="w-[305px] h-[244px] bg-[#F9F9F9] p-[48px_0px_0px_0px] flex flex-col items-center gap-[10px]"
        >
          <span className="text-2xl">🚚</span>
          <h3 className="text-[16px] font-medium text-[#22202E]">
            Next day as standard
          </h3>
          <p className="text-[14px] text-gray-600 text-center px-4">
            Order before 3pm and get your order the next day as standard.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="w-[305px] h-[244px] bg-[#F9F9F9] p-[48px_0px_0px_0px] flex flex-col items-center gap-[10px]"
        >
          <span className="text-2xl">🛠️</span>
          <h3 className="text-[16px] font-medium text-[#22202E]">
            Made by true artisans
          </h3>
          <p className="text-[14px] text-gray-600 text-center px-4">
            Handmade crafted goods made with real passion and craftsmanship.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="w-[305px] h-[244px] bg-[#F9F9F9] p-[48px_0px_0px_0px] flex flex-col items-center gap-[10px]"
        >
          <span className="text-2xl">💰</span>
          <h3 className="text-[16px] font-medium text-[#22202E]">
            Unbeatable prices
          </h3>
          <p className="text-[14px] text-gray-600 text-center px-4">
            For our materials and quality, you won’t find better prices anywhere.
          </p>
        </div>

        {/* Card 4 */}
        <div
          className="w-[305px] h-[244px] bg-[#F9F9F9] p-[48px_0px_0px_0px] flex flex-col items-center gap-[10px]"
        >
          <span className="text-2xl">♻️</span>
          <h3 className="text-[16px] font-medium text-[#22202E]">
            Recycled packaging
          </h3>
          <p className="text-[14px] text-gray-600 text-center px-4">
            We use 100% recycled to ensure our footprint is more manageable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
