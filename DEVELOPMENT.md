# Running React Runko UI Locally with Visual Feedback

This guide explains how to run the React Runko UI library locally with instant visual feedback on changes.

## Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/jEnbuska/react-runko-ui.git
cd react-runko-ui

# 2. Install dependencies
npm install

# 3. Install playground dependencies
cd playground
npm install

# 4. Start the development server
npm run dev
```

The playground will automatically open at **http://localhost:3000** 🚀

## What You Get

### Interactive Development Environment

The playground provides:

- **⚡ Hot Module Reloading (HMR)**: Changes to components reflect **instantly** in the browser
- **🔥 Fast Refresh**: React state is preserved across updates - no page reload needed
- **📝 TypeScript Support**: Full type checking during development
- **🎨 Live Component Demos**: See all components in action
- **👀 Visual Feedback**: Every code change is immediately visible

### All Components Demonstrated

The playground includes interactive demos of:

1. **Buttons** - Primary, secondary, danger variants + disabled state
2. **Inputs** - Normal, error, success states with live value updates
3. **Select Dropdowns** - All variants with onChange handlers
4. **Textareas** - With validation states
5. **Checkboxes** - Interactive with state management
6. **Radio Buttons** - Full radio groups
7. **Labels** - With required indicators
8. **CN Utility** - Visual demonstration of the className utility

Plus a **complete form example** showing all components working together!

## Development Workflow

### 1. Start the Playground

From the root directory:
```bash
npm run dev
```

Or from the playground directory:
```bash
cd playground
npm run dev
```

### 2. Edit Components

Open any component file in `src/components/`:

```bash
# Example: Edit the Button component
vim src/components/Button.tsx
```

### 3. See Changes Instantly

- Save the file
- The browser updates **automatically**
- No manual refresh needed
- React state is preserved

### 4. Test Interactions

- Click buttons
- Type in inputs
- Toggle checkboxes
- Select options
- See real-time updates

### 5. Verify Styling

Edit CSS files:
```bash
# Edit component styles
vim src/styles/index.css

# Edit playground styles
vim playground/src/App.css
```

Changes apply **instantly** in the browser.

## Project Structure

```
react-runko-ui/
├── src/
│   ├── components/       # Library components (edit these!)
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── ...
│   ├── utils/           # Utilities (e.g., cn function)
│   └── styles/          # Component styles
│
├── playground/          # Development environment
│   ├── src/
│   │   ├── App.tsx      # Main demo component
│   │   ├── App.css      # Playground styling
│   │   └── main.tsx     # Entry point
│   ├── vite.config.ts   # Vite configuration
│   └── package.json     # Playground dependencies
│
└── package.json         # Main package
```

## How It Works

### Direct Source Import

The playground imports components directly from the source code:

```typescript
// playground/vite.config.ts
export default defineConfig({
  resolve: {
    alias: {
      'react-runko-ui': resolve(__dirname, '../src/index.ts'),
    },
  },
});
```

This means:
- ✅ No build step needed during development
- ✅ Changes are instant
- ✅ Full TypeScript type checking
- ✅ Source maps for debugging

### Vite Configuration

The playground uses Vite 7.3.1 with:
- React Fast Refresh plugin
- TypeScript support
- CSS module support
- Auto browser opening
- Port 3000 (configurable)

## Commands Reference

### Development
```bash
npm run dev          # Start playground (from root)
cd playground && npm run dev  # Start playground (from playground dir)
```

### Testing
```bash
npm test            # Run all tests
npm run test:watch  # Run tests in watch mode
```

### Building
```bash
npm run build       # Build the library
cd playground && npm run build  # Build playground for production
```

### Code Quality
```bash
npm run lint        # Check for linting errors
npm run lint:fix    # Fix auto-fixable linting errors
npm run format      # Format code with Prettier
```

## Troubleshooting

### Port Already in Use

If port 3000 is taken:

```typescript
// Edit playground/vite.config.ts
server: {
  port: 3001,  // Change to any available port
  open: true,
}
```

### Dependencies Out of Sync

```bash
# Clean and reinstall
rm -rf node_modules package-lock.json
npm install

cd playground
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

```bash
# Check TypeScript configuration
npx tsc --noEmit
```

### Build Errors

```bash
# Clear build cache
rm -rf dist
npm run build
```

## Tips for Development

### 1. Use Multiple Terminals

Terminal 1: Run the playground
```bash
npm run dev
```

Terminal 2: Run tests in watch mode
```bash
npm run test:watch
```

Terminal 3: Edit code
```bash
vim src/components/Button.tsx
```

### 2. Browser DevTools

- Open DevTools (F12)
- Check Console for errors
- Use React DevTools extension
- Inspect network requests

### 3. Component Testing

Add your own tests to the playground:

```tsx
// playground/src/App.tsx
<section className="demo-section">
  <h2>My Custom Test</h2>
  <div className="demo-content">
    <Button onClick={() => console.log('Clicked!')}>
      Test Me
    </Button>
  </div>
</section>
```

### 4. Debugging

Set breakpoints in source code:
```tsx
export function Button({ variant, className, ...props }: ButtonProps) {
  debugger; // Browser will pause here
  return <button className={cn(...)} {...props} />;
}
```

## Next Steps

1. **Explore the playground**: See all components in action
2. **Modify components**: Make changes and watch them update instantly
3. **Add new components**: Follow the existing patterns
4. **Write tests**: Add tests for your changes
5. **Build & publish**: When ready, build the library

## Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## Need Help?

- Check existing components for patterns
- Read component tests for usage examples
- Review the playground App.tsx for implementation details
- See BUNDLER_SUPPORT.md for Vite/Next.js configuration

Happy coding! 🎉
