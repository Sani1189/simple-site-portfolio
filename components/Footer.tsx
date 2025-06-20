"use client"

export default function Footer() {
  return (
    <footer className="bg-black dark:bg-gray-900 mx-[5px] rounded-[20px] py-12 sm:py-16 px-[5px] relative -my-10 transition-colors duration-300">
      <div className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Layout */}
          <div className="flex flex-col lg:flex-row mb-12 sm:mb-16">
            {/* Left Side - DEVLOP.ME */}
            <div className="lg:w-[30%] mb-8 lg:mb-0 animate-fadeInUp text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-lime-400 hover:text-lime-300 transition-colors duration-300 cursor-pointer">
                DEVLOP.ME
              </h3>
            </div>

            {/* Right Side */}
            <div className="lg:w-[70%]">
              {/* As you can - Large Text */}
              <div className="text-center lg:text-right mb-8 sm:mb-12 animate-fadeInUp animation-delay-200">
                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[96px] font-bold text-white dark:text-gray-100 italic leading-tight hover:text-gray-200 dark:hover:text-white transition-colors duration-300 cursor-pointer">
                  As you can
                </h2>
              </div>

              {/* Content Grid - Responsive */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                {/* Say Hello + Call Section */}
                <div className="animate-fadeInUp animation-delay-400 text-center sm:text-left">
                  {/* Say hello */}
                  <div className="mb-6 sm:mb-8">
                    <h4 className="text-gray-400 dark:text-gray-500 font-medium mb-3 sm:mb-4 text-sm sm:text-base tracking-wide">
                      Say hello
                    </h4>
                    <div className="space-y-2">
                      <p className="text-white dark:text-gray-200 text-sm sm:text-base hover:text-lime-400 transition-all duration-300 cursor-pointer hover:translate-x-2 transform">
                        HELLO@DEVLOP.ME.COM
                      </p>
                      <p className="text-white dark:text-gray-200 text-sm sm:text-base hover:text-lime-400 transition-all duration-300 cursor-pointer hover:translate-x-2 transform">
                        MAHBUBUL@ME.COM
                      </p>
                    </div>
                  </div>

                  {/* Call */}
                  <div>
                    <h4 className="text-gray-400 dark:text-gray-500 font-medium mb-3 sm:mb-4 text-sm sm:text-base tracking-wide">
                      Call
                    </h4>
                    <div className="space-y-2">
                      <p className="text-white dark:text-gray-200 text-sm sm:text-base hover:text-lime-400 transition-all duration-300 cursor-pointer hover:translate-x-2 transform">
                        +784549 4981 00
                      </p>
                      <p className="text-white dark:text-gray-200 text-sm sm:text-base hover:text-lime-400 transition-all duration-300 cursor-pointer hover:translate-x-2 transform">
                        +8845 0100 211
                      </p>
                    </div>
                  </div>
                </div>

                {/* Menu Section */}
                <div className="animate-fadeInUp animation-delay-600 text-center sm:text-left">
                  <h4 className="text-gray-400 dark:text-gray-500 font-medium mb-3 sm:mb-4 text-sm sm:text-base tracking-wide">
                    Menu
                  </h4>
                  <div className="space-y-2">
                    <p className="text-white dark:text-gray-200 text-sm sm:text-base hover:text-lime-400 transition-all duration-300 cursor-pointer hover:translate-x-2 transform">
                      HOME
                    </p>
                    <p className="text-white dark:text-gray-200 text-sm sm:text-base hover:text-lime-400 transition-all duration-300 cursor-pointer hover:translate-x-2 transform">
                      ABOUT
                    </p>
                    <p className="text-white dark:text-gray-200 text-sm sm:text-base hover:text-lime-400 transition-all duration-300 cursor-pointer hover:translate-x-2 transform">
                      PORTFOLIO
                    </p>
                    <p className="text-white dark:text-gray-200 text-sm sm:text-base hover:text-lime-400 transition-all duration-300 cursor-pointer hover:translate-x-2 transform">
                      BLOG
                    </p>
                  </div>
                </div>

                {/* Social Section */}
                <div className="animate-fadeInUp animation-delay-800 text-center sm:text-left">
                  <h4 className="text-gray-400 dark:text-gray-500 font-medium mb-3 sm:mb-4 text-sm sm:text-base tracking-wide">
                    Social
                  </h4>
                  <div className="space-y-2">
                    <p className="text-white dark:text-gray-200 text-sm sm:text-base hover:text-lime-400 transition-all duration-300 cursor-pointer hover:translate-x-2 transform">
                      TWITTER
                    </p>
                    <p className="text-white dark:text-gray-200 text-sm sm:text-base hover:text-lime-400 transition-all duration-300 cursor-pointer hover:translate-x-2 transform">
                      INSTAGRAM
                    </p>
                    <p className="text-white dark:text-gray-200 text-sm sm:text-base hover:text-lime-400 transition-all duration-300 cursor-pointer hover:translate-x-2 transform">
                      FACEBOOK
                    </p>
                    <p className="text-white dark:text-gray-200 text-sm sm:text-base hover:text-lime-400 transition-all duration-300 cursor-pointer hover:translate-x-2 transform">
                      BEHANCE
                    </p>
                    <p className="text-white dark:text-gray-200 text-sm sm:text-base hover:text-lime-400 transition-all duration-300 cursor-pointer hover:translate-x-2 transform">
                      DRIBBBLE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 dark:border-gray-700 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <div className="animate-fadeInUp animation-delay-1200">
                <p className="text-white dark:text-gray-200 text-sm sm:text-base lg:text-lg font-medium hover:text-lime-400 transition-colors duration-300 cursor-pointer">
                  BESNIK
                </p>
              </div>

              <div className="animate-fadeInUp animation-delay-1400">
                <p className="text-gray-400 dark:text-gray-500 text-xs sm:text-sm hover:text-white dark:hover:text-gray-200 transition-colors duration-300 cursor-pointer">
                  © devlop.me 2022
                </p>
              </div>

              <div className="animate-fadeInUp animation-delay-1600">
                <p className="text-gray-400 dark:text-gray-500 text-xs sm:text-sm hover:text-white dark:hover:text-gray-200 transition-colors duration-300 cursor-pointer">
                  PRIVACY - TERMS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
