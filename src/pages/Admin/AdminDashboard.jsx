import React from "react";
import { useForm } from "react-hook-form";

const categories = ["Normal Button", "Social Button", "Navbar", "Card"];
const sections = ["Button", "Form", "Layout", "Modal"];

export default function AdminDashboard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    // Submit to your database or backend
  };

  return (
    <div className="p-6 md:p-12 max-w-5xl mx-auto my-16 bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center tracking-tight">
        Add New Component
      </h2>
      <p className="text-gray-400 mb-10 text-center max-w-prose mx-auto">
        Contribute to our library by adding a new UI component. Provide a clear
        title, a brief description, and a well-formatted code snippet.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8"
      >
        {/* Title */}
        <div className="flex flex-col">
          <label htmlFor="title" className="mb-2 font-medium text-gray-300">
            Component Title
          </label>
          <input
            id="title"
            {...register("title", { required: "Title is required" })}
            placeholder="e.g. Simple Gradient Button"
            className="p-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
          />
          {errors.title && (
            <p className="text-red-400 text-sm mt-2">{errors.title.message}</p>
          )}
        </div>

        {/* Category */}
        <div className="flex flex-col">
          <label htmlFor="category" className="mb-2 font-medium text-gray-300">
            Category
          </label>
          <div className="relative">
            <select
              id="category"
              {...register("category", {
                required: "Please select a category",
              })}
              className="p-2 w-full bg-gray-800 border border-gray-700 rounded-lg text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
            >
              <option value="" className="bg-gray-800 text-gray-400">
                -- Select a Category --
              </option>
              {categories.map((cat) => (
                <option
                  key={cat}
                  value={cat}
                  className="bg-gray-800 text-white"
                >
                  {cat}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          {errors.category && (
            <p className="text-red-400 text-sm mt-2">
              {errors.category.message}
            </p>
          )}
        </div>

        {/* Section */}
        <div className="flex flex-col md:col-span-1">
          <label htmlFor="section" className="mb-2 font-medium text-gray-300">
            Section
          </label>
          <div className="relative">
            <select
              id="section"
              {...register("section", { required: "Please select a section" })}
              className="p-2 w-full bg-gray-800 border border-gray-700 rounded-lg text-white appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
            >
              <option value="" className="bg-gray-800 text-gray-400">
                -- Select a Section --
              </option>
              {sections.map((sec) => (
                <option
                  key={sec}
                  value={sec}
                  className="bg-gray-800 text-white"
                >
                  {sec}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          {errors.section && (
            <p className="text-red-400 text-sm mt-2">
              {errors.section.message}
            </p>
          )}
        </div>

        {/* Description */}
        <div className="md:col-span-2 flex flex-col">
          <label
            htmlFor="description"
            className="mb-2 font-medium text-gray-300"
          >
            Description
          </label>
          <textarea
            id="description"
            {...register("description", {
              required: "Description is required",
            })}
            placeholder="A short, concise description of the component's function and features."
            rows={4}
            className="p-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
          />
          {errors.description && (
            <p className="text-red-400 text-sm mt-2">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Code Editor */}
        <div className="md:col-span-2 flex flex-col">
          <label htmlFor="code" className="mb-2 font-medium text-gray-300">
            Component Code
          </label>
          <textarea
            id="code"
            {...register("code", { required: "Code is required" })}
            placeholder={`<button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click Me</button>`}
            rows={8}
            className="p-4 bg-gray-800 border border-gray-700 text-green-400 font-mono rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
          />
          {errors.code && (
            <p className="text-red-400 text-sm mt-2">{errors.code.message}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="md:col-span-2 mt-4 flex justify-end space-x-4">
          <button
            type="button"
            className="py-3 px-6 text-gray-400 font-semibold rounded-lg hover:text-white hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-700"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
          >
            <span className="flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Save Component
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
