import {
  Moon,
  Sun,
  Copy,
  Code,
  Zap,
  Palette,
  Download,
  Star,
  Github,
  Twitter,
  ChevronRight,
  Play,
  ArrowRight,
  Sparkles,
  Shield,
  Layers,
  Box,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import useTheme from "../../hooks/useTheme";

const Hero = () => {
  const theme = useTheme();

  // Button animation

  const customCss = `
   
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }
    
    @keyframes shimmer-spin {
      to {
        --angle: 360deg;
      }
    }
  `;

  return (
    <div className="relative overflow-hidden">
      {/* 🔲 Grid background layer */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute inset-0  dark:from-blue-950/50 dark:via-purple-950/50 dark:to-pink-950/50"></div>
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className={`${
                    theme == "dark" ? "text-gray-300" : "text-gray-700 "
                  }`}
                  opacity="0.5"
                />
              </pattern>
              <pattern
                id="smallGrid"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-gray-200 dark:text-gray-800"
                  opacity="0.3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
          </svg>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-l from-pink-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200 dark:border-blue-800 px-6 py-3 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span>Introducing Layzr UI - Now Available</span>
              <ArrowRight className="w-4 h-4" />
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none">
              <span className="block bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Build
              </span>
              <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 dark:from-purple-400 dark:via-pink-400 dark:to-orange-400 bg-clip-text text-transparent">
                Beautiful
              </span>
              <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 dark:from-orange-400 dark:via-red-400 dark:to-pink-400 bg-clip-text text-transparent">
                Faster
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className={`text-md md:text-xl ${
                theme == "dark" ? "text-gray-300" : "text-gray-600"
              } mb-12 max-w-3xl mx-auto leading-relaxed font-light`}
            >
              The most advanced React component library. Copy, paste, and ship
              stunning interfaces in minutes, not days.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <button className="group relative overflow-hidden cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-3 rounded-xl font-semibold text-md shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-3">
                  <Play className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  <span>Start Building Now</span>
                </div>
              </button>

              <button
                className={`group flex items-center space-x-3 border-1 cursor-pointer border-gray-300 dark:border-gray-600 px-5 py-3 rounded-xl hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 font-semibold text-md backdrop-blur-sm  ${
                  theme == "dark" ? "bg-gray-900/50" : "bg-white/50"
                }`}
              >
                <Box className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                <span>Browse Components</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Stats */}

            {/* Code Preview */}
          </div>
        </div>
      </section>

      {/* Features Section */}
    </div>
  );
};

export default Hero;
