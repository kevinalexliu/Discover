import styled, { createGlobalStyle } from 'styled-components';
import { PrussianBlue, CeladonBlue, Melon, Jet, SilverPink } from '../../../../ui/colors.js';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
  }
  html {
      box-sizing: border-box;
      font-size: 62.5%;
  }
  body {
      font-family: "Noto Sans JP";
      background-color: ${Jet};
      color: white;
      font-weight: 400;
      line-height: 1.6;
  }
`;

export const Banner = styled.div`
  display: flex;

`;

export const Container = styled.div`
  max-width: 1400px;
  width: 80%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 10rem 5rem repeat(2, 20rem) auto;
  grid-gap: 1rem;
  margin: auto;

  #categoryDiv {
    grid-column: span 6;
    grid-row: 2 / 3;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    border-radius: 1rem;
  }

  #musicContainer {
    grid-column: 1 / 3;
    grid-row: 3 / 5;
    background-color: ${SilverPink};
    border-radius: 1rem;
  }

  #recommend {
    grid-column: 3 / 7;
    grid-row: 3 / 5;
    background-color: ${SilverPink};
    border-radius: 1rem;
  }

  #info {
    grid-column: span 6;
    grid-row: 5 / 6;
    background-color: ${SilverPink};
    border-radius: 1rem;
    height: 10rem;
  }
`;


// export const ButtonDiv = styled.div`
//   display: flex;
//   grid-column: span 6;
//   grid-row: 2 / 3;
// `;

export const Button = styled.button`
  width: 12rem;
  height: 3rem;
  color: white;
  font-size: 1.1rem;
  background-color: ${Melon};
  border: none;
  color: ${Jet};
  font-weight:700;
  border-radius: 1rem;
  : focus{
    outline: none;
  }
`;