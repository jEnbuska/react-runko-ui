# React Runko UI

Atomic React component library with minimal CSS using `:where()` selectors for easy customization.

## Features

- 🧩 **Atomic Components**: Pure HTML element wrappers (Input, Label, Button, Select, Textarea, Checkbox, Radio)
- 🎨 **Easy to Override**: Styles use `:where()` selector for zero specificity
- 🪶 **Lightweight**: Minimal dependencies - only React as a peer dependency
- 📦 **Type-Safe**: Written in TypeScript with full type definitions
- 🎯 **Unopinionated**: No layout components - you control the structure
- 🔧 **Composable**: Build your own patterns by composing atomic elements

## Installation

```bash
npm install react-runko-ui
```

## Quick Start

```jsx
import { Input, Label, Button } from 'react-runko-ui';
import 'react-runko-ui/dist/styles.css';

function LoginForm() {
  return (
    <form>
      <div>
        <Label htmlFor="email" required>Email</Label>
        <Input id="email" type="email" placeholder="your@email.com" />
      </div>
      <Button variant="primary" type="submit">
        Sign In
      </Button>
    </form>
  );
}
```

## Components

- **Button** - Interactive button with variants (primary, secondary, danger)
- **Input** - Text input with validation states (error, success)
- **Label** - Form label with optional required indicator
- **Select** - Dropdown select with validation states
- **Textarea** - Multi-line text input with validation states
- **Checkbox** - Checkbox input
- **Radio** - Radio button input

## Why :where()?

The library uses the `:where()` CSS pseudo-class for all default styles, which has **zero specificity**. This means you can override any style with simple CSS without needing `!important` or complex selectors:

```css
/* Library style (specificity: 0-0-0) */
:where(.runko-button) {
  background-color: blue;
}

/* Your style (specificity: 0-1-0) - wins! */
.runko-button {
  background-color: red;
}
```

## Documentation

For complete documentation, component examples, and guides, visit the documentation site:

```bash
cd docs
npm install
npm run dev
```

Then open http://localhost:4321

## Philosophy

React Runko UI provides atomic, unstyled React components with optional minimal CSS. **Layout is intentionally left to the developer**, allowing maximum flexibility in how you structure your application.

- ✅ Provides: Form elements, buttons, inputs
- ❌ Does not provide: Layout components (Box, Flex, Grid, Container, etc.)

You handle layout using your own CSS, CSS-in-JS, Tailwind, or whatever solution works for your project.

## Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build the library
npm run build

# Lint code
npm run lint

# Format code
npm run format
```

## License

MIT
