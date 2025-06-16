import React, { useState } from "react";
import { LuChevronDown, LuPin, LuPinOff, LuSparkles } from "react-icons/lu";
import AIResponsePreview from "../../pages/InterviewPrep/components/AIResponsePreview";

const QuestionCard = ({
  question,
  answer,
  onLearnMore,
  isPinned,
  onTogglePin,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  return (
    <div className="bg-white rounded-lg mb-4 p-5 shadow border border-gray-100">
      {/* Question & Buttons Row */}
      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          <span className="text-sm font-semibold text-gray-400">Q</span>
          <h3
            className="text-sm font-medium text-gray-800 cursor-pointer"
            onClick={toggleExpand}
          >
            {question}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            className="text-xs text-indigo-800 bg-indigo-50 px-3 py-1 rounded border hover:border-indigo-200"
            onClick={onTogglePin}
          >
            {isPinned ? <LuPinOff /> : <LuPin />}
          </button>
          <button
            className="text-xs text-cyan-800 bg-cyan-50 px-3 py-1 rounded border hover:border-cyan-200 flex items-center gap-1"
            onClick={() => {
              setIsExpanded(true);
              onLearnMore();
            }}
          >
            <LuSparkles />
            <span className="hidden md:inline">Learn More</span>
          </button>
          <button
            onClick={toggleExpand}
            className="text-gray-400 hover:text-gray-600"
          >
            <LuChevronDown
              size={20}
              className={`transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Answer Section */}
      {isExpanded && (
        <div className="mt-4 bg-gray-50 px-4 py-3 rounded">
          <AIResponsePreview content={answer} />
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
