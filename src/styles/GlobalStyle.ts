import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
  font-weight: normal;
	font: inherit;
	vertical-align: baseline;
	color: ${(props) => props.theme.mainFontColor};
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

*{
  box-sizing: border-box;
}

html{
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
	line-height: 1;
	background-color: ${(props) => props.theme.backgroundColor};
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

button {
  border: 0;
  background: none;
  font: inherit;
  color: inherit;
  cursor: pointer;
}

button:not(:disabled) {
  cursor: pointer;
}

img {
  vertical-align: text-bottom;
}

a{
  text-decoration: none;
	color: inherit;
}

:root{
/* Web font sizes */
	--font-size-web-small: 1.5rem;
  --font-size-web-medium: 1.8rem;
  --font-size-web-large: 2rem;
  --font-size-web-extra-large: 3rem;

  /* Tablet font sizes */
  --font-size-tablet-small: 1.2rem;
  --font-size-tablet-medium: 1.3rem;
  --font-size-tablet-large: 1.6rem; 
  --font-size-tablet-extra-large: 2.5rem;

  /* Mobile font sizes */
  --font-size-mobile-small: 1rem;
  --font-size-mobile-medium: 1.2rem;
  --font-size-mobile-large: 1.4rem;
  --font-size-mobile-extra-large: 1.8rem;

	/* Web Width sizes */
	--width-web-max: 124rem;

	/* Tablet Width sizes */
	--width-tablet-max: 95rem;
};
`;
