import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :where(body, iframe, pre, img, svg, video, canvas, select) {
    max-width: 100%;
    overflow: auto;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    box-sizing: border-box;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  html {
    background-color: rgb(19, 26, 42);
  }

  body {
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    height: 100%;
    min-height: -webkit-fill-available;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
  }

  button {
    user-select: none;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    cursor: pointer;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  a,
  a:hover,
  a:visited {
    text-decoration: none;
    color: inherit;
  }

  select {
    background-color: white;
  }

  fieldset {
    border: none;
  }

  input:focus,
  button:focus,
  select:focus,
  textarea:focus {
    outline: none;
  }

  input,
  textarea {
    -webkit-appearance: none;
    -webkit-border-radius: 0;
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  ::-ms-clear {
    display: none !important;
  }

  ::-ms-reveal {
    display: none !important;
  }
`
