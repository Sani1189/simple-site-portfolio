"use client"

export default function SocialIcons() {
  const socialLinks = [
    { name: "Instagram", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "LinkedIn", href: "#" },
  ]

  return (
    <div className="hidden lg:flex flex-col items-center space-y-6 fixed left-8 top-1/2 transform -translate-y-1/2 z-10">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          className="w-8 h-8 bg-black dark:bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 group"
          aria-label={social.name}
        >
          <div className="w-4 h-4 bg-white dark:bg-black rounded-full group-hover:bg-lime-400 transition-colors duration-200"></div>
        </a>
      ))}
      <div className="w-px h-20 bg-black dark:bg-white"></div>
    </div>
  )
}
