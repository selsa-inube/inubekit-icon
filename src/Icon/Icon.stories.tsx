import { MdAdb } from "react-icons/md";
import { action } from "@storybook/addon-actions";

import { Icon, IIconProps } from ".";

import { props, parameters } from "./props";

const story = {
  title: "data/Icon",
  component: Icon,
  parameters,
  argTypes: props,
};

export const Default = (args: IIconProps) => <Icon {...args} />;

Default.args = {
  appearance: "primary",
  icon: <MdAdb />,
  cursorHover: false,
  parentHover: false,
  disabled: false,
  spacing: "wide",
  variant: "none",
  shape: "rectangle",
  size: "24px",
  onClick: action("onClick"),
};

export default story;
