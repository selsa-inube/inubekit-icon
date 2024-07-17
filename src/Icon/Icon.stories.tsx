import { MdAdb } from "react-icons/md";
import { action } from "@storybook/addon-actions";

import { Icon, IIcon } from ".";

import { props, parameters } from "./props";

const story = {
  title: "data/Icon",
  component: Icon,
  parameters,
  argTypes: props,
};

const Default = (args: IIcon) => <Icon {...args} />;
Default.args = {
  appearance: "primary",
  icon: <MdAdb />,
  cursorHover: false,
  parentHover: false,
  disabled: false,
  spacing: "narrow",
  variant: "empty",
  shape: "rectangle",
  size: "24px",
  onClick: action("onClick"),
};

export { Default };
export default story;
