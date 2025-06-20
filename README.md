# DEVLOP.ME - Developer Portfolio

A pixel-perfect recreation of the DEVLOP.ME portfolio design built with Next.js 14 and Tailwind CSS.

## 🚀 Features

- **100% Pixel-Perfect Design** - Exact recreation of the provided design
- **Dark/Light Mode Toggle** - With localStorage persistence
- **Fully Responsive** - Mobile, tablet, and desktop optimized
- **Modern Tech Stack** - Next.js 14, React 18, TypeScript, Tailwind CSS
- **Component-Based Architecture** - Reusable and maintainable components
- **Smooth Animations** - Fade-in effects, hover states, and transitions
- **Accessibility** - ARIA roles, keyboard navigation, focus management
- **SEO Optimized** - Meta tags, semantic HTML structure

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Animations**: CSS animations with Tailwind utilities

## 📁 Project Structure

\`\`\`
devlop-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── AtomIcon.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── SocialIcons.tsx
│   │   └── Textarea.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Skills.tsx
│   └── WorkProcess.tsx
├── hooks/
│   └── useTheme.ts
├── utils/
│   └── cn.ts
├── package.json
├── tailwind.config.js
└── README.md
\`\`\`

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd devlop-portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 🎨 Design Features

### Color Palette
- **Primary**: Lime Green (#84cc16)
- **Secondary**: Yellow (#eab308)
- **Dark**: Black (#000000)
- **Light**: White (#ffffff)
- **Gray Variants**: Multiple shades for dark mode

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Theme Configuration
The theme system is built with:
- CSS custom properties for colors
- Tailwind's dark mode class strategy
- localStorage persistence
- System preference detection

### Adding New Sections
1. Create component in `components/`
2. Import and add to `app/page.tsx`
3. Update navigation in `components/Navbar.tsx`

### Styling Guidelines
- Use Tailwind utility classes
- Follow the existing color scheme
- Maintain responsive design patterns
- Add hover states and transitions

## 📱 Responsive Design

The portfolio is fully responsive with:
- **Mobile-first approach**
- **Flexible grid layouts**
- **Adaptive typography**
- **Touch-friendly interactions**
- **Optimized images and assets**

## ♿ Accessibility

- **ARIA labels** for interactive elements
- **Keyboard navigation** support
- **Focus indicators** for all interactive elements
- **Semantic HTML** structure
- **Screen reader** friendly content
- **Color contrast** compliance

## 🎭 Animations

- **Fade-in on scroll** for sections
- **Hover effects** on buttons and cards
- **Smooth transitions** between theme modes
- **Loading animations** for interactive elements
- **Custom atom icon** animation in skills section

## 🔍 SEO Features

- **Meta tags** for social sharing
- **Structured data** markup
- **Semantic HTML** elements
- **Optimized images** with alt text
- **Clean URL** structure

## 📄 License

This project is for portfolio demonstration purposes.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

For questions or support, please contact:
- **Email**: hello@devlop.me.com
- **Twitter**: @williamrey

---

Built with ❤️ using Next.js and Tailwind CSS
