import styled from "styled-components";

import { inube } from "@inubekit/foundations";

const filledAppearancesWithGrayIcon = ["gray", "light"];

export const StyledIcon = styled.figure`
  display: inline-block;
  padding: 0px;
  margin: 0px;
  border-radius: ${({ $shape }) => ($shape === "circle" ? "50%" : "8px")};
  border-width: ${({ $variant }) => ($variant === "outlined" ? "1px" : "0px")};
  border-style: solid;
  border-color: ${({
    theme,
    $appearance,
    $parentHover,
    disabled,
    $variant,
  }) => {
    if (disabled)
      return (
        theme?.icon?.outlined?.[$appearance]?.border?.color?.disabled ||
        inube.icon.outlined[$appearance].border.color.disabled
      );
    if ($parentHover && $variant !== "filled")
      return (
        theme?.icon?.outlined?.[$appearance]?.border?.color?.hover ||
        inube.icon.outlined[$appearance].border.color.hover
      );
    return (
      theme?.icon?.outlined?.[$appearance]?.border?.color?.regular ||
      inube.icon.outlined[$appearance].border.color.regular
    );
  }};

  background-color: ${({
    theme,
    $variant,
    $appearance,
    $parentHover,
    disabled,
  }) => {
    if ($variant === "filled") {
      if (disabled)
        return (
          theme?.icon?.filled?.[$appearance]?.background?.color?.disabled ||
          inube.icon.filled[$appearance].background.color.disabled
        );
      if ($parentHover)
        return (
          theme?.icon?.filled?.[$appearance]?.background?.color?.hover ||
          inube.icon.filled[$appearance].background.color.hover
        );
      return (
        theme?.icon?.filled?.[$appearance]?.background?.color?.regular ||
        inube.icon.filled[$appearance].background.color.regular
      );
    }
  }};

  color: ${({ theme, $variant, $appearance, $parentHover, disabled }) => {
    if (disabled)
      return (
        theme?.icon?.filled?.[$appearance]?.background?.color?.disabled ||
        inube.icon.filled[$appearance].background.color.disabled
      );
    if ($variant !== "filled") {
      if ($parentHover)
        return (
          theme?.icon?.filled?.[$appearance]?.background?.color?.hover ||
          inube.icon.filled[$appearance].background.color.hover
        );
      return (
        theme?.icon?.filled?.[$appearance]?.background?.color?.regular ||
        inube.icon.filled[$appearance].background.color.regular
      );
    }
    if (!filledAppearancesWithGrayIcon.includes($appearance))
      return (
        theme?.icon?.filled?.light?.background?.color?.regular ||
        inube.icon.filled.light.background.color.regular
      );
    return (
      theme?.icon?.filled?.dark?.background?.color?.regular ||
      inube.icon.filled.dark.background.color.regular
    );
  }};

  & svg {
    display: block;
    width: ${({ $size }) => $size};
    height: ${({ $size }) => $size};
    padding: ${({ $spacing }) => {
      if ($spacing === "wide") return "8px";
      if ($spacing === "compact") return "4px";
      return "2px";
    }};
  }

  &:hover {
    cursor: ${({ $cursorHover, disabled, $variant }) => {
      if (!disabled && $cursorHover && $variant !== "filled") return "pointer";
    }};

    border-color: ${({
      theme,
      $cursorHover,
      $appearance,
      disabled,
      $variant,
    }) => {
      if (!disabled && $cursorHover && $variant !== "filled")
        return (
          theme?.icon?.outlined?.[$appearance]?.border?.color?.hover ||
          inube.icon.outlined[$appearance].border.color.hover
        );
    }};

    color: ${({ theme, $cursorHover, $appearance, disabled, $variant }) => {
      if (!disabled && $cursorHover && $variant !== "filled")
        return (
          theme?.icon?.outlined?.[$appearance]?.border?.color?.hover ||
          inube.icon.outlined[$appearance].border.color.hover
        );
    }};

    background-color: ${({
      theme,
      $variant,
      $appearance,
      $cursorHover,
      disabled,
    }) => {
      if (!disabled && $variant === "filled" && $cursorHover)
        return (
          theme?.icon?.filled?.[$appearance]?.background?.color?.hover ||
          inube.icon.filled[$appearance].background.color.hover
        );
    }};
  }
`;
