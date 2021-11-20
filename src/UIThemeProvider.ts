import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  useSystemColorMode: true,
};

//
// Chakra UI component overrides
//

export const Button = {
  baseStyle: {
    fontWeight: 600,
    borderRadius: "xl",
  },
  defaultProps: {
    size: "md",
    variant: "outline",
  },
};

export const Card = {
  baseStyle: {
    padding: 4,
    borderRadius: "xl",
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
    }),
    brand: {
      bg: "brand",
      color: "gray.800",
    },
    guides: {
      bg: "secondary",
      color: "white",
    },
    alert: {
      bg: "alert",
    },
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

//
// Bring theming together
//

const UITheme = extendTheme({
  config,
  colors: {
    // Main brand colours
    brand: "rgba(242, 205, 138, 1)",
    secondary: "rgba(0, 30, 56, 1)",

    // Other colours
    alert: "rgba(253, 188, 180, 1)",
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
    // Smaller subheadings, similar to iOS
    secondary: {
      fontSize: "sm",
      fontWeight: 200,
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
