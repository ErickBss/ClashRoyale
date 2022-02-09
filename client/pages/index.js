import Head from "next/head";
import axios from "axios";

import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import light from "../styles/light";
import dark from "../styles/dark";

import NavBar from "../components/NavBar";
import Main from "../components/MainContent";
import RightContainer from "../components/ContainerRight";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: flex-start;
`;

export default function HomePage() {
  const [theme, setTheme] = useState(light);
  const [cards, setCards] = useState([]);
  const [TopCards, setTops] = useState({});
  const [filterCards, setFilterCards] = useState([]);

  function handleTheme() {
    setTheme(theme.title == "light" ? dark : light);
  }

  function APIData() {
    try {
      axios.get("http://localhost:2999/api").then((response) => {
        let data = response.data;
        let array = [];
        data.forEach((element) => {
          array = [...array, element];
        });
        setCards(array);
      });
    } catch (error) {
      console.error(error);
    }
  }

  let topsFilter = [];
  let rest = [];
  function test(card) {
    if (
      card.name == "P.E.K.K.A" ||
      card.name == "Sparky" ||
      card.name == "Archer Queen"
    ) {
      topsFilter = [...topsFilter, card];
    } else {
      rest = [...rest, card];
      setFilterCards(rest);
    }
    setTops(topsFilter);
  }

  function TopCharacters() {
    cards.forEach(test);
  }

  useEffect(() => {
    APIData();
    TopCharacters();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Clash Royale</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900display=swap"
          rel="stylesheet"
        ></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Container>
        <NavBar handleTheme={handleTheme} />
        <Main characters={TopCards} />
        <RightContainer cards={filterCards} />
      </Container>
    </ThemeProvider>
  );
}
