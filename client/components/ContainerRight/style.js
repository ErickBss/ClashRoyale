import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  height: 100vh;
  width: 300px;
  overflow-y: scroll;
  top: 0;

  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme.colors.contrast};
`;

export const Title = styled.h2`
  width: 100%;
  padding: 20px 0;

  text-align: center;
  font-size: 1.4rem;

  border-bottom: 4px solid ${(props) => shade(0, props.theme.colors.tertiary)};
  color: ${(props) => shade(0, props.theme.colors.title)};
  background: ${(props) => props.theme.colors.background};
`;

export const Lines = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  width: 100%;
  height: 80px;

  padding: 15px 0;

  border-bottom: 3px dashed ${(props) => shade(0, props.theme.colors.secondary)};

  img {
    max-height: 70px;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    color: ${(props) => props.theme.colors.primary};
    font-weight: bold;

    font-size: 1.2rem;
    max-width: 20px;
  }

  p {
    color: ${(props) => props.theme.colors.text};
    font-weight: bold;
  }
`;
