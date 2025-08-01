# Portfolio - Creative Developer

A stunning, modern portfolio website built with Next.js and enhanced with cutting-edge animation libraries.

## 🚀 Features

- **Next.js 14** with App Router
- **Tailwind CSS** for styling
- **Framer Motion** for smooth animations
- **GSAP** for scroll-based effects
- **Three.js & React Three Fiber** for 3D elements
- **Lottie** for vector animations
- **Responsive Design** for all devices
- **Vercel Ready** for deployment

## 📦 Dependencies

### Core
- `next` - React framework
- `react` - UI library
- `react-dom` - React DOM rendering

### Styling
- `tailwindcss` - Utility-first CSS framework
- `@tailwindcss/postcss` - PostCSS plugin

### Animations
- `framer-motion` - Production-ready motion library
- `gsap` - Professional-grade animation library
- `lottie-react` - Lottie animations for React

### 3D Graphics
- `three` - 3D graphics library
- `@react-three/fiber` - React renderer for Three.js
- `@react-three/drei` - Useful helpers for React Three Fiber

### Development
- `eslint` - Code linting
- `eslint-config-next` - Next.js ESLint configuration

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.js       # Root layout
│   ├── page.js         # Home page
│   └── globals.css     # Global styles
├── components/         # Reusable components
│   ├── Layout.jsx      # Main layout with header/footer
│   └── Section.jsx     # Section wrapper component
├── sections/           # Page sections
│   └── HeroSection.jsx # Hero section with 3D elements
├── hooks/              # Custom React hooks
│   ├── useScrollAnimation.js  # GSAP scroll animations
│   └── useThreeAnimation.js   # Three.js animations
├── styles/             # Additional styles
└── assets/             # Static assets
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors & Theme
The project uses Tailwind CSS with a custom color palette. You can modify colors in `tailwind.config.js`.

### Animations
- **Framer Motion**: Used for component animations and page transitions
- **GSAP**: Used for scroll-triggered animations and complex sequences
- **Three.js**: Used for 3D elements and interactive graphics
- **Lottie**: Used for vector animations and micro-interactions

### Adding New Sections
1. Create a new component in `src/sections/`
2. Import and use the `Section` component for consistent spacing
3. Add your content with proper animations

### Custom Hooks
- `useScrollAnimation`: Provides GSAP scroll animation utilities
- `useThreeAnimation`: Provides Three.js animation utilities

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project is compatible with any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized for all metrics
- **Bundle Size**: Optimized with Next.js built-in optimizations
- **Images**: Optimized with Next.js Image component
- **Fonts**: Optimized with Next.js font optimization

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

Built with ❤️ using Next.js and modern web technologies.
