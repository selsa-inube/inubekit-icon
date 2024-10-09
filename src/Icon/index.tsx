import { StyledIcon } from "./styles";
import {
  IIconAppearance,
  IIconShape,
  IIconSpacing,
  IIconVariant,
} from "./props";

interface IIcon {
  appearance: IIconAppearance;
  cursorHover?: boolean;
  parentHover?: boolean;
  icon: React.ReactNode;
  disabled?: boolean;
  spacing?: IIconSpacing;
  variant?: IIconVariant;
  shape?: IIconShape;
  size?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const Icon = (props: IIcon) => {
  const {
    appearance,
    cursorHover,
    parentHover,
    icon,
    disabled,
    spacing,
    variant = "none",
    shape,
    size = "24px",
    onClick,
  } = props;

  const interceptOnClick = (e: React.MouseEvent) => {
    try {
      onClick && onClick(e);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledIcon
      $appearance={appearance}
      $cursorHover={cursorHover}
      $parentHover={parentHover}
      disabled={disabled}
      $spacing={spacing}
      $variant={variant}
      $shape={shape}
      $size={size}
      onClick={disabled ? undefined : interceptOnClick}
    >
      {icon}
    </StyledIcon>
  );
};

export { Icon };
export type { IIcon };
