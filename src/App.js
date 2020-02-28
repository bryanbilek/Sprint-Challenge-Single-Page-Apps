import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage.js";
import styled from "styled-components";
import { Route } from "react-router-dom";

const MainBG = styled.main`
background: purple;
text-align: center;
`

export default function App() {
  return (
    <MainBG>
      <Header />

      <Route exact path="/">
        <WelcomePage />
      </Route>

      <CharacterList />
    </MainBG>
  );
}
