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
    variant,
    shape,
    size,
    onClick,
  } = props;

  const interceptOnClick = (e: React.MouseEvent) => {
    try {
      onClick && onClick(e);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("An unknown error occurred");
      }
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
