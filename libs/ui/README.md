# Vibe UI Library

A shared component library for the Vibe application.

## Components

The library provides the following UI components:

- **Button**: A versatile button component with various styles and sizes
- **Avatar**: User avatar component with image and fallback support
- **Input**: Text input field with consistent styling
- **Separator**: Horizontal or vertical separator line

## Usage

Import components directly from the library:

```tsx
import { Button, Avatar, AvatarImage, AvatarFallback } from '@vibe/ui';

export function MyComponent() {
  return (
    <div>
      <Avatar>
        <AvatarImage src="/path/to/image.jpg" alt="User" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      
      <Button variant="primary">Click Me</Button>
    </div>
  );
}
```

## Utilities

The library also provides utility functions:

- `cn`: A utility for conditionally joining class names with Tailwind CSS

```tsx
import { cn } from '@vibe/ui';

<div className={cn('base-class', conditional && 'conditional-class')}>...</div>
```