import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mainFontColor: string;
    secondFontColor: string;
    thirdFontColor: string;
    borderColor: string;
    changeUpColor: string;
    changeDownColor: string;
  }
}
