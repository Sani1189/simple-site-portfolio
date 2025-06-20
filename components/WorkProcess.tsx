"use client"

import Card from "@/components/ui/card"

export default function WorkProcess() {
  const processes = [
    {
      title: "Discovery",
      description:
        "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.",
      bgColor: "bg-gray-900 dark:bg-gray-800",
      badgeColor: "bg-cyan-300 dark:bg-cyan-400",
      badgeTextColor: "text-black dark:text-gray-900",
      textColor: "text-white",
    },
    {
      title: "Strategy",
      description:
        "Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth code reviews we're here to set the stage for success.",
      bgColor: "bg-gray-900 dark:bg-gray-800",
      badgeColor: "bg-black dark:bg-gray-900",
      badgeTextColor: "text-white dark:text-gray-100",
      textColor: "text-white",
    },
    {
      title: "Design",
      description:
        "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval.",
      bgColor: "bg-gray-900 dark:bg-gray-800",
      badgeColor: "bg-cyan-300 dark:bg-cyan-400",
      badgeTextColor: "text-black dark:text-gray-900",
      textColor: "text-white",
    },
    {
      title: "Build",
      description:
        "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
      bgColor: "bg-gray-900 dark:bg-gray-800",
      badgeColor: "bg-cyan-300 dark:bg-cyan-400",
      badgeTextColor: "text-black dark:text-gray-900",
      textColor: "text-white",
    },
  ];

  return (
    <section className="bg-black dark:bg-gray-900 mx-[5px] rounded-[20px] py-12 sm:py-20 px-[5px] relative -my-10 transition-colors duration-300">
      <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">

          <div className="mb-12 sm:mb-16 w-full flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4">

            <div className="w-full sm:w-[20%] flex sm:justify-start justify-center">
              <div className="flex items-center gap-1">

                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white dark:border-gray-300 bg-transparent flex items-center justify-center">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-white dark:text-gray-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <span className="ml-[-4px] border border-white dark:border-gray-300 rounded-full px-4 py-2 text-white dark:text-gray-200 text-sm sm:text-base font-medium bg-transparent">
                  Work Process
                </span>
              </div>
            </div>

            <div className="w-full sm:w-[60%] flex justify-center sm:justify-center text-center sm:text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold text-white dark:text-gray-100 leading-tight animate-fadeInUp animation-delay-200 transition-colors duration-300">
                My Work Process
              </h2>
            </div>

            <div className="hidden sm:block w-[20%]"></div>
          </div>

          {/* Process Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {processes.map((process, index) => (
              <Card
                key={index}
                className={`${process.bgColor} p-4 sm:p-6 lg:p-8 rounded-2xl transition-all duration-500 ease-out cursor-pointer group
                  hover:bg-lime-400
                  hover:text-gray-900
                  hover:scale-105
                  hover:rotate-[6deg]
                  hover:shadow-2xl
                  dark:hover:bg-lime-400
                  dark:hover:text-gray-900
                  dark:hover:scale-105
                  dark:hover:rotate-[6deg]
                  dark:hover:shadow-2xl
                `}
                style={{
                  animationDelay: `${index * 200 + 400}ms`,
                  transformOrigin: "center center",
                }}
              >
                <div className="flex flex-col sm:flex-row justify-between items-start mb-4 sm:mb-6 gap-4">
                  <div
                    className={`${process.badgeColor} ${process.badgeTextColor} px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base font-medium group-hover:scale-110 transition-transform duration-300`}
                  >
                    {process.title}
                  </div>
                  <button
                    className="text-white transition-colors duration-300 flex items-center space-x-2 group-hover:text-gray-900"
                  >
                    <span className="text-sm sm:text-base font-medium">Read More</span>
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <p
                  className="text-white text-sm sm:text-base lg:text-lg leading-relaxed transition-colors duration-300 group-hover:text-gray-900"
                >
                  {process.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
