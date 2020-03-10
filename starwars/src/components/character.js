import React, { useState, useEffect } from "react";

import axios from "axios";
import styled from "styled-components";

const CharecterStats = styled.div`
  border: 2px solid black;
  border-radius: 3px;
  padding: 4px 16px;
  margin: 8px;
  width: 30%;
  background-color: rgba(255, 217, 179, 0.8);
`;
const StatsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const StatsP = styled.p`
  font-family: "Nunito", sans-serif;
  font-size: 1.3em;
`;
export const CharecterInfo = () => {
  const [charInfo, setState] = useState([]);
  useEffect(() => {
    axios.get("https://swapi.co/api/people/").then(response => {
      console.log(response.data.results);
      setState(response.data.results);
    });
  }, []);
  return (
    <StatsWrap>
      {charInfo.map(charecter => (
        <CharecterStats>
          <StatsP>Name: {charecter.name}</StatsP>
          <StatsP>Birth Year: {charecter.birth_year}</StatsP>
          <StatsP>Gender: {charecter.gender}</StatsP>
        </CharecterStats>
      ))}
    </StatsWrap>
  );
};
