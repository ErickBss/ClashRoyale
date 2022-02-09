import { Description } from "./style";
import { Container, Lines, Title } from "./style";

export default function RightContainer({ cards }) {
  return (
    <Container>
      <Title> Characters </Title>
      {cards.map((e) => {
        return (
          <Lines>
            <img src={e?.image} />
            <Description>
              <h3>{e?.name}</h3>
              <p>{`Max Level:${e?.Level}`}</p>
            </Description>
          </Lines>
        );
      })}
    </Container>
  );
}
