import React from "react";

const Docs = () => {
  return (
    <section className="px-6 pt-8 pb-16">
      <h1 className="text-4xl font-bold mb-4">Welcome to Layzr UI</h1>
      <p className="text-md mb-10">
        Layzr UI is the premier resource for an extensive collection of modern,
        production-ready UI components and templates—offered completely free of
        charge. Whether you are initiating a new project or enhancing an
        existing platform, Layzr UI is designed to elevate your development
        experience.
      </p>

      <div className="space-y-16">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">About Layzr UI</h2>
          <p>
            Layzr UI provides a comprehensive library of{" "}
            <strong>700+ meticulously crafted components and templates</strong>,
            engineered to accelerate your development workflow while maintaining
            clean, cohesive design standards. Each element is developer-friendly
            and highly customizable, making it ideal for rapid prototyping as
            well as scalable production environments.
          </p>
        </div>

        {/* What You Get Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Features and Benefits</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Reusable Advanced Components:</strong> Includes complex
              form controls, tabs, modals, accordions, and more—crafted
              following best practices to ensure maximum flexibility and
              reliability.
            </li>
            <li>
              <strong>Multi-Page Website Templates:</strong> Professionally
              designed, fully responsive templates suitable for business
              websites, blogs, portfolios, and beyond.
            </li>
            <li>
              <strong>Modular Website Blocks:</strong> Easily mix-and-match UI
              blocks to assemble attractive layouts without starting design
              efforts from scratch.
            </li>
            <li>
              <strong>Extensive SVG Icon Library:</strong> A continually
              expanding set of modern, high-quality icons optimized for various
              design contexts.
            </li>
            <li>
              <strong>Animated Components:</strong> Powered by Framer Motion,
              these components feature smooth, subtle animations to enhance user
              interaction.
            </li>
            <li>
              <strong>Color Palette Generator:</strong> Generate opacity
              variations of any HEX color in HEX, RGB, and HSL formats, ready
              for instant copy and use.
            </li>
          </ul>
        </div>

        {/* Advantages Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Why Choose Layzr UI?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>No External Dependencies:</strong> Simply copy and paste
              components—no additional setups or bulky installations are
              required.
            </li>
            <li>
              <strong>Complete Customizability:</strong> Clean, well-structured
              code that allows you to seamlessly adapt components to fit your
              specific project requirements.
            </li>
            <li>
              <strong>Contemporary Design Aesthetic:</strong> All components
              adhere to consistent, modern design principles to save you time on
              visual refinements.
            </li>
            <li>
              <strong>Ready-to-Use Templates:</strong> Access over 20
              professionally designed, multi-page templates. Use them as-is
              without code or customize deeply based on your needs.
            </li>
            <li>
              <strong>Engaged Community Support:</strong> Join the vibrant Layzr
              UI community to share your work, gain valuable feedback, and
              collaborate on building superior user interfaces.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Docs;
