# Configuration for Modern Bundlers

This library is configured to work with modern bundlers like Vite and Next.js.

## Vite Support

The library includes a `vite.config.ts` for Vite users. To use this library in a Vite project:

```bash
npm install react-runko-ui
```

```tsx
import { Button, Input, Label } from 'react-runko-ui';
import 'react-runko-ui/dist/styles.css';

function App() {
  return (
    <div>
      <Label htmlFor="name">Name</Label>
      <Input id="name" type="text" />
      <Button variant="primary">Submit</Button>
    </div>
  );
}
```

### Vite Configuration

If you encounter any issues, ensure your `vite.config.ts` includes:

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

## Next.js Support

The library works with both Next.js App Router and Pages Router.

### Installation

```bash
npm install react-runko-ui
```

### App Router (Next.js 13+)

```tsx
// app/page.tsx
import { Button, Input, Label } from 'react-runko-ui';
import 'react-runko-ui/dist/styles.css';

export default function Page() {
  return (
    <div>
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" />
      <Button variant="primary">Subscribe</Button>
    </div>
  );
}
```

### Pages Router

```tsx
// pages/index.tsx
import { Button, Input, Label } from 'react-runko-ui';
import 'react-runko-ui/dist/styles.css';

export default function Home() {
  return (
    <div>
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" />
      <Button variant="primary">Subscribe</Button>
    </div>
  );
}
```

### Next.js Configuration

Add to your `next.config.js`:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['react-runko-ui'],
};

module.exports = nextConfig;
```

## TypeScript Support

The library is written in TypeScript 5.9+ and includes full type definitions. Your project should use TypeScript 5.9 or higher for best compatibility.

### tsconfig.json

Recommended TypeScript configuration for consuming projects:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```
