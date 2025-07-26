import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const faqData = [
  {
    question: "What is Goat UI Library?",
    answer:
      "Goat UI is a modern UI component library built for speed, accessibility, and flexibility.",
  },
  {
    question: "Is Goat UI Library compatible with React and Vue?",
    answer: "Yes, Goat UI works seamlessly with both React and Vue.",
  },
  {
    question: "Is Goat UI Library free to use?",
    answer:
      "Absolutely! Goat UI is open-source and free to use in personal and commercial projects.",
  },
  {
    question: "Can I contribute to Goat UI Library?",
    answer:
      "Yes! Goat UI welcomes contributions. Visit our GitHub to get started.",
  },
  {
    question: "Can I customize the components in Goat UI Library?",
    answer:
      "Goat UI components are highly customizable using Tailwind or custom styles.",
  },
  {
    question: "What is the difference between Goat UI and other UI libraries?",
    answer:
      "Goat UI is focused on performance, minimalism, and developer experience.",
  },
];

const FirstFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="py-20 p-6 ">
      <h2 className="text-4xl font-bold text-center mb-2">FAQ</h2>
      <p className="text-center text-gray-400 mb-8">
        Find quick answers to common queries
      </p>

      <div className="space-y-4 max-w-7xl mx-auto">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg p-4 shadow-sm transition-all"
          >
            <button
              onClick={() => toggle(index)}
              className="flex cursor-pointer justify-between items-center w-full text-left font-medium text-lg"
            >
              {item.question}
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.1, ease: "easeInOut" }}
                >
                  <p className="mt-2 text-gray-400">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FirstFaq;
