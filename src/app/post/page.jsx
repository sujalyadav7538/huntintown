/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import {
  FiMapPin,
  FiUploadCloud,
  FiPhone,
  FiMessageSquare,
} from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";

export default function PostPage() {
  const [contactMethod, setContactMethod] = useState("whatsapp");

  const [formData, setFormData] = useState({
    requirement: "",
    category: "",
    budget: "",
    timeline: "",
    location: "",
    images: [],
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    setFormData((prev) => ({
      ...prev,
      images: files,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      ...formData,
      contactMethod,
    });
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">
            Post Requirement
          </h1>

          <p className="text-gray-400 mt-2">
            Tell the community what you're looking for.
          </p>
        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="bg-[#111111] border border-gray-800 rounded-3xl p-6 md:p-8"
        >
          {/* Requirement */}

          <div className="mb-6">
            <label className="block text-white font-medium mb-3">
              What do you need?
            </label>

            <textarea
              name="requirement"
              value={formData.requirement}
              onChange={handleChange}
              maxLength={500}
              rows={5}
              placeholder="Describe your requirement..."
              className="
                w-full
                bg-[#1a1a1a]
                border
                border-gray-800
                rounded-xl
                p-4
                text-white
                resize-none
                focus:outline-none
                focus:border-red-500
              "
            />

            <p className="text-right text-xs text-gray-500 mt-2">
              {formData.requirement.length}/500
            </p>
          </div>

          {/* Category */}

          <div className="mb-6">
            <label className="block text-white font-medium mb-3">
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="
                w-full
                bg-[#1a1a1a]
                border
                border-gray-800
                rounded-xl
                p-4
                text-white
              "
            >
              <option value="">Select category</option>
              <option>Home & Living</option>
              <option>Interior Design</option>
              <option>Education</option>
              <option>Fitness</option>
              <option>Repairs</option>
              <option>Transportation</option>
            </select>
          </div>

          {/* Budget + Timeline */}

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-white font-medium mb-3">
                Budget
              </label>

              <input
                type="number"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="Enter budget"
                className="
                  w-full
                  bg-[#1a1a1a]
                  border
                  border-gray-800
                  rounded-xl
                  p-4
                  text-white
                "
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-3">
                Timeline
              </label>

              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="
                  w-full
                  bg-[#1a1a1a]
                  border
                  border-gray-800
                  rounded-xl
                  p-4
                  text-white
                "
              >
                <option value="">Select timeline</option>
                <option>Today</option>
                <option>Within 3 Days</option>
                <option>Within 1 Week</option>
                <option>Within 1 Month</option>
              </select>
            </div>
          </div>

          {/* Location */}

          <div className="mb-6">
            <label className="block text-white font-medium mb-3">
              Location
            </label>

            <div className="relative">
              <FiMapPin className="absolute left-4 top-4 text-gray-500" />

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter location"
                className="
                  w-full
                  bg-[#1a1a1a]
                  border
                  border-gray-800
                  rounded-xl
                  pl-11
                  pr-4
                  py-4
                  text-white
                "
              />
            </div>
          </div>

          {/* Upload */}

          <div className="mb-6">
            <label className="block text-white font-medium mb-3">
              Add Images (optional)
            </label>

            <label
              className="
                block
                border-2
                border-dashed
                border-gray-700
                rounded-2xl
                p-10
                cursor-pointer
                hover:border-red-500
                transition-colors
              "
            >
              <div className="flex flex-col items-center">
                <FiUploadCloud
                  size={32}
                  className="text-gray-500"
                />

                <p className="text-gray-400 mt-3">
                  Upload Images
                </p>
              </div>

              <input
                type="file"
                multiple
                hidden
                onChange={handleImageUpload}
              />
            </label>

            {formData.images.length > 0 && (
              <p className="text-sm text-green-500 mt-3">
                {formData.images.length} image(s) selected
              </p>
            )}
          </div>

          {/* Contact Method */}

          <div className="mb-8">
            <label className="block text-white font-medium mb-3">
              Contact Method
            </label>

            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setContactMethod("whatsapp")}
                className={`p-4 rounded-xl border ${
                  contactMethod === "whatsapp"
                    ? "border-green-500 bg-green-500/10"
                    : "border-gray-800"
                }`}
              >
                <FaWhatsapp className="mx-auto text-xl text-green-500" />
              </button>

              <button
                type="button"
                onClick={() => setContactMethod("phone")}
                className={`p-4 rounded-xl border ${
                  contactMethod === "phone"
                    ? "border-red-500 bg-red-500/10"
                    : "border-gray-800"
                }`}
              >
                <FiPhone className="mx-auto text-xl text-white" />
              </button>

              <button
                type="button"
                onClick={() => setContactMethod("chat")}
                className={`p-4 rounded-xl border ${
                  contactMethod === "chat"
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-gray-800"
                }`}
              >
                <FiMessageSquare className="mx-auto text-xl text-white" />
              </button>
            </div>
          </div>

          {/* Submit */}

          <button
            type="submit"
            className="
              w-full
              bg-red-600
              hover:bg-red-700
              transition-colors
              text-white
              py-4
              rounded-xl
              font-semibold
            "
          >
            Post Requirement
          </button>
        </form>
      </div>
    </main>
  );
}