import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const SectionStyled = styled.div`
text-align: center;
`

const FormStyle = styled.form`
margin: 2%;
`

export default function SearchForm(props) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const characters = props.data.filter(character =>
      character.name.toLowerCase().includes(query.toLowerCase())
    );
    props.setFilteredData(characters);
  }, [query]);

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  return (
    <SectionStyled>
      {/* // Add a search form here */}
      <FormStyle className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="character name search"
          autoComplete="on"
        />
      </FormStyle>
    </SectionStyled>
  );
}
