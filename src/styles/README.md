# styles

This directory contains all the global and local styles for the application. It includes CSS, SCSS, and utility files that define the look and feel of your project.

## Purpose
The `styles` directory is used for writing and organizing CSS or SCSS files that define how the UI should look. This includes global styles (such as base styles), layout-related styles, and component-specific styles.

## Example Usage
- **Global Styles**: Base styles for body text, link styling, and other default styles that affect the entire app.
- **Component Styles**: Localized styles that affect specific UI components or pages.
- **Tailwind Customizations**: Custom TailwindCSS settings (such as theme colors or fonts).

## Structure
- **Global styles**: Base or reset styles, utility classes, and global settings like colors or typography.
- **Component styles**: Component-specific CSS/SCSS files.
- **Tailwind customizations**: Customize TailwindCSS settings if necessary.

## Example
```css
/* global.css */
body {
  font-family: 'Inter', sans-serif;
  background-color: #f9f9f9;
}

h1 {
  font-size: 2rem;
  color: #333;
}
