# Palmetto Pump Pros

A modern, responsive website for Palmetto Pump & Control, built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, professional design
- 📱 Fully responsive layout
- ⚡ Fast performance with Vite
- 🎯 Type-safe with TypeScript
- 🎨 Styled with Tailwind CSS and shadcn/ui components
- 🚀 Optimized for GitHub Pages deployment

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Getting Started

1. Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/palmetto-pump-pros.git
cd palmetto-pump-pros
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser to `http://localhost:8080`

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

### Setup Instructions

1. **Update the repository name** in the following files if you renamed the repository:

   - `package.json`: Update the `homepage` field
   - `vite.config.ts`: Update the `base` path
   - `public/404.html`: Update the redirect URL

2. **Enable GitHub Pages**:

   - Go to your repository Settings
   - Scroll to "Pages" section
   - Set Source to "GitHub Actions"

3. **Deploy**:
   - Push to the `main` branch
   - The GitHub Action will automatically build and deploy your site
   - Your site will be available at `https://YOUR_USERNAME.github.io/palmetto-pump-pros`

### Manual Deployment

You can also deploy manually using the gh-pages package:

```bash
npm run deploy
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
└── assets/        # Static assets
```

## Built With

- [React](https://reactjs.org/) - UI framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [React Router](https://reactrouter.com/) - Client-side routing
- [Lucide React](https://lucide.dev/) - Icons

## License

This project is private and proprietary to Palmetto Pump & Control, LLC.
