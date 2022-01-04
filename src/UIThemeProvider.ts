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
    padding: 4,
    borderRadius: "xl",
    shadow: "md",
  },
  variants: {
    solid: ({ colorMode }) => ({
      bg: colorMode === "dark" ? "whiteAlpha.300" : "whiteAlpha.800",
      color: "inherit",
    }),
    button: ({ colorMode }) => ({
      bg: colorMode === "dark" ? "whiteAlpha.300" : "whiteAlpha.800",
      color: colorMode === "dark" ? "white" : "gray.800",
      cursor: "pointer",
      shadow: "inner",
    }),
    brand: ({ colorMode }) => ({
      bg: colorMode === "dark" ? "whiteAlpha.300" : "whiteAlpha.800",
      color: "inherit",
    }),
    alert: ({ colorMode }) => ({
      bg: colorMode === "dark" ? "whiteAlpha.300" : "whiteAlpha.800",
      color: "inherit",
      padding: 8,
    }),
  },
  defaultProps: {
    variant: "solid",
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

    // Other colours
    alert: "rgba(253, 188, 180, 0.5)",
  },
  styles: {
    global: {
      body: {
        fontFamily: "Public Sans",
      },
      // Next.js <Link> does not style links
      a: {
        textDecoration: "underline",
        cursor: "pointer",
      },
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
    secondary: {
      fontSize: "sm",
      fontWeight: 600,
      lineHeight: "200%",
      textTransform: "uppercase",
    },
  },
  components: {
    Button,
    Card,
    Table,
    Heading,
  },
});

export default UITheme;
