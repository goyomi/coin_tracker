import "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    mode: string;
    mainFontColor: string;
    secondFontColor: string;
    grey1Color: string;
    grey2Color: string;
    changeUpColor: string;
    changeDownColor: string;
    onActiveColor: string;
    buttonColor: string;
    backgroundColor: string;
  }
}
