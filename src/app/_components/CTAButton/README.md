# CTAButton Usage

Reusable CTA button component with shared styling and hover behaviour.

## Import

```tsx
import CTAButton from "@/src/_components/CTAButton"; // adjust path if your alias differs
```

## Basic Example

```tsx
<CTAButton
  label="See All Service"
  iconSrc={heroIcon}     // omit if no icon
  onClick={handleClick}
/>
```

`iconSrc` takes any image URL (PNG/SVG). If you do not pass it the button renders text only.

## Custom Dimensions

Button width, height, and horizontal padding are customisable:

```tsx
<CTAButton
  label="Connect with our experts"
  iconSrc={arrowIcon}
  width={264}
  paddingX={32}
/>
```

All props are optional and fall back to the hero defaults (191×56, centred text).

## Styling Props

| Prop | Default | Notes |
| ---- | ------- | ----- |
| `width` | `191` | Accepts number or CSS length string |
| `height` | `56` | Same as above |
| `paddingX` | `24` | Controls left/right padding |
| `backgroundColor` | `#2D7597` | Base button colour |
| `hoverBackgroundColor` | `#3385AB` | Hover colour |
| `hoverShadow` | `0 16px 32px rgba(45,117,151,0.35)` | Shadow when hovered |

Other native button props such as `onClick`, `type`, and `disabled` are forwarded automatically.

