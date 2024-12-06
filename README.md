# CV Portfolio Application

A modern, responsive CV/Portfolio application built with React, TypeScript, and Bun. Features a clean, professional design with dark mode, print-friendly layout, and JSON-based data management.

## Features

- 🎨 Modern, responsive design with dark mode
- 📱 Mobile-friendly layout
- 🖨️ Print-friendly styling with proper page breaks
- 📤 Export CV data as JSON
- 🔄 Hot-reloading development server
- 📝 JSON-based data management with template files
- 🎯 TypeScript for enhanced type safety
- 🎨 TailwindCSS for styling

## Tech Stack

- React 18
- TypeScript
- Bun (Runtime & Bundler)
- TailwindCSS
- Lucide React (Icons)

## Project Structure

```
cv/
├── data_source/          # JSON data files and templates
│   └── *.dist.json      # Template files for CV data
├── public/              # Static assets
├── src/
│   ├── components.tsx   # Reusable React components
│   ├── cv.tsx          # Main CV component
│   ├── index.tsx       # Application entry point
│   ├── server.tsx      # Development server
│   ├── types.ts        # TypeScript type definitions
│   └── data/           # TypeScript data modules
└── tsconfig.json       # TypeScript configuration
```

## Getting Started

1. Install dependencies:
```bash
bun install
```

2. Set up your CV data:
   - Copy the `.dist.json` files in `data_source/` removing the `.dist` suffix
   - Edit the JSON files with your personal information

3. Start the development server:
```bash
bun run dev
```

The application will be available at `http://localhost:1337`

## Building for Production

Build the application for production:
```bash
bun run build
```

The built files will be available in the `public/dist` directory.

## Features

### Data Management
- CV data is stored in JSON files in the `data_source/` directory
- Template files (*.dist.json) provide the structure for data files
- Supports sections for:
  - Personal information
  - Professional summary
  - Work experience
  - Technical skills
  - Education
  - Languages
  - Notable projects

### Print Support
- Optimized for printing with proper page breaks
- Clean, professional layout in print format
- Automatic styling adjustments for print media

### Export Functionality
- Export complete CV data as JSON
- Print-friendly version with proper formatting

### Development Features
- Hot reloading for rapid development
- TypeScript for enhanced type safety
- Modern development environment with Bun

## License

MIT

## Credits

Created by Papa Black with assistance from [Claude](https://www.anthropic.com/claude)
