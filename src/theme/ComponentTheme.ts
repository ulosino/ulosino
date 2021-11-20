// Component theming
// Listed A-Z and imported by UIThemeProvider

export const Button = {
  baseStyle: {
    fontWeight: 600,
  },
  defaultProps: {
    size: "lg",
  },
};

export const Card = {
  baseStyle: {
    padding: 4,
    borderRadius: "md",
  },
  variants: {
    button: ({ colorMode }) => ({
      bg: colorMode === "dark" ? "gray.800" : "gray.100",
      color: colorMode === "dark" ? "white" : "gray.800",
    }),
    brand: {
      bg: "glass.200",
    },
    guides: {
      bg: "clay.200",
    },
    alert: {
      bg: "hazard.200",
    },
  },
  defaultProps: {
    variant: "button",
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
