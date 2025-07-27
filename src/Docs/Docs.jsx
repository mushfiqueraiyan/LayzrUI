import React from "react";

const Docs = () => {
  return (
    <section className=" px-6 pt-8 pb-16 ">
      <h1 className="text-4xl font-bold mb-4 ">Welcome to Layzr UI</h1>
      <p className="text-md  mb-10  ">
        Layzr UI is your ultimate destination for a massive collection of
        modern, production-ready UI components and templates — completely free.
        Whether you're starting fresh or scaling an existing site, Layzr UI has
        your back.
      </p>

      <div className="space-y-16">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">💡 About Layzr UI</h2>
          <p>
            Layzr UI offers over{" "}
            <strong>700+ handcrafted components and templates</strong>,
            engineered to speed up your dev workflow while keeping your design
            clean and on point. Everything is developer-friendly and
            customizable — perfect for rapid prototyping or production use.
          </p>
        </div>

        {/* What You Get Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">🎁 What You Get</h2>
          <ul className="list-disc list-inside  space-y-2">
            <li>
              <strong>Reusable Advanced Components:</strong> From complex forms
              to tabs, modals, and accordions — all built with best practices
              and flexibility in mind.
            </li>
            <li>
              <strong>Multi-Page Website Templates:</strong> Clean, responsive
              templates for business sites, blogs, portfolios and more.
            </li>
            <li>
              <strong>Website Blocks:</strong> Mix-and-match UI blocks to build
              beautiful layouts without writing design from scratch.
            </li>
            <li>
              <strong>SVG Icons:</strong> A growing icon library, modern and
              ready to use in any design context.
            </li>
            <li>
              <strong>Animated Components:</strong> Framer Motion-powered
              animations that add subtle, smooth interaction.
            </li>
            <li>
              <strong>Color Palette Generator:</strong> Paste a HEX code and
              generate opacity variations in HEX, RGB & HSL — click to copy.
            </li>
          </ul>
        </div>

        {/* Advantages Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            🚀 Why Choose Layzr UI?
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>No Dependencies:</strong> Just copy and paste — no extra
              setup, no bulky installs.
            </li>
            <li>
              <strong>Full Customizability:</strong> Components are structured
              and readable so you can tailor them to your project’s logic.
            </li>
            <li>
              <strong>Modern Aesthetic:</strong> Every component is built with
              consistent, modern design principles so you can skip the redesign.
            </li>
            <li>
              <strong>Pre-built Templates:</strong> 20+ modern multi-page
              templates. You can use them code-free or dive into the code if
              needed.
            </li>
            <li>
              <strong>Community-Powered:</strong> Join the Layzr UI community.
              Share work, get feedback, and build better UIs together.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Docs;
