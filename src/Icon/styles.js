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
        theme?.icon?.[$appearance]?.content?.color?.disabled ||
        inube.icon[$appearance].content.color.disabled
      );
    if ($parentHover && $variant !== "filled")
      return (
        theme?.icon?.[$appearance]?.content?.color?.hover ||
        inube.icon[$appearance].content.color.hover
      );
    return (
      theme?.icon?.[$appearance]?.content?.color?.regular ||
      inube.icon[$appearance].content.color.regular
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
          theme?.icon?.[$appearance]?.content?.color?.disabled ||
          inube.icon[$appearance].content.color.disabled
        );
      if ($parentHover)
        return (
          theme?.icon?.[$appearance]?.content?.color?.hover ||
          inube.icon[$appearance].content.color.hover
        );
      return (
        theme?.icon?.[$appearance]?.content?.color?.regular ||
        inube.icon[$appearance].content.color.regular
      );
    }
  }};

  color: ${({ theme, $variant, $appearance, $parentHover, disabled }) => {
    if (disabled)
      return (
        theme?.icon?.[$appearance]?.contrast?.color?.disabled ||
        inube.icon[$appearance].contrast.color.disabled
      );
    if ($variant !== "filled") {
      if ($parentHover)
        return (
          theme?.icon?.[$appearance]?.content?.color?.hover ||
          inube.icon[$appearance].content.color.hover
        );
      return (
        theme?.icon?.[$appearance]?.content?.color?.regular ||
        inube.icon[$appearance].content.color.regular
      );
    }
    if (!filledAppearancesWithGrayIcon.includes($appearance))
      return (
        theme?.icon?.light?.content?.color?.regular ||
        inube.icon.light.content.color.regular
      );
    return (
      theme?.icon?.gray?.contrast?.color?.regular ||
      inube.icon.gray.contrast.color.regular
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
          theme?.icon?.[$appearance]?.content?.color?.hover ||
          inube.icon[$appearance].content.color.hover
        );
    }};

    color: ${({ theme, $cursorHover, $appearance, disabled, $variant }) => {
      if (!disabled && $cursorHover && $variant !== "filled")
        return (
          theme?.icon?.[$appearance]?.content?.color?.hover ||
          inube.icon[$appearance].content.color.hover
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
          theme?.icon?.[$appearance]?.content?.color?.hover ||
          inube.icon[$appearance].content.color.hover
        );
    }};
  }
`;
