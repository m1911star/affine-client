import { EditorContainer } from '@blocksuite/editor';

export type Theme = 'light' | 'dark';
export type ThemeMode = Theme | 'auto';

export type ThemeProviderProps = {
  defaultTheme?: Theme;
};

export type ThemeProviderValue = {
  theme: AffineTheme;
  mode: ThemeMode;
  changeMode: (newMode: ThemeMode) => void;
};

export interface AffineTheme {
  mode: Theme;
  editorMode: EditorContainer['mode'];
  colors: {
    primaryColor: string;

    pageBackground: string;
    popoverBackground: string;
    tooltipBackground: string;
    hoverBackground: string;
    codeBackground: string;
    warningBackground: string;
    // Use for the page`s text
    textColor: string;
    // Use for the editor`s text, because in edgeless mode text is different form other
    edgelessTextColor: string;
    linkColor: string;
    // In dark mode, normal text`s (not bold) color
    linkColor2: string;
    linkVisitedColor: string;
    iconColor: string;
    popoverColor: string;
    tooltipColor: string;
    codeColor: string;
    quoteColor: string;
    placeHolderColor: string;
    selectedColor: string;
    borderColor: string;
    disableColor: string;
    warningColor: string;
  };
  font: {
    xs: string; // tiny
    sm: string; // small
    base: string;

    family: string;
    family2: string;

    lineHeightBase: string | number;
  };
  zIndex: {
    modal: number;
    popover: number;
  };
  shadow: {
    modal: string;
    popover: string;
    tooltip: string;
  };
  space: {
    paragraph: string;
  };
  radius: {
    popover: string;
  };
}

export interface AffineThemeCSSVariables {
  '--affine-theme-mode': Theme;
  '--affine-editor-mode': EditorContainer['mode'];

  '--affine-primary-color': AffineTheme['colors']['primaryColor'];
  '--affine-page-background': AffineTheme['colors']['pageBackground'];
  '--affine-popover-background': AffineTheme['colors']['popoverBackground'];
  '--affine-hover-background': AffineTheme['colors']['hoverBackground'];
  '--affine-code-background': AffineTheme['colors']['codeBackground'];
  '--affine-tooltip-background': AffineTheme['colors']['tooltipBackground'];

  '--affine-text-color': AffineTheme['colors']['textColor'];
  '--affine-edgeless-text-color': AffineTheme['colors']['edgelessTextColor'];
  '--affine-link-color': AffineTheme['colors']['linkColor'];
  // In dark mode, normal text`s (not bold) color
  '--affine-link-color2': AffineTheme['colors']['linkColor2'];
  '--affine-link-visited-color': AffineTheme['colors']['linkVisitedColor'];
  '--affine-icon-color': AffineTheme['colors']['iconColor'];
  '--affine-popover-color': AffineTheme['colors']['popoverColor'];
  '--affine-code-color': AffineTheme['colors']['codeColor'];
  '--affine-quote-color': AffineTheme['colors']['quoteColor'];
  '--affine-placeholder-color': AffineTheme['colors']['placeHolderColor'];
  '--affine-selected-color': AffineTheme['colors']['selectedColor'];
  '--affine-border-color': AffineTheme['colors']['borderColor'];
  '--affine-disable-color': AffineTheme['colors']['disableColor'];
  '--affine-tooltip-color': AffineTheme['colors']['tooltipColor'];

  '--affine-modal-shadow': AffineTheme['shadow']['modal'];
  '--affine-popover-shadow': AffineTheme['shadow']['popover'];
  '--affine-tooltip-shadow': AffineTheme['shadow']['tooltip'];

  '--affine-font-xs': AffineTheme['font']['xs']; // tiny
  '--affine-font-sm': AffineTheme['font']['sm']; // small
  '--affine-font-base': AffineTheme['font']['base'];
  '--affine-line-height-base': AffineTheme['font']['lineHeightBase'];

  '--affine-z-index-modal': AffineTheme['zIndex']['modal'];
  '--affine-z-index-popover': AffineTheme['zIndex']['popover'];

  '--affine-font-family': AffineTheme['font']['family'];
  '--affine-font-family2': AffineTheme['font']['family2'];

  '--affine-paragraph-space': AffineTheme['space']['paragraph'];

  '--affine-popover-radius': AffineTheme['radius']['popover'];
}

declare module '@emotion/react' {
  export interface Theme extends AffineTheme {}
}
