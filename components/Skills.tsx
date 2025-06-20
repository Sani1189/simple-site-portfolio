"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Card from "@/components/ui/card"
import Image from "next/image"

export default function Skills() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const skills = [
    {
      title: "HTML & CSS",
      description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
      isPrimary: true,
    },
    {
      title: "Javascript",
      description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
      isPrimary: true,
    },
    {
      title: "Webflow",
      description: "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
      isPrimary: false,
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % skills.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + skills.length) % skills.length)
  }

  return (
    <section className="bg-black dark:bg-gray-900 mx-[10px] rounded-[20px] py-12 sm:py-20 px-[5px] relative -my-10 transition-colors duration-300">
      {/* Main Skills Container */}
      <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="inline-flex items-center bg-gray-800 dark:bg-gray-700 text-white dark:text-gray-200 px-4 py-2 rounded-full self-center lg:self-start animate-fadeInUp transition-colors duration-300">
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full border border-white dark:border-gray-300 mr-2 flex items-center justify-center">
                <svg
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-white dark:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <span className="text-sm sm:text-base font-medium">Why Choose Me</span>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-8">
              {/* Left: Heading */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[58px] font-bold text-white dark:text-gray-100 leading-tight animate-fadeInUp animation-delay-200 transition-colors duration-300">
                  My Extensive
                  <br />
                  List of Skills
                </h2>
              </div>

              {/* Right: Paragraph + Arrows */}
              <div className="lg:w-1/2 flex flex-col items-center lg:items-end text-center lg:text-right">
                <div className="mb-6 sm:mb-8">
                  <p className="text-gray-300 dark:text-gray-400 text-sm sm:text-base lg:text-lg max-w-md animate-fadeInUp animation-delay-400 leading-relaxed transition-colors duration-300">
                    Building the world’s best marketing. Your trusted partner for strategy, design, and dev.
                  </p>
                </div>

                {/* Navigation Arrows */}
                <div className="flex space-x-4 animate-fadeInUp animation-delay-600">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-600 dark:border-gray-500 text-white dark:text-gray-200 hover:bg-gray-800 dark:hover:bg-gray-700 hover:border-gray-500 dark:hover:border-gray-400 transition-all duration-300 flex items-center justify-center group"
                    aria-label="Previous skill"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-200" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-600 dark:border-gray-500 text-white dark:text-gray-200 hover:bg-gray-800 dark:hover:bg-gray-700 hover:border-gray-500 dark:hover:border-gray-400 transition-all duration-300 flex items-center justify-center group"
                    aria-label="Next skill"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          </div>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
  {skills.map((skill, index) => (
    <Card
      key={index}
      className={`bg-gray-900 dark:bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-2xl transition-all duration-500 ease-out cursor-pointer group  hover:shadow-2xl hover:shadow-lime-400/10 animate-fadeInUp`}
      style={{
        animationDelay: `${index * 200 + 800}ms`,
        transformOrigin: "center center",
      }}
    >
      <div className="hover:scale-105 hover:rotate-[7deg] transition-transform duration-300 ease-in-out">

      {/* Skill icon */}
      <div className="mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
        <Image
          src="/images/react-icon.png"
          alt="React Icon"
          width={96}
          height={96}
          className=""
        />
      </div>

      {/* Skill title */}
      <h3
        className={`font-bold text-white dark:text-gray-100 mb-3 sm:mb-4 transition-colors duration-300 group-hover:text-lime-400 ${
          skill.isPrimary
            ? "text-lg sm:text-xl lg:text-2xl"
            : "text-base sm:text-lg lg:text-xl"
        }`}
      >
        {skill.title}
      </h3>

      {/* Skill description */}
      <p className="text-gray-400 dark:text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed group-hover:text-gray-300 dark:group-hover:text-gray-400 transition-colors duration-300">
        {skill.description}
      </p>
      </div>
    </Card>
  ))}
</div>

        </div>
      </div>
    </section>
  )
}
