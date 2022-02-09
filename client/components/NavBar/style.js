import styled, { css } from "styled-components";
import { shade } from "polished";

import { Crown } from "@styled-icons/boxicons-solid/Crown";
import { AccountCircle } from "@styled-icons/material/AccountCircle";
import { News } from "@styled-icons/boxicons-solid/News";
import { Trophy } from "@styled-icons/icomoon/Trophy";

export const Container = styled.nav`
  height: 100%;
  width: 114px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background: ${(props) => props.theme.colors.contrast};
`;

export const Logo = styled.img`
  width: 65%;
  height: auto;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 35%;
`;

const IconStyles = css`
  color: ${(props) => shade(0.25, props.theme.colors.icon)};
  width: 28px;
  height: auto;
  cursor: pointer;
`;

export const CrownIcon = styled(Crown)`
  ${IconStyles}
  color: ${(props) => props.theme.colors.primary};
`;
export const AccountCircleIcon = styled(AccountCircle)`
  ${IconStyles}
`;
export const NewsIcon = styled(News)`
  ${IconStyles}
`;
export const TrophyIcon = styled(Trophy)`
  ${IconStyles}
`;
