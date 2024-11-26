# Icon

This library publishes the `<Icon />` component.

## Installation

The library is publish in npm.

```bash
npm install @inubekit/icon
```

## Dependencies

- **styled-components**: this library must be installed in your project in order to be able to use the component.
- **react-icons**: This component is implemented using [react-icons](https://react-icons.github.io/react-icons/) as a dependency, since all the icons that can be rendered must belong to that library.

## Import

```jsx
import { Icon } from "@inubekit/icon";
```

## Props

### icon

Use this prop to indicate which icon from react-icons you wish to render.

**Note:** As a design rule, use icons from Material Design Icons _(md)_ only. The whole design system is based on that set of icons.

```jsx
import { Icon } from "@inubekit/icon";
import { MdAdd } from "react-icons/md";

function Example() {
  return (
    <>
      <Icon icon={<MdAdd />} />
    </>
  );
}
```

### appearance (required)

Controls the color of the rendered icon. This prop implements the IIconAppearance interface which controls that you can only use the following set of options:

`"primary" | "success" | "warning" | "danger" | "help" | "dark" | "gray" | "light"`

Each option has a default color value implemented and exported from `@inubekit/foundations` to be used inside the styles of the component. Check the [personalization](#personalization) section to see how to change these defaults.

### size (optional)

Control the size of the icon using any dimensional value you need. Consider:

1. **default**: "24px".
2. You can pass any string as long as it is a valid value for `width` and `height` CSS properties.
3. You will see below that you can change the variant, shape and spacing props of the icon. Regardless of those values, the whole icon will use the size you specify in this prop (just like working with the `box-sizing: "border-box"` CSS property)

### variant (optional)

Icons may require a frame sometimes. This prop implements the IIconVariant interface so you control that frame with three possible values:

- `"empty"` **(default)**: The icon is rendered alone. Just the icon and nothing else.
- `"outlined"`: Use this value if the icon should be surrounded with a border. The border uses the same color as the icon.
- `"filled"`: Use this value if you want the icon to be on top of a solid background. In this case, the [appearance](#appearance-required) you selected will affect the background color and the icon will use a contrast color on top.

### shape (optional)

Derived from the variant prop, in some scenarios we may want to change the shape of the icon's frame. This prop implements the IIconShape interface so you can use the following shapes:

- `"rectangle"` **(default)**
- `"circle"`

### spacing (optional)

Some icons have an internal implementation that causes the icon to be close or almost touch the border of its container. This can become a frequent issue when you implement a frame around the icon. For these scenarios, the spacing prop implements the IIconSpacing interface so you can control the space between the icon and its container like this:

- `narrow` **(default)**: There is a "2px" padding between the icon and its container.
- `compact`: There is a "4px" padding.
- `wide`: There is a "8px" padding.

### disabled (optional)

This is a boolean prop to control whether the icon should be disabled or not. There are some default styling values when the icon is disabled, if you want to change them check the [personalization](#personalization) section.

### onClick (optional)

This prop gets a function that will be executed when the user click on the icon (if the icon is enabled). The function will get the click event as an argument when executed.

### cursorHover (optional)

Boolean prop that lets you enable a hover behavior for the icon. This will change the cursor when the icon is hovered as well as the color of the icon (and its frame if it has one). Its **default** value is `false`.

### parentHover (optional)

Sometimes the icon belongs to a bigger component and we want to change the rendering of the icon to a hover state even when the cursor is over the bigger component but not exactly over the icon itself.

- **default**: `false`
- This behavior is common when that bigger component is a card. In that case we would like to change the icon to its hover state when the cursor is over the card.
- Its usage means that the parent component of the icon will have to intercept the hover on itself and then change the `parentHover` prop value to `true`.
- While `cursorHover` let's the icon intercept the hover by the itself using its own CSS rules for that, `parentHover` is a controlled prop that forces the hover behavior on the icon.

## Personalization

### Token structure

The tokens for this component follow the structure `business-unit.component.appearance.property.subproperty.modifier`.

### Properties

- **content**: used to control the color of the icon.
- **background**: used to control the background of the icon when the `filled` variant applies.
- **contrast**: used to control the color of the icon when the `filled` variant applies.

### Tokens

You can check the list of tokens in [TOKENS.md](./TOKENS.md)

### Changing tokens

You can change the presentation of the component by adjusting its tokens. This modification has the next constraints:

1. You must use the current token structure, since the component styling relies on that data structure to get the values.
2. The tokens rely on the palette token structure. This means that the business unit should already have a set of colors defined as a palette and those colors serve as options to be assigned here.

> 💡 To see more details about the palette token structure check **@ınubekit/foundations**.
