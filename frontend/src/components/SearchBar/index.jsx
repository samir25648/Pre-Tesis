import { useState } from "react";
import styled, { keyframes } from "styled-components";
import IconSearch from "../../assets/search-icon.svg";
import { fadeIn } from "react-animations";

const SearchBar = ({ className, value, onChange }) => {
  return (
    <Container className={className}>
      <SearchIcon src={IconSearch} />
      <Input
        placeholder="Cat Too beautiful"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Container>
  );
};

const fadeInAnimation = keyframes`${fadeIn}`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  animation: ${fadeInAnimation} 0.5s;
`;

const SearchIcon = styled.img`
  width: 50px;
  height: 50px;
`;

const Input = styled.input`
  padding-left: 20px;
  background-color: #eff0f6;
  border: 0;
  width: 100%;
  height: 40px;
  color: black;
  border-radius: 12px;
`;

export default styled(SearchBar)``;

