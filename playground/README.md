# React Runko UI Playground

Interactive development environment for testing React Runko UI components with hot module reloading.

## Getting Started

### Install Dependencies

From the playground directory:

```bash
cd playground
npm install
```

### Run Development Server

```bash
npm run dev
```

This will start a Vite development server at http://localhost:3000 with:
- **Hot Module Reloading (HMR)**: Changes to components reflect instantly
- **Fast Refresh**: React state is preserved across updates
- **TypeScript Support**: Full type checking during development

The playground imports components directly from the source (`../src`), so any changes you make to the library components will be immediately visible.

## Features

The playground includes:

- ✅ All component demos (Button, Input, Label, Select, Textarea, Checkbox, Radio)
- ✅ Interactive state management
- ✅ Variant demonstrations
- ✅ CN utility function demo
- ✅ Complete form example
- ✅ Responsive design
- ✅ Visual feedback on change

## Project Structure

```
playground/
├── src/
│   ├── App.tsx        # Main playground component
│   ├── App.css        # Playground styles
│   └── main.tsx       # Entry point
├── index.html         # HTML template
├── package.json       # Dependencies
├── tsconfig.json      # TypeScript config
└── vite.config.ts     # Vite configuration
```

## Development Workflow

1. **Start the playground**: `npm run dev`
2. **Edit components**: Modify files in `../src/components/`
3. **See changes instantly**: The playground updates automatically
4. **Test interactions**: Click, type, and interact with components
5. **Verify styling**: Check CSS changes in real-time

## Building for Production

```bash
npm run build
```

This creates an optimized production build in `dist/`.

## Preview Production Build

```bash
npm run preview
```

Serves the production build locally for testing.
