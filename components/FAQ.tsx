
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import GlassCard from './GlassCard';
import { FAQS } from '../constants';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left p-6 rounded-2xl glass transition-all flex justify-between items-center ${isOpen ? 'border-purple-500/50 bg-white/5' : ''}`}
      >
        <span className="font-bold text-white">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-purple-400" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
      </button>
      {isOpen && (
        <div className="p-6 text-gray-400 leading-relaxed bg-white/2 rounded-b-2xl -mt-2 animate-in slide-in-from-top-2 duration-200">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-[#070719]/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-black text-white text-center mb-16 tracking-tight">FAQS</h2>
        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
