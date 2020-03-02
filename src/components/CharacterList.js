import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import { Container, Row } from 'reactstrap';
import styled from "styled-components";

const SectionStyled = styled.div`
text-align: center;
`

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`

    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log(response.data.results);
        setData(response.data.results);
        setFilteredData(response.data.results);
      })
      .catch(error => {
        console.log("the data was not returned", error);
      });

  }, []);

  return (
    <SectionStyled>
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      <SearchForm data={data} setFilteredData={setFilteredData} />
      {filteredData.map(d => {
        return (
          <Container>
            <Row>
              <CharacterCard
                key={d.id}
                name={d.name}
                status={d.status}
                species={d.species}
              />
            </Row>
          </Container>
        )
      })}
    </SectionStyled>
  );
}
