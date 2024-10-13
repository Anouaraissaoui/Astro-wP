declare module "@config/theme" {
  export interface Theme {
    features: {
      darkMode: {
        enabled: boolean;
      };
      enableSidebar: boolean;
    };
    colors: {
      accent: string;
      categoryLabel: {
        light: string;
        dark: string;
      };
      postUnderline: string;
    };
    fonts: {
      fontFamily: string;
      fontSizes: {
        default: string[];
        xs: string[];
        sm: string[];
        base: string[];
        lg: string[];
        xl: string[];
        "2xl": string[];
        "3xl": string[];
        "4xl": string[];
        "5xl": string[];
      };
    };
  }

  const theme: Theme;
  export default theme;
}
