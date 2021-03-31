import styled, { createGlobalStyle } from 'styled-components';
import { PrussianBlue, CeladonBlue, Melon, Jet, SilverPink } from '../../../ui/colors.js';

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
      background-color: white;
      color: white;
      font-weight: 400;
      line-height: 1.6;
  }
`;

export const Container = styled.div`
  width: 50rem;
  height: 30rem;
  position: absolute;
  padding: 4rem;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: ${Jet};
  border-radius: 2rem;
`;

export const Header = styled.h1`
  font-size: 5rem;
  line-height: 6rem;
  font-weight: 900;
  color: ${Melon}
`;

export const Paragraph = styled.p`
  margin-top: 1rem;
  font-size: 1.5rem;
`;

export const Button = styled.button`
  width: 15rem;
  color: black;
  height: 3rem;
  font-size: 1rem;
  border-radius: 1.5rem;
  position: absolute;
  right: 4rem;
  bottom: 4rem;
  border: none;
  background-color: ${Melon};
  font-weight: 700;
  : focus{
    outline: none;
  }
  : hover {
    color: white;
    background-color: ${SilverPink};
    cursor: pointer;
  }
`;