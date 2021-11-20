import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// Import component theming
import { Button, Card, Heading, Table } from "src/theme/ComponentTheme";

const config: ThemeConfig = {
  useSystemColorMode: true,
};

const UITheme = extendTheme({
  config,
  colors: {
    // Main brand color
    brand: "rgba(74, 152, 166, 1)",

    // Main brand color, transparent
    // rgba(74, 152, 166, 0.33)
    glass: {
      50: "#dff9fc54",
      100: "#c3e4ea54",
      200: "#a3d1da54",
      300: "#82bec954",
      400: "#60abb854",
      500: "#47919f54",
      600: "#34717c54",
      700: "#22525954",
      800: "#0e313854",
      900: "#00121854",
    },

    // Secondary colors, transparent and used to attract attention (non-brand assets)
    // rgba(255, 127, 80, 0.33)
    berry: {
      50: "#ffe6f054",
      100: "#f6bfcf54",
      200: "#e996af54",
      300: "#df6d9054",
      400: "#d4447054",
      500: "#bb2b5654",
      600: "#92204354",
      700: "#6a163054",
      800: "#410a1d54",
      900: "#1d010a54",
    },
    // rgba(209, 226, 49, 0.33)
    sand: {
      50: "#fafddf54",
      100: "#f0f6b754",
      200: "#e6ef8c54",
      300: "#dce96154",
      400: "#d2e33654",
      500: "#b9c91c54",
      600: "#909c1354",
      700: "#67700b54",
      800: "#3d430254",
      900: "#15170054",
    },
    // rgba(166, 88, 75, 0.33)
    clay: {
      50: "#ffece654",
      100: "#edccc754",
      200: "#daada654",
      300: "#c88e8354",
      400: "#b86d6154",
      500: "#9e544754",
      600: "#7c403754",
      700: "#5a2e2754",
      800: "#381a1654",
      900: "#1b050254",
    },
    // rgba(255, 121, 0, 0.33)
    hazard: {
      50: "#fff1da54",
      100: "#ffd6ae54",
      200: "#ffbc7d54",
      300: "#ffa14c54",
      400: "#ff861a54",
      500: "#e66d0054",
      600: "#b4550054",
      700: "#813c0054",
      800: "#4f230054",
      900: "#20090054",
    },
  },
  styles: {
    global: {
      body: {
        fontFamily: "'Public Sans', sans-serif",
        fontWeight: 400,
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
