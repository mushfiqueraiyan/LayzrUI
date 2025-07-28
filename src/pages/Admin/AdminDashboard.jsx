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
    <div className="p-6  max-w-5xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 "> + Add New UI Component</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            {...register("title", { required: "Title is required" })}
            placeholder="e.g. Simple Button"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            placeholder="Short description of the component"
            className="w-full p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium mb-1">Category</label>
          <select
            {...register("category", { required: "Please select a category" })}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Select Category --</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">
              {errors.category.message}
            </p>
          )}
        </div>

        {/* Section */}
        <div>
          <label className="block font-medium mb-1">Section</label>
          <select
            {...register("section", { required: "Please select a section" })}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Select Section --</option>
            {sections.map((sec) => (
              <option key={sec} value={sec}>
                {sec}
              </option>
            ))}
          </select>
          {errors.section && (
            <p className="text-red-500 text-sm mt-1">
              {errors.section.message}
            </p>
          )}
        </div>

        {/* Code Editor (Textarea) */}
        <div>
          <label className="block font-medium mb-1">Component Code</label>
          <textarea
            {...register("code", { required: "Code is required" })}
            placeholder="<button>Demo Button</button>"
            rows={8}
            className="w-full p-3 border rounded-lg roboto-mono  bg-gray-900 text-green-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.code && (
            <p className="text-red-500 text-sm mt-1">{errors.code.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
        >
          💾 Save Component
        </button>
      </form>
    </div>
  );
}
