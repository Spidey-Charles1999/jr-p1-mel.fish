# NavigationMenu Usage

Reusable four-link navigation menu extracted from the hero and footer designs.

## Import

```tsx
import NavigationMenu from "@/src/components/NavigationMenu"; // adjust based on your alias setup
```

## Basic Example

```tsx
<NavigationMenu />
```

Renders the default links: About Us, Products, Blog, and See All Service (pre-highlighted).

## Custom Text Colour

Use `textColor` to adjust the base colour shared by every item. You can also override per item with `textColor` in the `items` array.

```tsx
<NavigationMenu
  textColor="#94A3B8"
  items={[
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Blog", href: "/blog" },
    { label: "See All Service", href: "/services", highlight: true, textColor: "#FFFFFF" },
  ]}
/>
```

## Props

| Prop | Type | Default | Notes |
| ---- | ---- | ------- | ----- |
| `items` | `NavigationMenuItem[]` | hero defaults | Controls the rendered menu items |
| `gap` | `number \| string` | `"106px"` | Spacing between list items |
| `fontFamily` | `string` | `"PingFang SC"` stack | Applied to each link |
| `fontSize` | `number \| string` | `"18px"` | Link font size |
| `lineHeight` | `number \| string` | `"25px"` | Link line height |
| `textColor` | `string` | `"#FFFFFF"` | Base text colour |

All native `<nav>` props (e.g. `className`, `style`) are forwarded to the wrapper.
