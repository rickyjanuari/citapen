// app/components/Faq.tsx
import { useState } from "react";

type FaqItemProps = {
  question: string;
  answer: string;
  isOpen?: boolean;
};

function FaqItem({ question, answer, isOpen = false }: FaqItemProps) {
  const [isExpanded, setIsExpanded] = useState(isOpen);
  
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
      <button
        className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <span className="font-bold text-primary">{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-secondary transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      
      {isExpanded && (
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}

type FaqProps = {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  cityName?: string;
};

export default function Faq({ faqs, cityName }: FaqProps) {
  return (
    <section id="faq" className="section bg-gray-100">
      <div className="container">
        <h2 className="text-center mb-12">
          Pertanyaan Umum {cityName ? `Seputar Anti Mampet di ${cityName}` : ''}
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}