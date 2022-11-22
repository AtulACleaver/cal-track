import "../css/Tags.css";
import { useContext } from "react";
import styled, { css } from "styled-components";
import { StateContext } from "./StateProvider.jsx";
import React from 'react';

const Tags = () => {
  const { activeTag, setActiveTag } = useContext(StateContext);

  const handleTagClick = (index) => {
    setActiveTag(index);
  };

  return (
    <div className="TagsContainer">
      {["Focus", "Short Break", "Long Break"].map((tag, i) => (
        <Tag
          onClick={() => handleTagClick(i)}
          activeTag={activeTag === i}
          key={i}
        >
          {tag}
        </Tag>
      ))}
    </div>
  );
};

const Tag = styled.button`
  all: unset;
  height: 3rem;
  flex: 1;
  text-align: center;
  border-radius: 0.75rem;
  font-size: 1.2rem;
  color: #000;

  ${({ activeTag }) =>
    activeTag &&
    css`
      background-color: var(--text-color);
      color: white;
    `}
`;

export default Tags;
