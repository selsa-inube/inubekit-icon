import { StyledIcon } from "./styles";
import { Spacing, Variant, Shape, Appearance } from "./props";

interface IIcon {
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

const Icon = (props: IIcon) => {
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

export { Icon };
export type { IIcon };
