const shapes = ["circle", "rectangle"] as const;
type IIconShape = (typeof shapes)[number];

const spacings = ["narrow", "compact", "wide"] as const;
type IIconSpacing = (typeof spacings)[number];

const variants = ["filled", "outlined", "empty"] as const;
type IIconVariant = (typeof variants)[number];

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

type IIconAppearance = (typeof appearances)[number];

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
      defaultValue: { summary: "primary" },
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
export type { IIconAppearance, IIconShape, IIconSpacing, IIconVariant };
