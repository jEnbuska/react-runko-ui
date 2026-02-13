# react-runko-ui

Generic composable React component library for jump starting a new React project, without major dependencies or opinions.

## Features

- 🎨 **Composable Components**: Build complex UIs from simple, reusable primitives
- 🪶 **Lightweight**: Minimal dependencies - only React as peer dependency
- 📦 **Type-Safe**: Written in TypeScript with full type definitions
- 🎯 **Unopinionated**: Style props system that works with any design system
- 🚀 **Zero Configuration**: Works out of the box without complex setup

## Installation

```bash
npm install react-runko-ui
```

or

```bash
yarn add react-runko-ui
```

## Components

### Box

The foundational component for creating layouts and applying spacing, sizing, and styling.

```jsx
import { Box } from 'react-runko-ui';

<Box p={20} m={10} bg="lightblue" borderRadius={8}>
  Content here
</Box>
```

**Props:**
- `as` - Render as different HTML element (default: 'div')
- `p`, `px`, `py`, `pt`, `pr`, `pb`, `pl` - Padding
- `m`, `mx`, `my`, `mt`, `mr`, `mb`, `ml` - Margin
- `w`, `h` - Width and height
- `bg` - Background color
- `color` - Text color
- `border` - Border
- `borderRadius` - Border radius

### Flex

Flexbox layout component built on Box.

```jsx
import { Flex } from 'react-runko-ui';

<Flex direction="row" justify="space-between" align="center" gap={16}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Flex>
```

**Props:**
- All Box props, plus:
- `direction` - Flex direction ('row' | 'column' | 'row-reverse' | 'column-reverse')
- `wrap` - Flex wrap ('nowrap' | 'wrap' | 'wrap-reverse')
- `justify` - Justify content
- `align` - Align items
- `gap` - Gap between items

### Grid

CSS Grid layout component built on Box.

```jsx
import { Grid } from 'react-runko-ui';

<Grid columns={3} gap={16}>
  <div>Cell 1</div>
  <div>Cell 2</div>
  <div>Cell 3</div>
</Grid>
```

**Props:**
- All Box props, plus:
- `columns` - Number of columns or template string
- `rows` - Number of rows or template string
- `gap` - Gap between items
- `columnGap`, `rowGap` - Specific gaps
- `autoFlow` - Grid auto flow

### Stack

Vertical or horizontal stacking component built on Flex.

```jsx
import { Stack } from 'react-runko-ui';

<Stack direction="vertical" spacing={16}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>
```

**Props:**
- All Flex props (except `direction`), plus:
- `direction` - Stack direction ('vertical' | 'horizontal')
- `spacing` - Space between items (alternative to gap)

### Text

Typography component built on Box.

```jsx
import { Text } from 'react-runko-ui';

<Text as="h1" size={24} weight={700} color="navy">
  Heading Text
</Text>
```

**Props:**
- All Box props (except `as`), plus:
- `as` - HTML element ('p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label')
- `size` - Font size
- `weight` - Font weight
- `align` - Text alignment
- `transform` - Text transform
- `decoration` - Text decoration

### Button

Interactive button component.

```jsx
import { Button } from 'react-runko-ui';

<Button variant="primary" size="medium" onClick={handleClick}>
  Click me
</Button>
```

**Props:**
- Standard button HTML attributes, plus:
- `variant` - Button style ('primary' | 'secondary' | 'outline' | 'text')
- `size` - Button size ('small' | 'medium' | 'large')
- `fullWidth` - Make button full width

## Usage Example

```jsx
import { Box, Flex, Stack, Text, Button } from 'react-runko-ui';

function App() {
  return (
    <Box p={40} bg="#f5f5f5">
      <Stack spacing={24}>
        <Text as="h1" size={32} weight={700}>
          Welcome to React Runko UI
        </Text>
        
        <Flex justify="space-between" align="center" p={20} bg="white" borderRadius={8}>
          <Text>A flexible layout component</Text>
          <Button variant="primary">Get Started</Button>
        </Flex>
        
        <Grid columns={3} gap={16}>
          <Box p={20} bg="white" borderRadius={8}>Card 1</Box>
          <Box p={20} bg="white" borderRadius={8}>Card 2</Box>
          <Box p={20} bg="white" borderRadius={8}>Card 3</Box>
        </Grid>
      </Stack>
    </Box>
  );
}
```

## Philosophy

React Runko UI is designed to be a minimal, composable component library that provides the essential building blocks for creating React applications. Unlike opinionated UI libraries, it doesn't impose design decisions or bring heavy dependencies. Instead, it offers:

- **Primitive components** that can be composed together
- **Flexible styling** through props without CSS-in-JS dependencies
- **Type safety** with TypeScript
- **Small bundle size** with only React as a dependency

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
