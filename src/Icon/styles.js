import styled from "styled-components";

import { inube } from "@inubekit/foundations";

const StyledIcon = styled.figure`
  display: inline-block;
  padding: 0px;
  margin: 0px;

  & svg {
    display: block;
    box-sizing: border-box;
    width: ${({ $size }) => $size};
    height: ${({ $size }) => $size};
    padding: ${({ $spacing }) => {
      if ($spacing === "wide") return "8px";
      if ($spacing === "compact") return "4px";
      return "0px";
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
      return (
        theme?.icon?.[$appearance]?.contrast?.color?.regular ||
        inube.icon[$appearance].contrast.color.regular
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
            theme?.icon?.[$appearance]?.background?.color?.disabled ||
            inube.icon[$appearance].background.color.disabled
          );
        if ($parentHover)
          return (
            theme?.icon?.[$appearance]?.background?.color?.hover ||
            inube.icon[$appearance].background.color.hover
          );
        return (
          theme?.icon?.[$appearance]?.background?.color?.regular ||
          inube.icon[$appearance].background.color.regular
        );
      }
    }};

    border-radius: ${({ $shape }) => ($shape === "circle" ? "50%" : "8px")};
    border-width: ${({ $variant }) =>
      $variant === "outlined" ? "1px" : "0px"};
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
  }

  & svg:hover {
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
          theme?.icon?.[$appearance]?.background?.color?.hover ||
          inube.icon[$appearance].background.color.hover
        );
    }};
  }
`;
export { StyledIcon };
