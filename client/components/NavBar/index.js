import { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

import {
  AccountCircleIcon,
  Container,
  CrownIcon,
  IconsContainer,
  Logo,
  NewsIcon,
  TrophyIcon,
} from "./style";

export default function NavBar({ handleTheme }) {
  const { colors, title } = useContext(ThemeContext);
  return (
    <Container>
      <Logo src="/logo.png" />
      <IconsContainer>
        <CrownIcon />
        <TrophyIcon />
        <NewsIcon />
        <AccountCircleIcon />
      </IconsContainer>
      <Switch
        onChange={handleTheme}
        checked={title == "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={38}
        handleDiameter={25}
        onHandleColor={colors.primary}
        offHandleColor={colors.primary}
        onColor={colors.text}
        offColor={colors.text}
      />
    </Container>
  );
}
