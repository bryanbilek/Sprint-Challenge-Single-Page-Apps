import React from "react";
import {
  CardImg, CardBody,
} from 'reactstrap';
import rickmorty from "../assets/rickmorty.jpg";
import styled from "styled-components";

const CardH1 = styled.h1`
color: green;
text-align: center;
font-weight: bold;
font-size: 2rem;
`

const CardH2 = styled.h2`
color: green;
text-align: center;
font-size: 1rem;
`

const CardStyle = styled.div`
border: 5px solid green;
margin: 3%;
`

export default function CharacterCard(props) {
  return (
    <CardStyle>
      <CardImg top width="100%" src={rickmorty} alt="Card image cap" />
      <CardBody>
        <CardH1>{props.name}</CardH1>
        <CardH2>{props.status}</CardH2>
        <CardH2>{props.species}</CardH2>
      </CardBody>
    </CardStyle>
  )
}
