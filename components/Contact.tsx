"use client"

import type React from "react"

import { useState } from "react"
import { Send, Mail, Facebook, Instagram, Twitter } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  })

  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 lg:py-32 transition-colors duration-300 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/bg2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Side - Content */}
          <div className="animate-fadeInUp text-center lg:text-left">
            {/* Contact Badge */}
            <div className="inline-flex items-center bg-white dark:bg-gray-800 text-black dark:text-white border border-black dark:border-white px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-8 sm:mb-12 transition-colors duration-300">
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-black dark:border-white mr-2 sm:mr-3 flex items-center justify-center">
                <svg
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-black dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <span className="text-sm sm:text-base font-medium">Contact</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-bold text-black dark:text-white leading-tight mb-6 sm:mb-8 transition-colors duration-300">
              Interested in
              <br />
              <span className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 inline-block">work</span>{" "}
              together?
            </h2>

            {/* Description */}
            <p className="text-black dark:text-white text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-12 max-w-lg mx-auto lg:mx-0 transition-colors duration-300">
              We start every new client interaction with an in-depth discovery call where we get to know each other
            </p>

            {/* Schedule Call Button */}
            <button className="bg-white dark:bg-gray-800 border-2 border-black dark:border-white text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-full inline-flex items-center group hover:scale-105 transition-all duration-200">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:scale-110 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Schedule a Call
            </button>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-black dark:bg-gray-900 rounded-2xl p-6 sm:p-8 lg:p-12 animate-fadeInUp animation-delay-200 transition-colors duration-300">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent text-white text-base sm:text-lg py-3 sm:py-4 border-0 border-b-2 border-gray-600 dark:border-gray-500 focus:border-lime-400 focus:outline-none placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-300"
                  required
                />
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-lime-400 transition-all duration-300 ${
                    focusedField === "name" || formData.name ? "w-full" : "w-0"
                  }`}
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent text-white text-base sm:text-lg py-3 sm:py-4 border-0 border-b-2 border-gray-600 dark:border-gray-500 focus:border-lime-400 focus:outline-none placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-300"
                  required
                />
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-lime-400 transition-all duration-300 ${
                    focusedField === "email" || formData.email ? "w-full" : "w-0"
                  }`}
                />
              </div>

              {/* Project Field */}
              <div className="relative">
                <textarea
                  name="project"
                  placeholder="Describe your project"
                  rows={3}
                  value={formData.project}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("project")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent text-white text-base sm:text-lg py-3 sm:py-4 border-0 border-b-2 border-gray-600 dark:border-gray-500 focus:border-lime-400 focus:outline-none placeholder-gray-400 dark:placeholder-gray-500 resize-none transition-colors duration-300"
                  required
                />
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-lime-400 transition-all duration-300 ${
                    focusedField === "project" || formData.project ? "w-full" : "w-0"
                  }`}
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  className="flex items-center justify-center bg-black dark:bg-gray-800 border-2 border-white dark:border-gray-300 text-white dark:text-gray-100 hover:bg-gray-900 dark:hover:bg-gray-700 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-full transition-all duration-200 hover:scale-105 group"
                >
                  <Send className="w-3 h-3 sm:w-4 sm:h-4 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                  Send
                </button>
                <span className="text-gray-400 dark:text-gray-500 self-center text-sm sm:text-base hidden sm:block">
                  or
                </span>
                <button
                  type="button"
                  className="flex items-center justify-center bg-black dark:bg-gray-800 border-2 border-white dark:border-gray-300 text-white dark:text-gray-100 hover:bg-gray-900 dark:hover:bg-gray-700 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-medium rounded-full transition-all duration-200 hover:scale-105 group"
                >
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                  Contact me
                </button>
              </div>
            </form>

            {/* Social Section */}
            <div className="flex items-center justify-between mt-8 sm:mt-12 pt-6 sm:pt-8">
              <p className="text-gray-400 dark:text-gray-500 text-sm sm:text-base">@williamrey</p>
              <div className="flex space-x-3 sm:space-x-4">
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white dark:text-gray-300 hover:text-lime-400 transition-colors duration-200 hover:scale-110 transform"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white dark:text-gray-300 hover:text-lime-400 transition-colors duration-200 hover:scale-110 transform"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-white dark:text-gray-300 hover:text-lime-400 transition-colors duration-200 hover:scale-110 transform"
                >
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
