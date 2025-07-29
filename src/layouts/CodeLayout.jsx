import React, { useState, useEffect } from "react";
import { Copy } from "lucide-react";
import { createHighlighter } from "shiki";

let highlighterInstance = null;

const CodeLayout = ({ code }) => {
  const [copied, setCopied] = useState(false);
  const [html, setHtml] = useState("<pre>Loading...</pre>");

  useEffect(() => {
    const loadHighlighter = async () => {
      if (!highlighterInstance) {
        highlighterInstance = await createHighlighter({
          themes: ["tokyo-night"],
          langs: ["jsx", "javascript", "html", "css"],
        });
      }

      const highlightedHtml = highlighterInstance.codeToHtml(code, {
        lang: "jsx",
        theme: "tokyo-night", // same theme always
        decorations: [
          {
            // line and character are 0-indexed
            start: { line: 1, character: 0 },
            end: { line: 1, character: 11 },
            properties: { class: "highlighted-word" },
          },
        ],
      });

      const paddedHtml = highlightedHtml.replace(
        "<pre",
        '<pre style="padding: 1rem; border-radius: 0.5rem;"'
      );

      setHtml(paddedHtml);
    };

    loadHighlighter();
  }, [code]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative">
      <div
        className="text-sm rounded-lg h-90  overflow-auto border  bg-[#09011d]  dark:border-neutral-700"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-black text-white dark:bg-white dark:text-black p-1.5 rounded hover:opacity-80 text-xs"
      >
        {copied ? "Copied!" : <Copy size={16} />}
      </button>
    </div>
  );
};

export default CodeLayout;
