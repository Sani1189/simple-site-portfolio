"use client"

import { useEffect, useState } from "react"
import Button from "@/components/ui/button"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="pt-16 sm:pt-20 min-h-screen relative overflow-hidden transition-colors duration-300"
      style={{
        backgroundImage: "url('/images/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[78px] font-bold text-black dark:text-white leading-tight transition-colors duration-300">
            Trusted{" "}
            <span className="bg-black dark:bg-white text-white dark:text-black px-2 py-1 my-2 inline-block">Partner</span>{" "}
            for
            <br />
            Your Website{" "}
            <span className="bg-black dark:bg-white text-white dark:text-black px-2 py-1 inline-block">Develop.</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="lg:w-[30%] flex-col items-start flex">
            <div className="flex flex-row items-center space-y-6">
              <div className="text-black dark:text-white text-sm font-medium -rotate-90 tracking-wider uppercase">@williamrey</div>

              <div className="flex flex-col space-y-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer group"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5 text-white dark:text-black group-hover:text-lime-400 transition-colors duration-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                <a
                  href="#"
                  className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer group"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5 text-white dark:text-black group-hover:text-lime-400 transition-colors duration-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                <a
                  href="#"
                  className="w-10 h-10 bg-black dark:bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer group"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5 text-white dark:text-black group-hover:text-lime-400 transition-colors duration-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                 <div className="w-px mx-5  h-20 bg-black dark:bg-white transition-colors duration-300"></div>
              </div>

             
            </div>
          </div>

          <div className="w-full lg:w-[70%]">
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <p className="text-base sm:text-lg text-black dark:text-white mb-3 sm:mb-4 font-medium leading-relaxed transition-colors duration-300">
                Building the worlds best marketing websites for over a decade.
              </p>
              <p className="text-base sm:text-lg text-black dark:text-white mb-6 sm:mb-8 font-medium leading-relaxed transition-colors duration-300">
                Your trusted partner for strategy, design, and dev.
              </p>

              <div className="text-center lg:text-left">
                <Button
                  variant="secondary"
                  className="bg-white dark:bg-gray-800 border-2 border-black dark:border-white text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-full transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3"
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
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
