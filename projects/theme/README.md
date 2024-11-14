# Angular Theme using Tailwind

A collection of reusable, styled components built with Angular, showcased using Storybook for efficient UI development and testing. Visit the online [Storybook](https://vk-angular-theme.vercel.app/) for a live preview of all components.

## Project Overview

This project serves as a UI component library for Angular applications, leveraging Storybook to provide an interactive development environment. Each component is designed to be customizable, testable, and ready for production use.

## Installation

Install my-project with npm

```bash
  npm i @kalees64/vk-theme
```

Copy the css file path and paste it to your style.css file

```css
@import url("https://kalees64.github.io/vk-cdn/vk-cdn.css");
```

## Usage/Examples

After installation, you can import and use the components directly in your Angular applications. Refer to each component's Storybook documentation for usage details and available props.

app.component.ts

```javascript
import { VkButtonComponent } from '@kalees64/vk-theme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ VkButtonComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
```

app.component.html

```javascript
<vk-button>Button</vk-button>
```

## Documentation

Read the below documentation for more knowledge about the components.

[Storybook](https://vk-angular-theme.vercel.app/)

### Available Components

- Button
- Button Gradient
- Badge
- Card
- Card Title
- Card Text
- Headings [ h1 , h2, h3, h4, h5, h6 ]
- Alert
- Alert Box
- Forn Input
- Form Label
- Link
- Sidebar Link
- Card with actions
- Card with hidden actions
- Card Widget
- Sidebar
- Header
- Accordion
- Breadcrumb
- Modal
- Dropdown
- Offcanvas
- Tabs
