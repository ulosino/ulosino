// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

// The UIThemeProvider provides global theming for Chakra UI

import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  useSystemColorMode: true,
};

export const Button = {
  baseStyle: {
    fontWeight: 600,
    borderRadius: "xl",
    shadow: "inner",
  },
  defaultProps: {
    size: "md",
    variant: "outline",
  },
  variants: {
    ghost: {
      shadow: "none",
    },
  },
};

export const Card = {
  baseStyle: {
    padding: 5,
    borderRadius: "xl",
    shadow: "md",
  },
  variants: {
    solid: ({ colorMode }: { colorMode: string }) => ({
      bg: colorMode === "dark" ? "whiteAlpha.300" : "whiteAlpha.800",
      color: "inherit",
    }),
    button: ({ colorMode }: { colorMode: string }) => ({
      bg: colorMode === "dark" ? "blackAlpha.800" : "whiteAlpha.800",
      color: "inherit",
      _hover: {
        bg: colorMode === "dark" ? "gray.900" : "gray.100",
        color: colorMode === "dark" ? "gray.200" : "gray.900",
      },
      transition: ".30s ease",
      cursor: "pointer",
      shadow: "inner",
    }),
    brand: {
      bg: "brand",
      color: "inherit",
    },
    secondary: {
      bg: "secondary",
      color: "inherit",
    },
  },
  defaultProps: {
    variant: "solid",
  },
};

const Badge = {
  baseStyle: { px: 5, pt: "0.5", h: "20px", shadow: "md" },
  sizes: {
    sm: {
      fontSize: "xs",
      borderRadius: "full",
    },
    lg: {
      fontSize: "md",
      borderRadius: "xl",
    },
  },
  variants: {
    solid: {
      bg: "secondary",
      color: "white",
    },
    tempo: {
      bg: "brand",
      color: "gray.800",
    },
    alert: {
      bg: "alert",
      color: "gray.800",
    },
  },
  defaultProps: {
    size: "sm",
    variant: "solid",
  },
};

export const Tabs = {
  defaultProps: {
    variant: "solid-rounded",
    colorScheme: "gray",
    size: "sm",
  },
};

export const TabPanel = {
  defaultProps: {
    px: 0,
    pb: 0,
    pt: 5,
  },
};

export const Heading = {
  baseStyle: {
    fontWeight: 600,
  },
};

export const Table = {
  defaultProps: {
    variant: "simple",
    size: "sm",
  },
};

const UITheme = extendTheme({
  config,
  colors: {
    // Main brand colours
    brand: "rgba(242, 205, 138, 1)",
    secondary: "rgba(0, 30, 56, 1)",

    brandGlass: "rgba(242, 205, 138, 0.5)",
    secondaryGlass: "rgba(0, 30, 56, 0.5)",

    // Here, brand colours replaces Chakra defaults
    yellow: {
      50: "rgba(242, 205, 138, 1)",
      100: "rgba(242, 205, 138, 1)",
      200: "rgba(242, 205, 138, 1)",
      300: "rgba(242, 205, 138, 1)",
      400: "rgba(242, 205, 138, 1)",
      500: "rgba(242, 205, 138, 1)",
      600: "rgba(242, 205, 138, 1)",
      700: "rgba(242, 205, 138, 1)",
      800: "rgba(242, 205, 138, 1)",
      900: "rgba(242, 205, 138, 1)",
    },
    blue: {
      50: "rgba(0, 30, 56, 1)",
      100: "rgba(0, 30, 56, 1)",
      200: "rgba(0, 30, 56, 1)",
      300: "rgba(0, 30, 56, 1)",
      400: "rgba(0, 30, 56, 1)",
      500: "rgba(0, 30, 56, 1)",
      600: "rgba(0, 30, 56, 1)",
      700: "rgba(0, 30, 56, 1)",
      800: "rgba(0, 30, 56, 1)",
      900: "rgba(0, 30, 56, 1)",
    },
  },
  styles: {
    global: {
      b: {
        fontWeight: 600,
      },
    },
  },
  fonts: {
    heading: "Public Sans",
    body: "Public Sans",
  },
  textStyles: {
    miniHeading: {
      fontSize: "sm",
      fontWeight: 600,
      lineHeight: "200%",
      textTransform: "uppercase",
    },
  },
  components: {
    Button,
    Card,
    Badge,
    Tabs,
    Table,
    Heading,
  },
});

// This is imported by Application Kit (general) and _document.tsx (colour mode only)
export default UITheme;
