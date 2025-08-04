import React from "react";
import useTheme from "../../hooks/useTheme";
import { ArrowRight, ChevronRight } from "lucide-react";

const WhyChoose = () => {
  const theme = useTheme();

  const components = [
    {
      name: "Buttons",
      count: "15 variants",
      icon: "🔘",
      preview: "bg-gradient-to-r from-blue-500 to-purple-600",
    },
    {
      name: "Cards",
      count: "12 layouts",
      icon: "🃏",
      preview:
        "bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600",
    },
    {
      name: "Forms",
      count: "20 inputs",
      icon: "📝",
      preview: "bg-gradient-to-r from-green-400 to-blue-500",
    },
    {
      name: "Navigation",
      count: "8 styles",
      icon: "🧭",
      preview: "bg-gradient-to-r from-purple-400 to-pink-500",
    },
    {
      name: "Modals",
      count: "10 types",
      icon: "🪟",
      preview: "bg-gradient-to-r from-orange-400 to-red-500",
    },
    {
      name: "Tables",
      count: "6 designs",
      icon: "📊",
      preview: "bg-gradient-to-r from-teal-400 to-cyan-500",
    },
  ];

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
    <div className=" pt-15 pb-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 lg:gap-8 ">
        {whyUs.map((data) => (
          <div
            className={`rounded-full p-[1px] bg-gradient-to-r from-transparent border-purple-600 to-transparent [background-size:400%_100%] `}
            style={{ animation: "move-bg 8s linear infinite" }}
          >
            <div
              key={data.id}
              className={`py-8 px-6 rounded-2xl border ${
                theme == "dark" ? "border-gray-700" : "border-gray-300"
              } hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300`}
            >
              <h3 className="text-lg font-semibold mb-2">💫 {data.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <section className="py-32  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2
              className={`text-5xl font-bold mb-8 bg-gradient-to-r ${
                theme == "dark"
                  ? "from-white to-gray-300"
                  : " from-gray-900 to-gray-600"
              }  bg-clip-text text-transparent`}
            >
              100+ Premium Components
            </h2>
            <p
              className={`text-lg   ${
                theme == "dark" ? "text-gray-300" : "text-gray-500"
              } max-w-xl mx-auto`}
            >
              From simple buttons to complex data tables, we've got everything
              you need to build stunning interfaces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {components.map((component, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl p-[2px]"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur"></div>
                <div
                  className={`relative p-8 ${
                    theme == "dark"
                      ? "bg-gray-900 border-gray-800/50"
                      : "bg-white border-gray-200/50"
                  } rounded-3xl border   hover:border-transparent transition-all duration-500 cursor-pointer backdrop-blur-xl`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{component.icon}</div>
                      <div>
                        <h3
                          className={`text-xl font-bold  ${
                            theme == "dark" ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {component.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {component.count}
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                  <div
                    className={`h-20 ${component.preview} rounded-2xl shadow-inner group-hover:shadow-lg transition-all duration-300`}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-5 rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl font-semibold text-lg">
              <span>Explore All Components</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChoose;
