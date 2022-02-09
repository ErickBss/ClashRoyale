import { shade } from "polished";

import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background: ${(props) => props.theme.colors.background};
`;

export const Introduction = styled.section`
  width: 90%;
  height: 314px;
  padding: 0 10px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5%;
`;

export const TextField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  max-width: 35%;
  height: 50%;

  h1 {
    font-weight: 700;
    color: ${(props) => props.theme.colors.primary};
  }

  p {
    font-weight: 400;
    color: ${(props) => shade(0.2, props.theme.colors.icon)};
  }

  button {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.buttonText};
    font-weight: bold;

    border: none;
    border-radius: 6px;

    width: 25%;
    padding: 10px;

    cursor: pointer;
  }
`;

export const Banner = styled.img`
  object-fit: fit;
  width: 450px;
  border-radius: 20px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.text};
  width: 90%;
`;

export const BoxesArea = styled.section`
  width: 90%;
  height: 170px;
  padding-bottom: 5vh;

  display: flex;
  justify-content: space-between;
`;

export const Box = styled.div`
  background: ${(props) => shade(0, props.theme.colors.box)};
  display: flex;

  width: 268px;
  height: 100%;
  padding: 4px;

  border-radius: 20px;

  img {
    flex: 1;
  }
`;

export const Box2 = styled(Box)`
  background: linear-gradient(
    340deg,
    rgba(78, 74, 177, 1) 50%,
    rgba(102, 98, 196, 1) 70%
  );
`;

export const Box3 = styled(Box)`
  background: linear-gradient(
    340deg,
    rgba(233, 123, 100, 1) 48%,
    rgba(230, 145, 128, 1) 70%
  );
`;

export const Description = styled.section`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
  padding-left: 10px;

  border-radius: 20px;

  h2 {
    color: ${(props) => props.theme.colors.background};
  }

  p {
    font-weight: 600;
    color: ${(props) => props.theme.colors.secondary};
  }
`;
