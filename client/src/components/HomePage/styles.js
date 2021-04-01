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
  min-width: 1000px;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 10rem 5rem repeat(2, auto);
  grid-gap: 1rem;
  margin: auto;

  #categoryDiv {
    grid-column: span 6;
    grid-row: 2 / 3;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap:1rem;
    align-items: center;
    justify-items: center;
    border-radius: 1rem;
  }

  #musicContainer {
    grid-column: 1 / 3;
    grid-row: 3 / 4;
    background-color: ${SilverPink};
    border-radius: 1rem;
    display: grid;
    grid-template-rows: 25rem auto;
    grid-gap: 1rem;
    padding: 2rem;

    .image {
      grid-row: 1 / 2;
      justify-self: center;
    }

    .track {
      grid-row: 2 / 3;
      padding: 0 1.8rem;
    }
  }

  #recommend {
    grid-column: 3 / 7;
    grid-row: 3 / 4;
    background-color: ${SilverPink};
    border-radius: 1rem;
    padding: 2rem;
    display: grid;
    grid-template-rows: 11rem auto;
    grid-gap: 1rem;

    .description {
      display: grid;
      grid-row: 1 / 2;
      grid-template-columns: 10rem 1fr;
      grid-gap: 1rem;

      .thumbnail {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
      }
      .info {
        grid-column: 2 / 5;
        grid-row: 1 / 2;
      }
    }
    .images {
      grid-row: 2 / 3;
      height: auto;
    }
  }

  #info {
    grid-column: 3 / 7;
    grid-row: 4 / 5;
    background-color: ${SilverPink};
    border-radius: 1rem;
    height: 25rem;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 14rem 1fr 1fr;
    grid-template-rows: auto repeat(2, 1fr);
    padding: 2rem;

    .cover {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
    }

    .header {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }

    .description {
      grid-row: 2 / 3;
      grid-column: 2 / 3;
    }

    .tracks {
      grid-column: 3 / 4;
      grid-row: span 3;
      overflow: hidden;
      .track {
        cursor: pointer;
        : hover {
          font-weight: 700;
        }
      }
    }
  }
`;


export const Button = styled.button`
  width: 13rem;
  height: 3rem;
  color: white;
  font-size: 1rem;
  background-color: ${Melon};
  border: none;
  color: ${Jet};
  font-weight:700;
  border-radius: 1rem;
  : focus{
    outline: none;
  }
  : hover {
    background-color: ${CeladonBlue};
    color: white;
    cursor: pointer;
  }
`;

export const Thumbnail = styled.img`
  width: ${props=>props.width}rem;
  height: ${props=>props.height}rem;
  border: none;
  object-fit: cover;
  cursor: pointer;
  : hover {
    transform: scale(1.1);
  }
`;
export const BigThumbnail = styled.img`
  width: ${props=>props.width}rem;
  height: ${props=>props.height}rem;
  border: none;
  object-fit: cover;
`;