# Rishitha Fernando - Portfolio Website

A modern, interactive portfolio website built with React, TypeScript, and Material UI. This project serves as both a digital CV and a showcase of full-stack development skills.

## 🚀 Features

- **Modern UI/UX**: Built with Material UI and Framer Motion for smooth animations
- **Fully Responsive**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between themes for better accessibility
- **TypeScript**: Fully typed for better development experience and code quality
- **Performance Optimized**: Built with Vite for lightning-fast development and builds
- **SEO Ready**: Meta tags and semantic HTML for better search engine visibility

## 🛠️ Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **UI Library**: Material UI (MUI) v5
- **Animations**: Framer Motion
- **Icons**: Material UI Icons
- **Styling**: Emotion (CSS-in-JS)
- **Fonts**: Inter font family

## 📁 Project Structure

```
portfolio-cv/
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Layout.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Skills.tsx
│   │       ├── Experience.tsx
│   │       ├── Education.tsx
│   │       └── Contact.tsx
│   ├── data/
│   │   └── cvData.ts          # Your CV information
│   ├── theme/
│   │   └── theme.ts           # MUI theme configuration
│   ├── types/
│   │   └── cv.types.ts        # TypeScript type definitions
│   ├── App.tsx                # Main app component
│   └── main.tsx               # Entry point
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd portfolio-cv
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 📝 Customization

### Update Your Information

Edit the file `src/data/cvData.ts` to update your personal information, skills, experience, education, and contact details.

### Customize Theme

Modify `src/theme/theme.ts` to change colors, typography, and component styles:

```typescript
const colors = {
  primary: {
    main: '#2196F3',  // Change primary color
    light: '#64B5F6',
    dark: '#1976D2',
  },
  // ... more color customization
};
```

### Add/Remove Sections

In `src/App.tsx`, you can comment out or add sections:

```typescript
<Layout darkMode={darkMode} onToggleTheme={toggleTheme}>
  <Hero />
  <About />
  <Skills />
  <Experience />
  <Education />
  <Contact />
  {/* Add your new section here */}
</Layout>
```

## 🏗️ Building for Production

```bash
npm run build
```

This will create a `dist` folder with optimized production files.

## 🚀 Deployment

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. New site from Git → Select your repository
4. Build command: `npm run build`
5. Publish directory: `dist`

### Option 3: GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Add base URL in `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

## 📄 Add Your CV PDF

1. Place your CV PDF in the `public` folder as `cv.pdf`
2. The download button will automatically link to it

## 🎨 Color Schemes

The project includes both light and dark themes. You can customize the color schemes in `src/theme/theme.ts`.

### Current Color Palette:
- **Primary**: Blue (#2196F3)
- **Secondary**: Cyan (#00BCD4)
- **Accent**: Pink (#FF4081)

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Breakpoints

- **xs**: 0px - 600px (Mobile)
- **sm**: 600px - 900px (Tablet)
- **md**: 900px - 1200px (Laptop)
- **lg**: 1200px - 1536px (Desktop)
- **xl**: 1536px+ (Large screens)

## 🎯 Next Steps

1. ✅ Install dependencies and run the project
2. ✅ Update `cvData.ts` with your information
3. ✅ Add your CV PDF to the `public` folder
4. ✅ Customize colors/theme if desired
5. ✅ Test responsiveness on different devices
6. ✅ Build and deploy to your preferred platform
7. ✅ Share the link on LinkedIn!

## 🐛 Troubleshooting

### Port already in use
If port 5173 is already in use, Vite will automatically use the next available port.

### Build errors
Make sure all dependencies are installed:
```bash
rm -rf node_modules
npm install
```

### Type errors
Run TypeScript check:
```bash
npx tsc --noEmit
```

## 📞 Support

If you encounter any issues, check:
- Node.js version (should be v18+)
- All dependencies are installed
- No TypeScript errors in your code

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ by Rishitha Fernando
