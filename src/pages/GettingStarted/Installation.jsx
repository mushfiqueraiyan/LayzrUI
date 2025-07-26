import React, { useEffect, useState } from "react";

const Installation = () => {
  const [theme, setTheme] = useState("light"); // default fallback

  useEffect(() => {
    const current =
      document.documentElement.getAttribute("data-theme") || "light";
    setTheme(current);
  }, []);

  return (
    <div className=" px-6 py-12  ">
      <h1 className="text-4xl font-bold mb-6 ">Installation Guide</h1>

      <section className="mb-10">
        <p className="mb-4 text-md leading-relaxed">
          <strong>Layzr UI</strong> is designed to be easy to use with no
          installation process required. Unlike many libraries that need to be
          installed via npm or similar package managers, Layzr UI components can
          be directly copied and pasted into your existing project. This means
          there's no need to install Layzr UI itself.
        </p>
        <p className="text-lg">
          However, for Layzr UI components to work correctly, your project must
          be set up with tools like
          <strong> Tailwind CSS</strong>, <strong>React</strong>, or{" "}
          <strong>Next.js</strong>, as these are the foundations powering Layzr
          UI’s design system.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 ">
          Why Doesn’t Layzr UI Require Installation?
        </h2>
        <p className="text-md leading-relaxed">
          Layzr UI is a library of pre-built components and blocks that can be
          directly inserted into your project’s codebase. It’s not a JS package
          — instead, you can simply copy HTML or JSX with Tailwind classes and
          drop it into your app. It’s fast, flexible, and beginner-friendly.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 ">Icon Support</h2>
        <p className="text-md leading-relaxed">
          Some Layzr UI components include icons. For those using React, make
          sure to install
        </p>
        <pre
          className={`bg-gray-800 ${
            theme == "dark" ? "text-white" : "text-white"
          } text-sm p-4 rounded-lg mt-2`}
        >
          <code className="">npm install react-icons</code>
        </pre>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 ">Project Requirements</h2>
        <ul className="list-disc list-inside text-md leading-relaxed space-y-2">
          <li>
            <strong>Tailwind CSS Project:</strong> If you're working with plain
            HTML or any framework, make sure Tailwind CSS is installed.
          </li>
          <li>
            <strong>React + Tailwind CSS:</strong> In a React project, install
            and configure Tailwind to use Layzr UI JSX components.
          </li>
          <li>
            <strong>Next.js + Tailwind CSS:</strong> Easily plug Layzr UI
            components into your Next.js app once Tailwind is set up.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2 ">
          Basic Project Setup Guides
        </h2>
        <p className="text-md mb-4">
          Since Layzr UI doesn’t need installation, here are some starter guides
          to help you configure your project properly:
        </p>
        <ul className="list-none space-y-2 text-blue-400 underline text-md">
          <li>
            <a
              href="https://tailwindcss.com/docs/installation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind CSS Installation Guide
            </a>
          </li>
          <li>
            <a
              href="https://tailwindcss.com/docs/guides/create-react-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              React + Tailwind CSS Setup Guide
            </a>
          </li>
          <li>
            <a
              href="https://tailwindcss.com/docs/guides/nextjs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js + Tailwind CSS Setup Guide
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Installation;
