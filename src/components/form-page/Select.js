import React, { useState } from "react";
import styled from "styled-components";


const DropDownContainer = styled("div")`
  width: 500px;
`;

const DropDownHeader = styled("div")`
  padding: 0.4em 2em 0.4em 1em;
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  border-bottom: 1px solid black;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  cursor: pointer;
  list-style: none;
  margin-bottom: 0.8em;
  display: flex;
  justify-content: space-between;
  align-items: center; 

  img {
    width: 200px;
    height: 200px;
  }
`;

export default function Select({options, formData, setFormData, images}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setIsOpen(false);
    setFormData({ ...formData, character_id: value })
  };

  return (
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
        {
          formData.character_id ? options[formData.character_id - 1]['name'] : "select"
        }
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map(option => (
                <ListItem onClick={onOptionClicked(option.id)} key={Math.random()}>
                  {option.id}
                  <img src={"https://chess-tournament-api.devtest.ge/"+option.image} alt="image" />
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
  );
}