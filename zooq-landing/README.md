# ZOQQ Landing Page

A modern, responsive landing page built with React, TypeScript, and Tailwind CSS, following a comprehensive design system from Figma.

## 🚀 Features

- **Modern Design System**: Built with a complete color palette, typography, and component library
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **TypeScript**: Full type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Component Architecture**: Reusable, modular components
- **Performance Optimized**: Fast loading and smooth interactions

## 🎨 Design System

### Colors
The project uses a comprehensive color palette from the Figma design:

- **Gray Palette**: 12 shades from white to black
- **Primary Palette**: 12 purple shades for brand colors
- **Rose Palette**: 3 rose/magenta shades
- **Red Palette**: 3 red/coral shades
- **Blue Palette**: 3 blue shades
- **Accent Colors**: Additional colors for highlights and special elements

### Typography
- **Primary Font**: DM Sans (Google Fonts)
- **Secondary Font**: Albert Sans (Google Fonts)
- **Heading Sizes**: H1 (72px), H2 (48px), H3 (32px)
- **Body Text**: Body1 (16px), Body2 (12px)
- **Button Text**: 16px with specific line heights and letter spacing

### Components
- **Buttons**: Primary, Secondary, Icon, Text, and Text with Arrow variants
- **Typography**: Semantic text components with consistent styling
- **Layout**: Header, Footer, and section components
- **Sections**: Hero, Features, Testimonials, and CTA sections

## 🛠️ Tech Stack

- **React 19**: Latest React with modern features
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and development server
- **PostCSS**: CSS processing
- **ESLint**: Code linting and formatting

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd zooq-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── Button.tsx
│   │   └── Typography.tsx
│   ├── layout/          # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/        # Page sections
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   └── Testimonials.tsx
│   └── index.ts         # Component exports
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
├── index.css            # Global styles and Tailwind imports
└── vite-env.d.ts        # Vite type definitions
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
Colors are defined in `tailwind.config.js` and can be customized by modifying the color palette:

```javascript
colors: {
  primary: {
    1: '#f7f6fd',
    // ... more shades
  },
  gray: {
    1: '#FFFFFF',
    // ... more shades
  },
  // ... other color palettes
}
```

### Typography
Typography styles are defined in the Tailwind config and CSS components:

```javascript
fontSize: {
  'h1': ['72px', {
    lineHeight: '74px',
    letterSpacing: '-1.5px',
    fontWeight: '700',
  }],
  // ... more typography variants
}
```

### Components
All components are built with TypeScript interfaces and can be easily customized by modifying their props and styling.

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Performance

- **Fast Loading**: Optimized with Vite
- **SEO Ready**: Semantic HTML structure
- **Accessible**: WCAG compliant components
- **Optimized Images**: WebP format support
- **Minimal Bundle**: Tree-shaking and code splitting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions, please contact the development team or create an issue in the repository.
