import {
  Banner,
  Box,
  BoxesArea,
  Container,
  Description,
  Introduction,
  TextField,
  Title,
} from "./style";

export default function Main({ characters }) {
  return (
    <Container>
      <Introduction>
        <TextField>
          <h1>CLASH ROYALE</h1>
          <p>
            Search into the site and find news, cards of all rarity and the top
            players ranked.
          </p>
          <button>Cards</button>
        </TextField>
        <Banner src="/Banner.png" />
      </Introduction>
      <Title>Top characters</Title>
      <BoxesArea>
        <Box>
          <Description>
            <h2> {characters[0]?.name || "Wait"} </h2>
            <p>{`Max Level ${characters[0]?.Level || "Wait"}`}</p>
          </Description>
          <img src={characters[0]?.image || "Wait"} />
        </Box>
        <Box>
          <Description>
            <h2> {characters[1]?.name || "Wait"} </h2>
            <p>{`Max Level ${characters[1]?.Level || "Wait"}`}</p>
          </Description>
          <img src={characters[1]?.image || "Wait"} />
        </Box>
        <Box>
          <Description>
            <h2> {characters[2]?.name || "Wait"} </h2>
            <p>{`Max Level ${characters[2]?.Level || "Wait"}`}</p>
          </Description>
          <img src={characters[2]?.image || "Wait"} />
        </Box>
      </BoxesArea>
    </Container>
  );
}
