"use client"

export default function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 lg:py-32 transition-colors duration-300 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/bg2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex justify-center sm:justify-end mb-8 sm:mb-12">
          <div className="inline-flex items-center bg-white dark:bg-gray-800 text-black dark:text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full animate-fadeInUp border border-black dark:border-white transition-colors duration-300">
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
            <span className="text-sm sm:text-base font-medium">About</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] font-bold text-black dark:text-white leading-tight animate-fadeInUp animation-delay-200 transition-colors duration-300">
            I've been{" "}
            <span className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 inline-block">Developing</span>
            <br />
            Websites since{" "}
            <span className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 inline-block">2013</span>
          </h2>
          <p className="text-black dark:text-white text-sm sm:text-base lg:text-xl max-w-3xl mx-auto mt-6 sm:mt-8 animate-fadeInUp animation-delay-400 leading-relaxed transition-colors duration-300">
            We start every new client interaction with an in-depth discovery call where we get to know each other and
            recommend the best course of action.
          </p>
        </div>

        {/* Companies Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mt-12 sm:mt-20">
          {/* Previously Worked On Text */}
          <div className="mb-8 lg:mb-0 animate-fadeInUp animation-delay-600 text-center lg:text-left">
            <h3 className="text-black dark:text-white font-bold text-base sm:text-lg lg:text-2xl leading-tight transition-colors duration-300">
              PREVIOUSLY
              <br />
              WORKED ON
            </h3>
          </div>

          {/* Connected Bubbles - Responsive */}
          <div className="relative w-full max-w-[700px] h-[200px] sm:h-[250px] mx-auto animate-fadeInUp animation-delay-800">
            {/* awwwards - Black bubble */}
            <div className="absolute top-0 left-[10%] sm:left-[60px] rotate-[-18deg] bg-black dark:bg-white text-white dark:text-black px-3 sm:px-6 py-2 sm:py-3 rounded-full hover:scale-110 hover:rotate-[-22deg] transition-all duration-300 shadow-lg cursor-pointer group">
              <span className="text-xs sm:text-sm lg:text-base font-medium whitespace-nowrap">awwwards.</span>
            </div>

            {/* CSSWINNER - White bubble */}
            <div className="absolute top-[60px] sm:top-[80px] left-0 rotate-0 bg-white dark:bg-gray-800 text-black dark:text-white border border-black dark:border-white px-3 sm:px-6 py-2 sm:py-3 rounded-full hover:scale-110 hover:rotate-[3deg] transition-all duration-300 shadow-lg cursor-pointer group">
              <span className="text-xs sm:text-sm lg:text-base font-medium whitespace-nowrap">CSSWINNER</span>
            </div>

            {/* thoughtworks - White bubble */}
            <div className="absolute top-[70px] sm:top-[90px] left-[30%] sm:left-[220px] rotate-[-10deg] bg-white dark:bg-gray-800 text-black dark:text-white border border-black dark:border-white px-3 sm:px-6 py-2 sm:py-3 rounded-full hover:scale-110 hover:rotate-[-14deg] transition-all duration-300 shadow-lg cursor-pointer group">
              <span className="text-xs sm:text-sm lg:text-base font-medium whitespace-nowrap">/thoughtworks</span>
            </div>

            {/* facebook - White bubble */}
            <div className="absolute top-0 right-[25%] sm:left-[340px] rotate-0 bg-white dark:bg-gray-800 text-black dark:text-white border border-black dark:border-white px-3 sm:px-6 py-2 sm:py-3 rounded-full hover:scale-110 hover:rotate-[3deg] transition-all duration-300 shadow-lg cursor-pointer group">
              <span className="text-xs sm:text-sm lg:text-base font-medium whitespace-nowrap">facebook</span>
            </div>

            {/* AUTODESK - White bubble */}
            <div className="absolute top-[100px] sm:top-[130px] right-[20%] sm:left-[400px] rotate-[5deg] bg-white dark:bg-gray-800 text-black dark:text-white border border-black dark:border-white px-3 sm:px-6 py-2 sm:py-3 rounded-full hover:scale-110 hover:rotate-[8deg] transition-all duration-300 shadow-lg cursor-pointer group">
              <span className="text-xs sm:text-sm lg:text-base font-medium whitespace-nowrap">AUTODESK</span>
            </div>

            {/* CSSDesignAwards - White bubble */}
            <div className="absolute top-[20px] right-0 sm:left-[540px] rotate-[20deg] bg-white dark:bg-gray-800 text-black dark:text-white border border-black dark:border-white px-2 sm:px-6 py-2 sm:py-3 rounded-full hover:scale-110 hover:rotate-[25deg] transition-all duration-300 shadow-lg cursor-pointer group">
              <span className="text-xs sm:text-sm font-medium whitespace-nowrap">CSSDesignAwards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
