import { StyledIcon } from "./styles";
import { Spacing, Variant, Shape, Appearance } from "./props";

export interface IIconProps {
  appearance: Appearance;
  cursorHover?: boolean;
  parentHover?: boolean;
  icon: React.ReactNode;
  disabled?: boolean;
  spacing?: Spacing;
  variant?: Variant;
  shape?: Shape;
  size?: string;
  onClick?: () => void;
}

export const Icon = (props: IIconProps) => {
  const {
    appearance,
    cursorHover,
    parentHover,
    icon,
    disabled,
    spacing,
    variant,
    shape,
    size,
    onClick,
  } = props;

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
      onClick={disabled ? undefined : onClick}
    >
      {icon}
    </StyledIcon>
  );
};
