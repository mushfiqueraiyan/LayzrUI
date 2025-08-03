import React, { useState, useEffect } from "react";
import { Copy } from "lucide-react";
import { createHighlighter } from "shiki";
import reactIcon from "../assets/react.svg";
import useTheme from "../hooks/useTheme";

let highlighterInstance = null;

const CodeLayout = ({ code }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("JS");
  const [html, setHtml] = useState("<pre>Loading...</pre>");
  const theme = useTheme();

  useEffect(() => {
    const loadHighlighter = async () => {
      if (!highlighterInstance) {
        highlighterInstance = await createHighlighter({
          themes: ["tokyo-night"],
          langs: ["tsx", "jsx", "javascript"],
        });
      }

      const highlightedHtml = highlighterInstance.codeToHtml(code, {
        lang: activeTab === "TS" ? "tsx" : "jsx",
        theme: "tokyo-night",
      });

      const paddedHtml = highlightedHtml.replace(
        "<pre",
        '<pre style="padding: 1rem; border-radius: 0.5rem;"'
      );

      setHtml(paddedHtml);
    };

    loadHighlighter();
  }, [code, activeTab]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className={`relative rounded-lg border   ${
        theme == "dark" ? " border-neutral-700" : "border-gray-300"
      } z-1`}
    >
      {/* Header */}
      <div
        className={`px-3 py-2 text-sm flex items-center justify-between rounded-t-lg text-gray-100 ${
          theme == "dark"
            ? "bg-[#0f172a]"
            : "bg-white border-b-1 text-gray-500 border-gray-300"
        }`}
      >
        <div className="flex items-center gap-2 font-medium">
          <img src={reactIcon} alt="React" className="w-4 h-4" />
          <span className="text-xs font-semibold">
            {activeTab === "TS" ? "TSX" : "JSX"}{" "}
            <span className="text-slate-400 ml-1">
              preview.{activeTab === "TS" ? "tsx" : "jsx"}
            </span>
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab("TS")}
            className={`px-2 py-0.5 text-xs rounded font-medium cursor-pointer ${
              activeTab === "TS"
                ? "bg-blue-500 text-white"
                : "text-slate-400 hover:text-gray-400"
            }`}
          >
            TS
          </button>
          <button
            onClick={() => setActiveTab("JS")}
            className={`px-2 py-0.5 text-xs rounded font-medium cursor-pointer ${
              activeTab === "JS"
                ? "bg-yellow-300 text-black"
                : "text-slate-400 hover:text-gray-400"
            }`}
          >
            JS
          </button>
        </div>
      </div>

      {/* Code Output */}
      <div
        className={`text-sm max-h-[500px] overflow-auto rounded-b-lg ${
          theme == "dark" ? " bg-[#09011d]" : "bg-white"
        }  font-mono text-white`}
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="absolute top-11 right-2  text-white bg-gray-200 cursor-pointer dark:text-black p-1.5 rounded hover:opacity-80 text-xs"
      >
        {copied ? "Copied!" : <Copy size={16} />}
      </button>
    </div>
  );
};

export default CodeLayout;
