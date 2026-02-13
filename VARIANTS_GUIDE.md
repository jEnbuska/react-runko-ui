# Variant Types and VariantClassNames Usage Guide

This document explains the new shared variant types and the flexible `variantClassNames` pattern introduced in the library.

## Shared Variant Types

### RunkoVariant

Used by form components (Input, Select, Textarea):

```typescript
import type { RunkoVariant } from 'react-runko-ui';

type RunkoVariant = "error" | "success";
```

### ButtonVariant

Used by the Button component:

```typescript
import type { ButtonVariant } from 'react-runko-ui';

type ButtonVariant = "primary" | "secondary" | "danger";
```

## Component VariantClassNames Types

Each component with variants now exports a `VariantClassNames` type:

```typescript
import type {
  InputVariantClassNames,
  SelectVariantClassNames,
  TextareaVariantClassNames,
  ButtonVariantClassNames,
} from 'react-runko-ui';
```

These are all defined as:
```typescript
type ComponentVariantClassNames = Partial<Record<VariantType, string>>;
```

## Usage Examples

### Basic Usage (Backward Compatible)

The traditional way still works exactly as before:

```tsx
import { Input, Select, Textarea, Button } from 'react-runko-ui';

// Default variant classes are applied automatically
<Input variant="error" />        // → runko-input--error
<Select variant="success" />     // → runko-select--success
<Textarea variant="error" />     // → runko-textarea--error
<Button variant="primary" />     // → runko-button--primary
```

### Custom Variant ClassNames

Now you can override default variant classes with custom ones:

```tsx
import { Input } from 'react-runko-ui';

<Input 
  variant="error"
  variantClassNames={{
    error: "my-custom-error-class"
  }}
/>
// Applies: "runko-input my-custom-error-class"
// Does NOT apply: "runko-input--error"
```

### Partial Mappings

You can provide custom classes for some variants while others use defaults:

```tsx
import { Input } from 'react-runko-ui';

<Input 
  variant="error"
  variantClassNames={{
    success: "custom-success-class"
    // error is not mapped, so default is used
  }}
/>
// Applies: "runko-input runko-input--error"
```

### Use Cases

#### 1. Integration with CSS Frameworks

```tsx
import { Button } from 'react-runko-ui';

// Using Tailwind classes
<Button
  variant="primary"
  variantClassNames={{
    primary: "bg-blue-500 hover:bg-blue-700 text-white",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white",
    danger: "bg-red-500 hover:bg-red-700 text-white"
  }}
>
  Submit
</Button>
```

#### 2. Theme Customization

```tsx
import { Input } from 'react-runko-ui';

const darkThemeVariants = {
  error: "dark-error-input",
  success: "dark-success-input"
};

<Input
  variant="error"
  variantClassNames={darkThemeVariants}
/>
```

#### 3. Conditional Custom Classes

```tsx
import { Select } from 'react-runko-ui';

const customVariants = {
  error: isDarkMode ? "dark-error-select" : "light-error-select",
  success: isDarkMode ? "dark-success-select" : "light-success-select"
};

<Select
  variant="error"
  variantClassNames={customVariants}
>
  <option>Choose...</option>
</Select>
```

## TypeScript Integration

### Type-Safe Variant Definitions

```typescript
import type { RunkoVariant, InputVariantClassNames } from 'react-runko-ui';

// Type-safe variant mapping
const myInputVariants: InputVariantClassNames = {
  error: "custom-error",
  success: "custom-success",
  // TypeScript ensures only valid variants are used
};

// Type-safe variant value
const currentVariant: RunkoVariant = "error";
```

### Reusable Variant Configurations

```typescript
import type { 
  ButtonVariantClassNames, 
  InputVariantClassNames 
} from 'react-runko-ui';

// Define once, reuse everywhere
export const buttonTheme: ButtonVariantClassNames = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  danger: "btn-danger"
};

export const inputTheme: InputVariantClassNames = {
  error: "input-error",
  success: "input-success"
};
```

Then use in components:

```tsx
import { Button, Input } from 'react-runko-ui';
import { buttonTheme, inputTheme } from './themes';

<Button variant="primary" variantClassNames={buttonTheme}>
  Submit
</Button>

<Input variant="error" variantClassNames={inputTheme} />
```

## Migration Guide

### From Previous Version

If you were using inline variant type definitions:

```typescript
// Before
interface MyInputProps {
  variant?: "error" | "success";
}

// After
import type { RunkoVariant } from 'react-runko-ui';

interface MyInputProps {
  variant?: RunkoVariant;
}
```

### No Breaking Changes

All existing code continues to work without modifications:

```tsx
// Still works exactly as before
<Input variant="error" />
<Button variant="primary" />
```

## Best Practices

### 1. Define Theme Objects Once

```typescript
// theme.ts
import type {
  ButtonVariantClassNames,
  InputVariantClassNames,
  SelectVariantClassNames,
  TextareaVariantClassNames,
} from 'react-runko-ui';

export const theme = {
  button: {
    primary: "btn-primary",
    secondary: "btn-secondary",
    danger: "btn-danger"
  } as ButtonVariantClassNames,
  
  input: {
    error: "input-error",
    success: "input-success"
  } as InputVariantClassNames,
  
  // ... other components
};
```

### 2. Use Context for Global Themes

```tsx
import { createContext, useContext } from 'react';
import type { ButtonVariantClassNames } from 'react-runko-ui';

const ThemeContext = createContext<{
  buttonVariants: ButtonVariantClassNames;
}>({ buttonVariants: {} });

export function ThemedButton({ variant, ...props }) {
  const { buttonVariants } = useContext(ThemeContext);
  return <Button variant={variant} variantClassNames={buttonVariants} {...props} />;
}
```

### 3. Combine with className Prop

You can still use the `className` prop for additional classes:

```tsx
<Input
  variant="error"
  variantClassNames={{ error: "custom-error" }}
  className="my-additional-class"
/>
// Applies: "runko-input custom-error my-additional-class"
```

## API Reference

### Components Supporting VariantClassNames

| Component | Variant Type | VariantClassNames Type |
|-----------|--------------|------------------------|
| Button    | ButtonVariant | ButtonVariantClassNames |
| Input     | RunkoVariant | InputVariantClassNames |
| Select    | RunkoVariant | SelectVariantClassNames |
| Textarea  | RunkoVariant | TextareaVariantClassNames |

### Props

All components with variants now accept:

```typescript
{
  variant?: VariantType;
  variantClassNames?: Partial<Record<VariantType, string>>;
}
```

When both are provided:
- If `variantClassNames[variant]` exists → uses custom class
- Otherwise → uses default `component--variant` class

## Examples Repository

See the playground for live examples:

```bash
cd playground
npm install
npm run dev
```

Open http://localhost:3000 to see interactive demos of all components with variant customization.
