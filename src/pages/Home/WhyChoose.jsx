import React from "react";

const WhyChoose = () => {
  const whyUs = [
    {
      id: 1,
      title: "Tailwind Ready",
      description:
        "All components are built with Tailwind CSS utility classes, ensuring seamless integration.",
    },
    {
      id: 2,
      title: "Fully Customizable",
      description:
        "Easily extend and theme components to match your design system.",
    },
    {
      id: 3,
      title: "Developer Friendly",
      description:
        "Clean code, TypeScript support, and minimal setup to get you started instantly.",
    },
    {
      id: 4,
      title: "Accessible by Default",
      description:
        "Every component follows best practices for accessibility and usability.",
    },
  ];

  return (
    <div className=" py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 lg:gap-8 ">
        {whyUs.map((data) => (
          <div
            className={`rounded-full p-[1px] bg-gradient-to-r from-transparent border-purple-600 to-transparent [background-size:400%_100%] `}
            style={{ animation: "move-bg 8s linear infinite" }}
          >
            <div
              key={data.id}
              className="py-8 px-6 rounded-2xl border border-gray-700 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-2">💫 {data.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
