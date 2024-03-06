const shapes = ["circle", "rectangle"] as const;
type Shape = (typeof shapes)[number];

const spacings = ["none", "compact", "wide"] as const;
type Spacing = (typeof spacings)[number];

const variants = ["filled", "outlined", "none"] as const;
type Variant = (typeof variants)[number];

const appearances = [
  "primary",
  "success",
  "warning",
  "danger",
  "help",
  "dark",
  "gray",
  "light",
] as const;

type Appearance = (typeof appearances)[number];

const parameters = {
  docs: {
    description: {
      component: "Icons used to communicate actions and decisions graphically",
    },
  },
};

const props = {
  appearance: {
    options: appearances,
    control: { type: "select" },
    description: "the base styling to apply to the icon",
    table: {
      defaultValue: { summary: "black" },
    },
  },

  cursorHover: {
    options: [false, true],
    control: { type: "boolean" },
    description: "whether the icon changes upon cursor hover",
    table: {
      defaultValue: { summary: false },
    },
  },

  parentHover: {
    options: [false, true],
    control: { type: "boolean" },
    description: "whether the icon changes upon its parent hover",
    table: {
      defaultValue: { summary: false },
    },
  },

  icon: {
    control: { type: "object" },
    description: "icon to be displayed inside the Icon component",
  },

  disabled: {
    options: [false, true],
    control: { type: "boolean" },
    description: "set if the icon is disabled",
    table: {
      defaultValue: { summary: false },
    },
  },

  spacing: {
    options: spacings,
    control: { type: "select" },
    description: "spacing around the icon",
    table: {
      defaultValue: { summary: "wide" },
    },
  },

  variant: {
    options: variants,
    control: { type: "select" },
    description: "variant of the icon",
    table: {
      defaultValue: { summary: "filled" },
    },
  },

  shape: {
    options: shapes,
    control: { type: "select" },
    description: "shape of the icon",
    table: {
      defaultValue: { summary: "circle" },
    },
  },

  onClick: {
    control: { action: "clicked" },
    description: "function to handle icon click",
  },

  size: {
    control: { type: "text" },
    description: "size of the icon in pixels",
  },
};

export { parameters, props, shapes, spacings, variants };
export type { Appearance, Shape, Spacing, Variant };
